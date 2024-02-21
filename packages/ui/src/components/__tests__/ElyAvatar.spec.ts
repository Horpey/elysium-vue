import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ElyAvatar from '../ElyAvatar.vue'

describe('elyAvatar', () => {
  it('renders with default props', async () => {
    const wrapper = mount(ElyAvatar, {
      props: {
        src: 'https://example.com/avatar.jpg',
        alt: 'John Doe',
      },
    })

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert default values
    expect(wrapper.find('.relative.m-2.inline-flex.items-center.justify-center.border-koromiko-700').exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(true)
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/avatar.jpg')
    expect(wrapper.find('img').attributes('alt')).toBe('John Doe')
    expect(wrapper.find('.h-10.w-10').exists()).toBe(true) // Medium size class

    // // Assert that chip is not rendered
    expect(wrapper.find('.absolute.right-0.top-0.block').exists()).toBe(false)

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders without src and with chip', async () => {
    const wrapper = mount(ElyAvatar, {
      props: {
        alt: 'John Doe',
        chip: true,
      },
    })

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)
    expect(wrapper.find('img').exists()).toBe(false)
    expect(wrapper.find('.font-medium.uppercase.leading-none').text()).toBe('JD')
    expect(wrapper.find('.absolute.right-0.top-0.block').exists()).toBe(true)
    expect(wrapper.find('.size-2').exists()).toBe(true)

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})
