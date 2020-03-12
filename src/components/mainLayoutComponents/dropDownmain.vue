<template>
  <q-item clickable v-close-popup>
    <q-item-section>
      <q-item-label @click="clickFunc">{{ name }}</q-item-label>
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
    },
    clickFunc: {
      type: Function
    }
  }
}
</script>
