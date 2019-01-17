<template>
  <v-app class="grey lighten-2">
    <Toolbar/>

    <v-content>
      <v-container>
        <Dashboard/>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard'
import Toolbar from './components/Toolbar'

export default {
  name: 'App',
  components: {
    Dashboard,
    Toolbar
  },
  data () {
    return {
      //
    }
  }
}
</script>
