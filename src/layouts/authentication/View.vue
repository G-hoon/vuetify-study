<template>
  <v-main>
    <!-- v-container가 있으면 하위 컴포넌트의 full-height 이 적용되지 않음 -->
    <router-view />
  </v-main>
</template>

<script>
export default {
  name: 'AuthenticationView'
}
</script>

<style>

</style>
