<template>
  <v-main>
    <v-container
      fluid
    >
      <!-- class="red" 배경색을 칠할 수 있음 -->
      <!-- fluid: 너비를 끝까지 채울때 쓰는 속성-->
      <router-view />
    </v-container>
  </v-main>
</template>

<script>
export default {
  name: 'DefualtView'
}
</script>

<style>

</style>
