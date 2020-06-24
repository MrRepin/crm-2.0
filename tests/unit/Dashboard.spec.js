import Vue from 'vue'
import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuetify from 'vuetify'
import * as VueChart from 'vue-chartjs'
import Chart from '@/components/Charts/Chart'

import Dashboard from '@/views/Dashboard'

Vue.use(Vuetify)

const localVue = createLocalVue()
localVue.use(VueChart)
localVue.use(Chart)

describe('Dashboard', () => {
  const wrapper = shallowMount(Dashboard, {
    localVue
  })
  it('is a Vue instance', () => {
    expect(wrapper.isEmpty()).toBeFalsy()
  })
  it('is render correctly', () => {
    expect(wrapper.element).toMatchSnapshot()
  })
})