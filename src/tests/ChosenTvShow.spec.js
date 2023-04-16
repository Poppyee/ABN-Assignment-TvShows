import { mount } from '@vue/test-utils'
import ChosenTvShow from '../pages/ChosenTvShow.vue'

describe('Navigation.vue', () => {
    
  const wrapper = mount(ChosenTvShow)

  it('renders logo', () => {
    expect(wrapper.find('#logo').exists()).toBe(true)
  })

  it('renders input', () => {
    expect(wrapper.find('#myInput').exists()).toBe(true)
  })
})
