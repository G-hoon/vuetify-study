<template>
  <v-app>
    <default-bar @drawer="drawer = !drawer" />
    <default-drawer v-model="drawer" />
    <default-view />
  </v-app>
</template>

<script>
import DefaultBar from './AppBar'
import DefaultDrawer from './Drawer.vue'
import DefaultView from './View.vue'
export default {
  name: 'DefaultLayout',
  components: {
    DefaultBar,
    DefaultDrawer,
    DefaultView
  },
  data: () => ({
    drawer: false,
  })
};
</script>
