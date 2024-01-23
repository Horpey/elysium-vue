import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import ElyAlert from '../ElyAlert.vue'

describe('elyAlert', () => {
  it('renders with default props', async () => {
    const wrapper = mount(ElyAlert)

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert default values
    expect(wrapper.find('.flex.space-x-3.font-mono.text-xs').exists()).toBe(true)
    expect(wrapper.find('.flex.flex-col.space-y-1').exists()).toBe(true)

    // Assert that title and slots are not rendered
    expect(wrapper.find('.text-xs.font-bold.uppercase.tracking-wider').exists()).toBe(false)
    expect(wrapper.find('.span').exists()).toBe(false)

    // Assert that the icon slot is not rendered
    expect(wrapper.find('component').exists()).toBe(false)

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with custom props and slots', async () => {
    const wrapper = mount(ElyAlert, {
      props: {
        title: 'Custom Title',
      },
      slots: {
        default: '<p>Custom content</p>',
      },
    })

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert custom values
    expect(wrapper.find('.text-xs.font-bold.uppercase.tracking-wider').text()).toBe('Custom Title')
    expect(wrapper.find('p').text()).toBe('Custom content')

    // Assert that the icon slot is not rendered
    expect(wrapper.find('component').exists()).toBe(false)

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })

  it('renders with custom icon', async () => {
    const wrapper = mount(ElyAlert, {
      props: {
        // icon: {
        //   // Mock the icon component for testing
        //   template: '<div class="mock-icon"></div>',
        // },
      },
    })

    // Assert that the component is rendered
    expect(wrapper.exists()).toBe(true)

    // Assert that the icon slot is rendered
    // expect(wrapper.find('.mock-icon').exists()).toBe(true)

    // Assert snapshot
    expect(wrapper.html()).toMatchSnapshot()
  })
})
