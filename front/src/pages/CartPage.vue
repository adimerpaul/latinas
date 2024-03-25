<template>
  <q-page class="q-pa-xs">
    <template v-if="$store.pedidos.length === 0">
      <div class="text-h2 text-center text-grey-8">No hay pedidos</div>
    </template>
    <template v-else>
    <q-list>
    <q-item clickable v-ripple v-for="(item,index) in $store.pedidos" :key="index">
      <q-item-section avatar>
        <q-avatar rounded>
        <q-img :src="$url + 'uploads/' + item.image" :ratio="1" />
        </q-avatar>
      </q-item-section>
      <q-item-section class="text-subtitle1">
        {{item.quantity}} {{ capitalizeFirstLetter(item.name) }}
        <q-item-label caption>{{ item.price }} Bs</q-item-label>
      </q-item-section>
      <q-item-section side top>
        {{ item.price * item.quantity }} Bs
        <q-btn flat dense round icon="delete" color="red" @click="deletePedido(index)" />
      </q-item-section>
    </q-item>
    </q-list>
    <q-btn class="q-mt-md full-width text-bold" color="green"
           :label="`Comprar ${total} Bs`"
           rounded no-caps icon="shopping_cart" @click="compraWhatsapp" />
    </template>
  </q-page>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
import { url } from 'boot/axios'
import { useQuasar } from 'quasar'
import { useCounterStore } from 'stores/example-store'
export default defineComponent({
  name: 'BookPage',
  setup () {
    const store = useCounterStore()
    const $q = useQuasar()
    return {
      url,
      book: ref({}),
      deletePedido (index) {
        $q.dialog({
          title: 'Eliminar del carrito',
          message: '¿Desea eliminar este pedido?',
          cancel: true,
          persistent: true
        }).onOk(() => {
          this.$store.pedidos.splice(index, 1)
        })
      },
      compraWhatsapp () {
        console.log(store.pedidos)
        const saltoLinea = '%0A'
        let message = `Hola, quiero comprar los siguientes libros: ${saltoLinea}`
        let total = 0
        store.pedidos.forEach((p) => {
          const subTotal = parseInt(p.price) * parseInt(p.quantity)
          message += `*${p.quantity} ${p.name}* ${subTotal}Bs,${saltoLinea} `
          total += subTotal
        })
        message += `por un total de ${total} Bs`

        window.open(`https://api.whatsapp.com/send?phone=59169603027&text=${message}`, '_blank')
        // } catch (error) {
        //   console.error('Error en compraWhatsapp:', error)
        // }
      },
      capitalizeFirstLetter (str:string) {
        str = str.toLowerCase()
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
    // console.log(this.$store.pedidos)
    // const bookId = this.$route.params.id
    // api.get('books/' + bookId).then((res) => {
    //   this.book = res.data
    //   // this.book.name = this.capitalizeFirstLetter(this.book.name.toLowerCase())
    // }).catch((err) => {
    //   console.log(err)
    // })
  },
  computed: {
    total () {
      let total = 0
      this.$store.pedidos.forEach((p) => {
        total += parseInt(p.price) * parseInt(p.quantity)
      })
      return total
    }
  }
})
</script>
<style scoped lang="sass">

</style>
