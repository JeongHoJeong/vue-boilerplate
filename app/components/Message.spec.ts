import { createLocalVue, shallow } from '@vue/test-utils'
import VueRouter from 'vue-router'
import Message from './Message.vue'

const localVue = createLocalVue()
localVue.use(VueRouter)

const router = new VueRouter({})

describe('Message', () => {
  const wrapper = shallow(Message, {
    localVue,
    router,
  })
  const vm = wrapper.vm

  wrapper.setProps({
    link: 'test-link',
    message: 'test-message',
  })

  it('displays message', () => {
    expect(wrapper.find('p').text()).toBe('test-message')
  })

  it('moves to link', () => {
    wrapper.trigger('click')

    expect(vm.$route.path).toBe('/test-link')
  })
})
