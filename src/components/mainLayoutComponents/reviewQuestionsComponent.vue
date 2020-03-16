<template>
  <q-card class="my-card">
    <q-card-section>
      <div class="text-h6">{{ question }}</div>
    </q-card-section>
    <q-separator />
    <q-card-actions vertical>
      <q-btn flat color="green">{{ answer }}</q-btn>
      <q-btn flat color="red">{{ dist1 }}</q-btn>
      <q-btn flat color="red">{{ dist2 }}</q-btn>
      <q-btn flat color="red">{{ dist3 }}</q-btn>
    </q-card-actions>
  </q-card>
</template>

<script>
export default {
  props: {
    question: {
      type: String
    },
    answer: {
      type: String
    },
    dist1: {
      type: String
    },
    dist2: {
      type: String
    },
    dist3: {
      type: String
    }
  }
}
</script>
