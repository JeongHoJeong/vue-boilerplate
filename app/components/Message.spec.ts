import { shallow } from '@vue/test-utils'
import Message from './Message.vue'

describe('Message', () => {
  const wrapper = shallow(Message)
  const vm = wrapper.vm

  wrapper.setProps({
    message: 'test-message',
  })

  it('displays message', () => {
    expect(wrapper.find('p').text()).toBe('test-message')
  })
})
