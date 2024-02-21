import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ElyCheckbox from '../ElyCheckbox.vue'

describe('elyCheckbox', () => {
  it('renders with default props', async () => {
    const wrapper = mount(ElyCheckbox)

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert default values
    expect(wrapper.find('input[type="checkbox"]').exists()).toBe(true)
    expect(wrapper.find('input[type="checkbox"]').attributes('id')).toBe('checkbox')
    expect(wrapper.find('input[type="checkbox"]').attributes('name')).toBe('checkbox')
    expect(wrapper.find('input[type="checkbox"]').attributes('disabled')).toBe(undefined)
    expect(wrapper.find('input[type="checkbox"]').classes()).toContain('size-4')
    // ... add more assertions based on your styling and default props

    // Assert slot content is not provided
    expect(wrapper.text()).toBe('')

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with custom props and triggers click event', async () => {
    const wrapper = mount(ElyCheckbox, {
      props: {
        inputId: 'custom-checkbox',
        name: 'custom-checkbox',
        modelValue: true,
        required: true,
        disabled: false,
        value: 'custom-value',
        onClick: vi.fn(),
        onChange: vi.fn(),
      },
      slots: {
        default: 'Custom Checkbox Label',
      },
    })

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert custom values
    expect(wrapper.find('input[type="checkbox"]').attributes('id')).toBe('custom-checkbox')
    expect(wrapper.find('input[type="checkbox"]').attributes('name')).toBe('custom-checkbox')
    expect(wrapper.find('input[type="checkbox"]').attributes('value')).toBe('custom-value')
    expect(wrapper.find('input[type="checkbox"]').attributes('disabled')).toBe(undefined)

    // Trigger click event
    await wrapper.find('input[type="checkbox"]').trigger('click')

    // Assert that the onClick function was called
    expect(wrapper.props().onClick).toHaveBeenCalled()

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  // Add more test cases as needed
})
