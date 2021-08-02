<template>
  <v-app>
    <!-- v-app는 반드시 최상단에 있어야 함 -->
    <v-app-bar
      v-if="$vuetify.breakpoint.xsOnly"
      app
    />
    <!-- app속성을 사용 - v-app의 기본적인 layount component(v-app-bar, v-navigation-drawer...) 사용 위해 -->
    <!-- v-if="$vuetify.breakpoint.xsOnly" : 모바일 사이즈 일때만 bar를 표시하겠다 -->
    <v-navigation-drawer app />
    <v-main>
      <!-- 컨텐츠 영역을 나타냄 / Vue에서 v-app 을 마운트 할 때, v-app-bar, naviagaton 등의 layout component 사이즈(높이)를 세팅한 다음에 -->
      <!-- 나머지 영역을 v-main(컨텐츠 영역)으로 할당 시킨다 -->
      <v-container fluid>
        컨텐츠 영역
      </v-container>
    </v-main>
    <v-footer app />
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>
