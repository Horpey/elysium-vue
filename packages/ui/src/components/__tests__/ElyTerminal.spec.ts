import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ElyTerminal from '../ElyTerminal.vue'

describe('elyTerminal', () => {
  it('renders correctly', () => {
    const wrapper = mount(ElyTerminal)

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert that slot content is not provided
    expect(wrapper.text()).toBe('')

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders slot content', () => {
    const wrapper = mount(ElyTerminal, {
      slots: {
        default: '<p>Slot Content</p>',
      },
    })

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert slot content is rendered
    expect(wrapper.find('p').text()).toBe('Slot Content')

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})
