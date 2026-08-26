const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const vueFiles = execSync('find app -name "*.vue"').toString().split('\n').filter(Boolean);

function getDimensionsFromClass(cls) {
    if (!cls) return null;
    const wMatch = cls.match(/\bw-(\d+|full)\b/);
    const hMatch = cls.match(/\bh-(\d+|full|auto)\b/);
    
    if (wMatch && hMatch) {
        if (wMatch[1] === 'full' || hMatch[1] === 'full' || hMatch[1] === 'auto') return null;
        return {
            width: parseInt(wMatch[1]) * 4,
            height: parseInt(hMatch[1]) * 4
        };
    }
    return null;
}

let modifiedFiles = 0;
for (const file of vueFiles) {
    let content = fs.readFileSync(file, 'utf8');
    let changed = false;
    
    content = content.replace(/<img([^>]*)>/g, (match, attrs) => {
        if (attrs.includes('width=') || attrs.includes('height=')) {
            return match; // already has dimensions
        }
        
        let width = null, height = null;
        
        // Extract src
        const srcMatch = attrs.match(/src="([^"]+)"/);
        // Extract :src
        const dynSrcMatch = attrs.match(/:src="([^"]+)"/);
        
        // Extract class
        const classMatch = attrs.match(/class="([^"]+)"/);
        const cls = classMatch ? classMatch[1] : '';
        
        if (srcMatch) {
            const src = srcMatch[1];
            if (src === '/logo.svg') {
                width = 74; height = 74;
            } else if (src.includes('phone') || src.includes('whatsapp') || src.includes('linkedin') || src.includes('youtube') || src.includes('hamburger')) {
                // Usually icons are square. Let's look at classes.
                const dim = getDimensionsFromClass(cls);
                if (dim) { width = dim.width; height = dim.height; }
                else { width = 24; height = 24; } // generic icon fallback
            } else if (src.includes('about-dr-nihar-modi')) {
                width = 800; height = 1000; // generic portrait
            }
        } else if (dynSrcMatch) {
            // Dynamic source, use class if possible
            const dim = getDimensionsFromClass(cls);
            if (dim) { width = dim.width; height = dim.height; }
            else if (dynSrcMatch[1].includes('testimonial.img')) {
                width = 64; height = 64;
            } else if (dynSrcMatch[1].includes('img.url')) {
                width = 800; height = 600; // generic gallery
            } else {
                width = 100; height = 100; // generic fallback
            }
        }
        
        // Additional fallbacks based on specific known classes
        if (!width && !height && cls.includes('w-12 h-12')) {
            width = 48; height = 48;
        } else if (!width && !height && cls.includes('w-16 h-16')) {
            width = 64; height = 64;
        } else if (!width && !height && cls.includes('w-5 h-5')) {
            width = 20; height = 20;
        } else if (!width && !height && cls.includes('w-6 h-6')) {
            width = 24; height = 24;
        } else if (!width && !height && cls.includes('w-8 h-8')) {
            width = 32; height = 32;
        }
        
        if (width && height) {
            // insert right after <img
            changed = true;
            return `<img width="${width}" height="${height}"${attrs}>`;
        }
        
        return match;
    });
    
    if (changed) {
        fs.writeFileSync(file, content);
        modifiedFiles++;
    }
}
console.log(`Modified ${modifiedFiles} files.`);
