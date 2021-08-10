<template>
  <v-list
    dense
    expand
    nav
  >
    <template v-for="(item, index) in items">
      <!-- v-if="item.items" -->
      <DefaultListGroup
        v-if="item.items"
        :key="`group-${index}`"
        :item="item"
      />
      <!-- 동적으로 값을 바인딩 할 때는 `` 넣어줘야 함 -->
      <DefaultListItem
        v-else
        :key="`item-${index}`"
        :item="item"
      />
    </template>
  </v-list>
</template>

<script>
import DefaultListItem from './ListItem'
import DefaultListGroup from './ListGroup'
export default {
  name: 'DefaultList',
  components: {
    DefaultListItem,
    DefaultListGroup
  },
  props: {
    // 부모에서 받아줌
    items: {
      type: Array,
      default: () => ([])
    }
  },
}
</script>

<style>

</style>
