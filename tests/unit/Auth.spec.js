import Vue from 'vue'
import { mount, createLocalVue } from '@vue/test-utils'
import Vuetify from 'vuetify'
import Vuelidate from 'vuelidate'

import Auth from '@/views/Auth'
import AuthForm from '@/components/Forms/AuthForm'

Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(Vuelidate)

describe('Auth', () => {
  const wrapper = mount(Auth, {
    stubs: {
      AuthForm
    },
    localVue
  })
  it('is a Vue instance', () => {
    expect(wrapper.isVueInstance()).toBeTruthy()
  })
  it('is render correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
  it('contains AuthForm', () => {
    expect(wrapper.findComponent(AuthForm).element).toBeTruthy()
  })
})
