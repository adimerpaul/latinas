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
          <div class="">
            <div class="text-subtitle1 text-bold">Compartir en:</div>
            <ShareNetwork
              v-for="network in networks"
              :network="network.network"
              :key="network.network"
              :url="sharing.url"
              :title="sharing.title"
              :description="sharing.description"
              :quote="sharing.quote"
              :hashtags="sharing.hashtags"
              :twitterUser="sharing.twitterUser"
            >
              <q-btn :icon="network.icon" :color="network.color" no-caps :label="network.name" rounded />
            </ShareNetwork>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { api, url } from 'boot/axios'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: 'BookPage',
  setup () {
    const $q = useQuasar()
    const $router = useRouter()
    return {
      sharing: {
        url: import.meta.env.VITE_API_FRONT + '/book/' + $router.currentRoute.value.params.id,
        title: 'Encontré este libro en la librería',
        description: 'Libreria latinas editores srl',
        quote: 'Encontré este libro en la librería',
        hashtags: 'libreria,libros,lectura',
        twitterUser: 'latinaseditores'
      },
      networks: [
        // { network: 'baidu', name: 'Baidu', icon: 'fas fah fa-lg fa-paw', color: '#2529d8' },
        // { network: 'buffer', name: 'Buffer', icon: 'fab fah fa-lg fa-buffer', color: '#323b43' },
        { network: 'email', name: 'Email', icon: 'far fah fa-lg fa-envelope', color: 'red' },
        // { network: 'evernote', name: 'Evernote', icon: 'fab fah fa-lg fa-evernote', color: '#2dbe60' },
        { network: 'facebook', name: 'Facebook', icon: 'fab fah fa-lg fa-facebook-f', color: 'blue' },
        // { network: 'flipboard', name: 'Flipboard', icon: 'fab fah fa-lg fa-flipboard', color: '#e12828' },
        // { network: 'hackernews', name: 'HackerNews', icon: 'fab fah fa-lg fa-hacker-news', color: '#ff4000' },
        // { network: 'instapaper', name: 'Instapaper', icon: 'fas fah fa-lg fa-italic', color: '#428bca' },
        // { network: 'line', name: 'Line', icon: 'fab fah fa-lg fa-line', color: '#00c300' },
        // { network: 'linkedin', name: 'LinkedIn', icon: 'fab fah fa-lg fa-linkedin', color: '#007bb5' },
        // { network: 'odnoklassniki', name: 'Odnoklassniki', icon: 'fab fah fa-lg fa-odnoklassniki', color: '#ed812b' },
        // { network: 'pinterest', name: 'Pinterest', icon: 'fab fah fa-lg fa-pinterest', color: '#bd081c' },
        // { network: 'pocket', name: 'Pocket', icon: 'fab fah fa-lg fa-get-pocket', color: '#ef4056' },
        // { network: 'quora', name: 'Quora', icon: 'fab fah fa-lg fa-quora', color: '#a82400' },
        // { network: 'reddit', name: 'Reddit', icon: 'fab fah fa-lg fa-reddit-alien', color: '#ff4500' },
        // { network: 'skype', name: 'Skype', icon: 'fab fah fa-lg fa-skype', color: '#00aff0' },
        { network: 'sms', name: 'SMS', icon: 'far fah fa-lg fa-comment-dots', color: 'green' },
        // { network: 'stumbleupon', name: 'StumbleUpon', icon: 'fab fah fa-lg fa-stumbleupon', color: '#eb4924' },
        { network: 'telegram', name: 'Telegram', icon: 'fab fah fa-lg fa-telegram-plane', color: 'blue' },
        { network: 'messenger', name: 'Messenger', icon: 'fab fah fa-lg fa-facebook-messenger', color: 'blue' },
        // { network: 'tumblr', name: 'Tumblr', icon: 'fab fah fa-lg fa-tumblr', color: '#35465c' },
        // { network: 'twitter', name: 'Twitter', icon: 'fab fah fa-lg fa-twitter', color: '#1da1f2' },
        // { network: 'viber', name: 'Viber', icon: 'fab fah fa-lg fa-viber', color: '#59267c' },
        // { network: 'vk', name: 'Vk', icon: 'fab fah fa-lg fa-vk', color: '#4a76a8' },
        // { network: 'weibo', name: 'Weibo', icon: 'fab fah fa-lg fa-weibo', color: '#e9152d' },
        { network: 'whatsapp', name: 'Whatsapp', icon: 'fab fah fa-lg fa-whatsapp', color: 'green' }
        // { network: 'wordpress', name: 'Wordpress', icon: 'fab fah fa-lg fa-wordpress', color: '#21759b' },
        // { network: 'xing', name: 'Xing', icon: 'fab fah fa-lg fa-xing', color: '#026466' },
        // { network: 'yammer', name: 'Yammer', icon: 'fab fah fa-lg fa-yammer', color: '#0072c6' },
        // { network: 'fakeblock', name: 'Custom Network', icon: 'fab fah fa-lg fa-vuejs', color: '#41b883' }
      ],
      url,
      book: ref({}),
      capitalizeFirstLetter (str:string) {
        // Capitalizar solo la primera letra
        return str.charAt(0).toUpperCase() + str.slice(1)
      },
      addToCart (book) {
        // console.log('book', book)
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
    this.$watch(() => this.$route.params.id, () => {
      this.getBook()
    })
    this.getBook()
    // console.log('url', url)
  },
  methods: {
    getBook () {
      const bookId = this.$route.params.id
      api.get('books/' + bookId).then((res) => {
        this.book = res.data
        // this.book.name = this.capitalizeFirstLetter(this.book.name.toLowerCase())
      }).catch((err) => {
        console.log(err)
      })
    }
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
