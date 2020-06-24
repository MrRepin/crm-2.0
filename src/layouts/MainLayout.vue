<template>
  <div class="main-layout">
      <MainNav :mini="mini" />
      <v-content>
          <Toolbar :mini="mini" @change-nav-size="changeNavSize"/>
          <router-view></router-view>
      </v-content>
  </div>
</template>

<script>
import Toolbar from '@/components/Bars/Toolbar'
import MainNav from '@/components/Navs/MainNav'

export default {
  name: "MainLayout",
  data() {
      return {
          mini: true
      }
  },
  components: {
      Toolbar,
      MainNav
  },
  methods: {
      changeNavSize(status) {
          this.mini = status
      }
  }
}
</script>