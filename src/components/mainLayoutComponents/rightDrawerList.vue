<template>
   <q-list bordered>
      <q-item :clickable="clickable" v-ripple>
        <q-item-section avatar>
          <q-item-section>{{ index }}</q-item-section>
        </q-item-section>
        <q-item-section>{{ name }}</q-item-section>
      </q-item>
   </q-list>
</template>

<script>
export default {
  props: {
    name: {
      type: String
    },
    index: {
      type: Number
    },
    clickable: {
      type: Boolean
    }
  }
}
</script>
