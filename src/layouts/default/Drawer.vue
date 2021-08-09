<template>
  <v-navigation-drawer
    v-bind="$attrs"
    dark
    app
    :src="require('@/assets/sidebar.jpg')"
  >
    <!-- $attrs: 모든 속성 바인딩 -->
    <!-- dark option: 뒤에 배경이 dark라는 가정으로 폰트나 엘리먼트들이 하얀색으로 변함 -->
    <template
      #img="props"
    >
      <!-- #img: v-slot:img의 축약형 -->
      <v-img
        :gradient="gradient"
        v-bind="props"
      />
    </template>

    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          Application
        </v-list-item-title>
        <v-list-item-subtitle>
          subtext
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider />

    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in items"
        :key="item.title"
        link
        :to="item.to"
      >
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'DefaultDrawer',
  data: () => ({
    gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'Grid System', icon: 'mdi-view-dashboard', to: '/grid-system' },
      { title: 'Break Points', icon: 'mdi-view-dashboard', to: '/breakpoints' },
      { title: 'Grid List Page', icon: 'mdi-view-dashboard', to: '/grid-list-page' },
      { title: 'Tables', icon: 'mdi-view-dashboard', to: '/tables' },
      { title: 'Forms', icon: 'mdi-view-dashboard', to: '/forms' },
      { title: 'Buttons', icon: 'mdi-view-dashboard', to: '/buttons' },
      { title: 'Icons', icon: 'mdi-view-dashboard', to: '/icons' },
      { title: 'Sign-In', icon: 'mdi-view-dashboard', to: '/sign-in' },
      { title: 'Sign-Up', icon: 'mdi-view-dashboard', to: '/sign-up' },
      { title: 'Product List', icon: 'mdi-view-dashboard', to: '/product-list' }
    ],
  })
}
</script>

<style>

</style>
