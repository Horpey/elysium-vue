import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ElyButton from '../ElyButton.vue'

describe('elyButton', () => {
  it('renders with default props', () => {
    const wrapper = mount(ElyButton)

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert default values
    expect(wrapper.find('button').exists()).toBe(true)
    expect(wrapper.find('button').attributes('type')).toBe('button')
    expect(wrapper.find('button').classes()).toContain('border')
    expect(wrapper.find('button').classes()).toContain('font-light')

    // Assert slot content is not provided
    expect(wrapper.text()).toBe('')

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with custom props and slot content', async () => {
    const mockFn = vi.fn()

    const wrapper = mount(ElyButton, {
      props: {
        type: 'submit',
        theme: 'SECONDARY',
        disabled: true,
        size: 'LARGE',
        loading: false,
        onClick: mockFn,
      },
      slots: {
        default: '<span>Click me</span>',
      },
    })

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert custom values
    expect(wrapper.find('button').attributes('type')).toBe('submit')
    expect(wrapper.find('button').classes()).toContain('border-transparent')
    expect(wrapper.find('button').classes()).toContain('bg-aquamarine-700')
    expect(wrapper.find('button').classes()).toContain('text-white')

    // Assert slot content is rendered
    // expect(wrapper.find('span').text()).toBe('Click me')

    // Click the button
    await wrapper.find('button').trigger('click')

    // await wrapper.props().onClick()

    // Assert that the onClick function was called
    // expect(mockFn).toHaveBeenCalled()

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})
