<template>
  <q-page>
    <div class="row">
      <div class="col-12 col-md-6 flex flex-center q-pa-xs">
        <q-img v-if="book.image" :src="`${url}uploads/${book.image}`" style="width: 180px;height: 250px"/>
      </div>
      <div class="col-12 col-md-6 q-pa-xs">
        <div>
          <div class="text-h6 text-bold text-grey-9">{{ book.name }}</div>
          <div class="text-h6 text-bold text-red">{{ book.author }}</div>
          <div class="text-h6 text-bold text-red">
            {{ book.price }} Bs
            <span class="text-grey-8 text-caption text-h6 text-bold" v-if="book.priceOffer && book.priceOffer > 0">
              <s>{{ book.priceOffer}} Bs</s>
            </span>
          </div>
          <div class="text-h6 text-bold text-grey-7">{{ book.stock }} en stock</div>
          <div class="text-h6 text-bold text-red">{{ book.description }}</div>
          <div class="text-bold text-grey-7">Indice de lectura: <q-btn flat type="a" icon="menu_book" :href="book.indice" target="_blank" no-caps label="ver" /></div>
          <div class="q-pa-md">
            <q-btn icon="o_shopping_cart" color="green" no-caps label="Agregar al carrito" rounded @click="addToCart(book)" />
          </div>
<!--          <div>-->
<!--            <pre>{{$store.pedidos}}</pre>-->
<!--          </div>-->
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { api, url } from 'boot/axios'
import { useQuasar } from 'quasar'
export default defineComponent({
  name: 'BookPage',
  setup () {
    const $q = useQuasar()
    return {
      url,
      book: ref({}),
      capitalizeFirstLetter (str:string) {
        // Capitalizar solo la primera letra
        return str.charAt(0).toUpperCase() + str.slice(1)
      },
      addToCart (book) {
        console.log('book', book)
        $q.dialog({
          title: 'Agregar al carrito',
          message: '¿Cuantos desea agregar?',
          prompt: {
            model: 1,
            type: 'number'
          },
          cancel: true,
          persistent: true
        }).onOk((value) => {
          $q.notify({
            message: 'Agregado al carrito ' + value + ' ' + book.name,
            color: 'green-4',
            textColor: 'white',
            icon: 'shopping_cart',
            position: 'top',
            timeout: 1000,
            actions: [
              { icon: 'close', color: 'white', round: true, handler: () => { /* ... */ } }
            ]
          })
          this.$store.pedidos.push({
            ...book,
            quantity: value
          })
        })
        // this.$store.dispatch('cart/addToCart', book)
      }
    }
  },
  mounted () {
    console.log('url', url)
    const bookId = this.$route.params.id
    api.get('books/' + bookId).then((res) => {
      this.book = res.data
      // this.book.name = this.capitalizeFirstLetter(this.book.name.toLowerCase())
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
