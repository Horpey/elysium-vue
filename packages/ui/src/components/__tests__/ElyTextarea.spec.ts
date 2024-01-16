import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ElyTextarea from '../ElyTextarea.vue'

describe('elyTextarea', () => {
  it('renders with default props', async () => {
    const wrapper = mount(ElyTextarea)

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert default values
    expect(wrapper.find('textarea').exists()).toBe(true)
    expect(wrapper.find('textarea').attributes('rows')).toBe('3')
    expect(wrapper.find('textarea').classes()).toContain('border-koromiko-600')
    expect(wrapper.find('textarea').classes()).toContain('resize')

    // Assert slot content is not provided
    expect(wrapper.text()).toBe('')

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with custom props and triggers input event', async () => {
    const wrapper = mount(ElyTextarea, {
      props: {
        name: 'description',
        modelValue: 'This is a description.',
        required: true,
        placeholder: 'Enter your description',
        disabled: false,
        inputClass: 'custom-input-class',
        inputId: 'custom-input-id',
        rows: 5,
        size: 'LARGE',
        resize: false,
        onInput: vi.fn(),
        onBlur: vi.fn(),
        onChange: vi.fn(),
      },
    })

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert custom values
    expect(wrapper.find('textarea').attributes('name')).toBe('description')
    expect(wrapper.find('textarea').attributes('id')).toBe('custom-input-id')
    expect(wrapper.find('textarea').attributes('rows')).toBe('5')
    expect(wrapper.find('textarea').attributes('placeholder')).toBe('Enter your description')
    expect(wrapper.find('textarea').classes()).toContain('custom-input-class')
    expect(wrapper.find('textarea').classes()).toContain('resize-none')
    // ... add more assertions based on your styling and custom props

    // Trigger input event
    await wrapper.find('textarea').setValue('Updated description.')

    // Assert that the onInput function was called
    expect(wrapper.props().onInput).toHaveBeenCalled()

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})
