<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click="drawer = !drawer" />

      <v-spacer />

      <v-btn
        href="https://github.com/G-hoon/vuetify-study"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      dark
      app
      :src="require('@/assets/sidebar.jpg')"
    >
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

    <v-main>
      <div>
        <router-link to="/">
          Dashboard
        </router-link>
        <router-link to="/grid-system">
          GridSystem
        </router-link>
      </div>

      <v-container
        fluid
      >
        <!-- class="red" 배경색을 칠할 수 있음 -->
        <!-- fluid: 너비를 끝까지 채울때 쓰는 속성-->
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    gradient: 'rgba(0, 0, 0, .7), rgba(0, 0, 0, .7)',
    items: [
      { title: 'Dashboard', icon: 'mdi-view-dashboard', to: '/' },
      { title: 'Grid System', icon: 'mdi-view-dashboard', to: '/grid-system' },
      { title: 'Break Points', icon: 'mdi-view-dashboard', to: '/breakpoints' },
      { title: 'Grid List Page', icon: 'mdi-view-dashboard', to: '/grid-list-page' },
      { title: 'Tables', icon: 'mdi-view-dashboard', to: '/tables' },
      { title: 'Forms', icon: 'mdi-view-dashboard', to: '/forms' },
      { title: 'Buttons', icon: 'mdi-view-dashboard', to: '/buttons' },
      { title: 'Icons', icon: 'mdi-view-dashboard', to: '/icons' }
    ],
  })
};
</script>
