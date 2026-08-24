export default defineNuxtPlugin((nuxtApp) => {
  // Only run in the browser
  if (!import.meta.client) return;

  const loadGtag = () => {
    // @ts-ignore
    if (window.gtagLoaded) return;
    // @ts-ignore
    window.gtagLoaded = true;

    // Inject the external GTM script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-W0H7PG4YQF';
    script.async = true;
    document.head.appendChild(script);

    // Initialize the dataLayer and gtag function
    // @ts-ignore
    window.dataLayer = window.dataLayer || [];
    function gtag(){ 
      // @ts-ignore
      window.dataLayer.push(arguments); 
    }
    // @ts-ignore
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', 'G-W0H7PG4YQF');
  };

  // Delay loading until user interacts with the page (mouse move, scroll, touch, click)
  const events = ['mousemove', 'scroll', 'keydown', 'click', 'touchstart'];
  const triggerLoad = () => {
    loadGtag();
    events.forEach(e => window.removeEventListener(e, triggerLoad));
  };

  events.forEach(e => window.addEventListener(e, triggerLoad, { once: true, passive: true }));
  
  // Fallback: load after 4 seconds even if no interaction occurs
  setTimeout(triggerLoad, 4000);
});
