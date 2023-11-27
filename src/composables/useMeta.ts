import { useHead } from '@unhead/vue'

interface Meta {
  title: string
  description?: string
  image?: string
  keywords?: string
  url?: string
}

export function useMeta(meta: Meta) {
  onMounted(() => useHead({
    title: `${meta.title} | Elysium`,
    meta: [
      {
        name: 'description',
        content: 'Elysium is a Vue 3 component library' || meta.description,
      },
      {
        name: 'keywords',
        content: 'vue, vue3, component, library, elysium, ui, ux, design, framework' || meta.keywords,
      },
      {
        property: 'og:title',
        content: `${meta.title} | Elysium`,
      },
      {
        property: 'og:description',
        content: 'Elysium is a Vue 3 component library' || meta.description,
      },
      {
        property: 'og:image',
        content: meta.image,
      },
      {
        property: 'og:url',
        content: meta.url,
      },
    ],
  }))
}
