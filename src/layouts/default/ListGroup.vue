<template>
  <v-list-group :prepend-icon="item.icon">
    <template v-slot:activator>
      <v-list-item-content>
        <v-list-item-title>
          {{ item.title }}
        </v-list-item-title>
      </v-list-item-content>
    </template>
    <template v-for="(child, index) in item.items">
      <default-list-item
        :key="`child-${index}`"
        :item="child"
      />
    </template>
  </v-list-group>
</template>

<script>
import DefaultListItem from './ListItem.vue'
export default {
  name: 'DefaultListGroup',
  components: {
    DefaultListItem
  },
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  }
}
</script>

<style>

</style>
