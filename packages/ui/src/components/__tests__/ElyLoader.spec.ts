import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ElyLoader from '../ElyLoader.vue'

describe('elyLoader', () => {
  it('renders with default props', () => {
    const wrapper = mount(ElyLoader)

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert default values
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('svg').classes()).toContain('animate-spin')
    expect(wrapper.find('svg').classes()).toContain('h-6')
    expect(wrapper.find('svg').classes()).toContain('w-6')
    expect(wrapper.find('svg').classes()).toContain('text-koromiko-700')

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with custom props', () => {
    const wrapper = mount(ElyLoader, {
      props: {
        size: 'LARGE',
        theme: 'LIGHT',
      },
    })

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert custom values
    expect(wrapper.find('svg').exists()).toBe(true)
    expect(wrapper.find('svg').classes()).toContain('animate-spin')
    expect(wrapper.find('svg').classes()).toContain('h-8')
    expect(wrapper.find('svg').classes()).toContain('w-8')
    expect(wrapper.find('svg').classes()).toContain('text-white')

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})
