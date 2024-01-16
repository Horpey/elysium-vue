import { mount } from '@vue/test-utils'
import { describe, expect, it, vi } from 'vitest'
import ElyInput from '../ElyInput.vue'
import type { ElyInputSizeKey } from '~/types/ElyInput'

describe('elyInput', () => {
  it('renders with default props', async () => {
    const wrapper = mount(ElyInput)

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert default values
    expect(wrapper.find('input').exists()).toBe(true)
    expect(wrapper.find('input').attributes('type')).toBe('text')
    expect(wrapper.find('input').classes()).toContain('border-koromiko-600')

    // Assert slot content is not provided
    expect(wrapper.text()).toBe('')

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with custom props and triggers input event', async () => {
    const wrapper = mount(ElyInput, {
      props: {
        type: 'email',
        name: 'email',
        modelValue: 'test@example.com',
        required: true,
        placeholder: 'Enter your email',
        disabled: false,
        loading: false,
        inputClass: 'custom-input-class',
        size: 'MEDIUM',
        onInput: vi.fn(),
        onBlur: vi.fn(),
        onChange: vi.fn(),
      },
    })

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert custom values
    expect(wrapper.find('input').attributes('type')).toBe('email')
    expect(wrapper.find('input').attributes('name')).toBe('email')
    expect(wrapper.find('input').attributes('placeholder')).toBe('Enter your email')
    expect(wrapper.find('input').classes()).toContain('custom-input-class')

    // Trigger input event
    await wrapper.find('input').setValue('new-email@example.com')

    // Assert that the onInput function was called
    expect(wrapper.props().onInput).toHaveBeenCalled()

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  describe('icon', () => {
    it.each(['SMALL', 'MEDIUM', 'LARGE'])('size %s', (size) => {
      const wrapper = mount(ElyInput, {
        props: {
          type: 'email',
          name: 'email',
          modelValue: 'test@example.com',
          placeholder: 'Enter your email',
          size: size as ElyInputSizeKey,
          onInput: vi.fn(),
          onBlur: vi.fn(),
          onChange: vi.fn(),
        },
        slots: {
          icon: '<svg>mock icon</svg>',
        },
      })

      // Assert that the component is rendered
      expect(wrapper.exists()).toBe(true)

      // Assert that the icon slot is rendered
      expect(wrapper.find('svg').exists()).toBe(true)
      expect(wrapper.find('span.text-koromiko-600').exists()).toBe(true)

      // Assert snapshot
      expect(wrapper.html()).toMatchSnapshot()
    })
  })
})
