<template>
  <q-page>
    <q-carousel
      animated
      v-model="slide"
      navigation
      infinite
      :autoplay="autoplay"
      arrows
      transition-prev="slide-right"
      transition-next="slide-left"
      @mouseenter="autoplay = false"
      @mouseleave="autoplay = true"
      class="bg-grey-5 text-white shadow-1 rounded-borders"
      :height="$q.screen.lt.md?'180px':'250px'"
    >
      <q-carousel-slide v-for="(c,i) in carousels" :key="i+1" :name="i+1"
                        :img-src="$q.screen.lt.md?`${url}uploads/${c.imageMobile}`:`${url}uploads/${c.image}`"/>
    </q-carousel>
    <div class="row">
        <div class="col-12" v-for="b in books" :key="b.id">
            <div class="q-px-md text-bold text-grey-7 text-subtitle1">{{b.name}}</div>
            <q-virtual-scroll
                    :items="b.books"
                    virtual-scroll-horizontal
                    v-slot="{ item }"
            >
<!--              <pre>{{item}}</pre>-->
                <q-card class="my-card cursor-pointer" @click="this.$router.push(`/book/${item.id}`)">
<!--                  :ratio="1"-->
                    <q-img :src="`${url}uploads/${item.image}`" style="width: 180px;height: 180px">
<!--                        <div class="absolute-bottom text-center text-bold" style="padding: 5px;line-height: 1">-->
<!--                            {{item.name}}-->
<!--                        </div>-->
                    </q-img>

                    <q-card-section style="padding: 5px">
                        <div class="text-center text-bold">{{capitalizeFirstLetter(item.name.toLowerCase())}}</div>
                        <div class="text-bold q-pl-lg text-subtitle1 text-red">{{item.price}} Bs</div>
                      <q-btn
                              class="full-width q-ma-xs"
                              color="primary"
                              label="Ver"
                              dense
                              no-caps
                              icon="visibility"
                              @click="this.$router.push(`/book/${item.id}`)"></q-btn>
                      <q-btn
                              class="full-width q-ma-xs"
                              color="green"
                              label="Comprar"
                              dense
                              no-caps
                              icon="shopping_cart"></q-btn>
                    </q-card-section>
                </q-card>
            </q-virtual-scroll>
        </div>
    </div>
<!--    <pre>{{carousels}}</pre>-->
<!--    <pre>{{url}}</pre>-->
<!--      <pre>{{books}}</pre>-->
  </q-page>
</template>

<script lang="ts">
// import { useQuasar } from 'quasar'
import { defineComponent, ref } from 'vue'
import { api, url } from 'boot/axios'
export default defineComponent({
  name: 'IndexClientPage',
  setup () {
    // const $q = useQuasar()
    return {
      slide: ref(1),
      carousels: ref([]),
      books: ref([]),
      autoplay: true,
      url,
      capitalizeFirstLetter (str:string) {
        // Capitalizar solo la primera letra
        return str.charAt(0).toUpperCase() + str.slice(1)
      }
    }
  },
  mounted () {
    api.get('carousels/allActive').then((res) => {
      this.carousels = res.data
    }).catch((err) => {
      console.log(err)
    })
    api.get('books').then((res) => {
      this.books = []
      res.data.forEach((b) => {
        b.name = this.capitalizeFirstLetter(b.name.toLowerCase())
        this.books.push(b)
      })
    }).catch((err) => {
      console.log(err)
    })
  }
})
</script>
<style lang="sass" scoped>
.my-card
  width: 100%
  margin: 10px
  padding: 10px
  max-width: 200px
</style>
