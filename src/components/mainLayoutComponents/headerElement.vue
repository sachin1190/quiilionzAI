<template>
  <q-item clickable v-ripple>
    <q-item-section avatar>
      <q-icon :color="colorr" :name="icon">
      </q-icon>
    </q-item-section>
    <q-item-section>{{ title }}</q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'HeaderElement',
  props: {
    colorr: {
      default: 'white'
    },
    title: {
      type: String,
      required: true
    },
    icon: {
      default: 'bluetooth',
      type: String,
      required: true
    }
  }
}
</script>
