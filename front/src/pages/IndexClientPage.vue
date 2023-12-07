<template>
  <q-page>
    <q-carousel
      arrows
      infinite
      animated
      v-model="slide"
      :height="$q.screen.lt.md?'180px':'250px'"
    >
      <q-carousel-slide v-for="(c,i) in carousels" :key="i+1" :name="i+1"
                        :img-src="$q.screen.lt.md?`${url}uploads/${c.imageMobile}`:`${url}uploads/${c.image}`"/>
    </q-carousel>
    <pre>{{carousels}}</pre>
    <pre>{{url}}</pre>
  </q-page>
</template>

<script lang="ts">
import { useQuasar } from 'quasar'
import { defineComponent, ref } from 'vue'
import { api, url } from 'boot/axios'
export default defineComponent({
  name: 'IndexClientPage',
  setup () {
    const $q = useQuasar()
    return {
      slide: ref(1),
      carousels: ref([]),
      url
    }
  },
  mounted () {
    api.get('carousels/allActive').then((res) => {
      this.carousels = res.data
    }).catch((err) => {
      console.log(err)
    })
  }
})
</script>
<style lang="sass" scoped>
.custom-caption
  text-align: center
  padding: 12px
  color: white
  background-color: rgba(0, 0, 0, .3)
</style>
