<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'CartPage'
})
</script>

<template>
  <q-page>
    <q-list>
    <q-item clickable v-ripple>
      <q-item-section thumbnail>
        <img src="https://cdn.quasar.dev/img/mountains.jpg">
      </q-item-section>
      <q-item-section>List item</q-item-section>
    </q-item>
    </q-list>
  </q-page>
</template>

<style scoped lang="sass">

</style>
