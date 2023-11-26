import { useHead } from '@unhead/vue'

interface Meta {
  title: string
  description?: string
  image?: string
  keywords?: string
  url?: string
}

export function useMeta(meta: Meta) {
  onMounted(() => {
    useHead({
      title: `${meta.title} | Elysium`,
      description: 'Elysium is a Vue 3 component library',
      keywords: 'vue, vue3, component, library, elysium, ui, ux, design, framework',
      url: 'http://www.elysium-ui.com/',
    })
  })
}
