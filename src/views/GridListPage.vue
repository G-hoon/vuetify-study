<template>
  <v-container>
    <v-row>
      <v-col
        v-for="count in 12"
        :key="count"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <!-- cols 는 해당 row에 column을 어떤 크기로 채울 것인지 정하는 속성, 최대 12 -->
        <!-- cols="1" 을 넣으면, 한 row에 1 사이즈의 cell 이 12 개 있음 -->
        <!-- sm/md/lg 를 사용하면 반응형 디자인을 보다 쉽게 할 수 있음 -->
        <v-card class="pa-3">
          {{ count }}
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
