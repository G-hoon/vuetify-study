<template>
  <v-container
    fluid
  >
    <v-card class="pa-3">
      <!-- fluid: 너비를 끝까지 채울때 쓰는 속성-->
      <v-row>
        <!-- cell 간격 속성 -->
        <!-- <v-row dense> : 24px의 col 사이의 padding이 8px로 줄어듦 -->
        <!-- <v-row no-gutters> : col 사이의 padding 이 없어짐 col이 딱 붙음 -->

        <!-- row에 있는 cell 들의 정렬 속성 -->
        <!-- align: end / center / start => 아래 중간 위 정렬-->
        <!-- -->
        <v-col>
          <!-- v-row는 v-col을 감싸줘야 함 -->
          <!-- v-col align-self="start" : 다른 cell은 제외하고 해당 cell만 정렬 -->
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
      <v-row>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
        <v-col>
          <v-card
            class="pa-3"
            outlined
          >
            Col
          </v-card>
        </v-col>
      </v-row>
    </v-card>
  </v-container>
</template>

<script>
export default {

}
</script>

<style>

</style>
