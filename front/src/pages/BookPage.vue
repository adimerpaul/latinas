<template>
  <q-page>
    <pre>{{ book }}</pre>
  </q-page>
</template>

<script lang="ts">
// import { useQuasar } from 'quasar'
import { defineComponent, ref } from 'vue'
import { api, url } from 'boot/axios'
export default defineComponent({
  name: 'BookPage',
  setup () {
    // const $q = useQuasar()
    return {
      book: ref({}),
      capitalizeFirstLetter (str:string) {
        // Capitalizar solo la primera letra
        return str.charAt(0).toUpperCase() + str.slice(1)
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
