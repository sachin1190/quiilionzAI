<template>
  <q-item clickable v-close-popup @click="onItemClick">
    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'DropdownItem',
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
