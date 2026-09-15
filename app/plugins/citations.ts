export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.directive('format-citations', {
    mounted(el) {
      if (import.meta.client) formatCitations(el)
    },
    updated(el) {
      if (import.meta.client) formatCitations(el)
    },
    getSSRProps() {
      return {}
    }
  })

  function formatCitations(el: HTMLElement) {
    if (typeof document === 'undefined') return
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null)
    let node
    const nodesToReplace = []

    while ((node = walker.nextNode())) {
      if (node.parentElement?.tagName === 'SUP') continue
      if (node.parentElement?.tagName === 'A') continue // Don't replace inside links

      if (/\[\d+\]/.test(node.nodeValue || '')) {
        nodesToReplace.push(node)
      }
    }

    nodesToReplace.forEach(n => {
      const span = document.createElement('span')
      span.innerHTML = (n.nodeValue || '').replace(/\[(\d+)\]/g, '<sup class="text-xs align-super">[$1]</sup>')
      n.parentNode?.replaceChild(span, n)
    })
  }
})
