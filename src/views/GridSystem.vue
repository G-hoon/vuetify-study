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
          <!-- v-col cols="auto" 내부 컨텐츠 사이즈에 따라 cell 사이즈가 자동 조정됨 -->
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
    <v-card>
      <v-col cols="auto">
        <v-card
          class="pa-3"
          outlined
        >
          col
        </v-card>
      </v-col>
      <v-row justify="end">
        <!-- justify: 해당 cell들의 위치, end: 자식들을 오른쪽 맨끝으로 정렬함 start/center/end-->
        <!-- space-aruond / space-between: 자식들을 균등하게 정렬함 between 은 자식들을 양 끝쪽으로 보내고 정렬, around는 자식들을 각 구역마다 가운데 정렬-->
        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            col
          </v-card>
        </v-col>

        <v-col cols="auto">
          <v-card
            class="pa-3"
            outlined
          >
            col
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
