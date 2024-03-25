<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-3">
    <q-header class="bg-grey-2">
      <q-toolbar class="text-grey bg-primary">
        <div class="q-pr-lg flex flex-center cursor-pointer" v-if="$q.screen.gt.xs" @click="this.$router.push(`/`)">
          <q-img src="/logo.png" width="45px" class="cursor-pointer" />
<!--           Nuevo div con el texto-->
          <div class="q-px-none q-pt-xs q-ml-md" style="line-height: 0.8">
            <span class="text-bold text-white beauRivage" style="font-size: 2.5em">Latinas</span><br>
            <span class="text-caption text-white beauRivage" style="font-size: 1.5em">Editores SRL</span>
          </div>
        </div>

        <q-space />
        <div class="GPLAY__toolbar-input-container row no-wrap q-pa-none">
          <q-select
            dense
            clearable
            outlined
            bg-color="white"
            class="col q-pa-none"
            rounded
            v-model="search"
            use-input
            hide-hint
            hide-selected
            fill-input
            input-debounce="0"
            :options="booksAll"
            @filter="filterFn"
            placeholder="Buscar"
            style="width: 250px;"
            option-value="id" option-label="name"
            @update:model-value="changeRoute"
          >
            <template v-slot:no-option>
              <q-item>
                <q-item-section class="text-grey">
                  No results
                </q-item-section>
              </q-item>
            </template>
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section avatar>
                  <q-img :src="`${url}uploads/${scope.opt.image}`" style="width: 30px;height: 50px">
                  </q-img>
                </q-item-section>
                <q-item-section>
                  <q-item-label>{{ scope.opt.name }}</q-item-label>
                  <q-item-label caption>{{ scope.opt.author }}</q-item-label>
                  <q-item-label caption class="text-bold text-red">{{ scope.opt.price }} Bs</q-item-label>
                </q-item-section>
              </q-item>
            </template>
          </q-select>
        </div>

        <q-space />

        <div class="q-pl-md q-gutter-sm row no-wrap items-center">
<!--          <q-btn round dense flat color="grey-8" size="14px" icon="apps">-->
<!--            <q-tooltip>Google Apps</q-tooltip>-->
<!--          </q-btn>-->

          <q-btn round dense flat color="white" icon="shopping_cart" @click="this.$router.push(`/cart`)">
            <q-badge color="red" text-color="white" floating>
              {{ booksQuantity }}
            </q-badge>
            <q-tooltip>Notificaciones</q-tooltip>
          </q-btn>

          <q-btn round flat to="/login">
            <q-avatar size="26px">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
            </q-avatar>
            <q-tooltip>Cuenta</q-tooltip>
          </q-btn>
        </div>
      </q-toolbar>
<!--      <q-toolbar class="shadow-2 rounded-borders">-->
<!--        <q-space />-->
        <q-tabs
          dense
          v-model="tab"
          no-caps
          class="bg-primary white shadow-2 text-bold"
        >
          <q-tab v-for="c in categories" :key="c.id" :name="c.name" :label="c.name" @click="this.$router.push(`/`)" />
        </q-tabs>
<!--        <q-space />-->
<!--      </q-toolbar>-->
    </q-header>
    <q-page-container>
      <router-view />
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="fa-brands fa-whatsapp" dense class="q-pa-xs" color="green-9" type="a"
               :href="'https://api.whatsapp.com/send?phone=591' + 75400845 + '&text=Hola%20quiero%20comprar%20un%20libro'"></q-btn>
      </q-page-sticky>
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { api, url } from 'boot/axios'
import { useRouter } from 'vue-router'
const stringOptions = [
  'Google', 'Facebook', 'Twitter', 'Apple', 'Oracle'
]
export default defineComponent({
  name: 'MainClienteLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    const search = ref('')
    const options = ref(stringOptions)
    const booksAll = ref([])
    const booksAll2 = ref([])
    const $router = useRouter()
    return {
      options,
      leftDrawerOpen,
      search,
      tab: ref('tab1'),
      categories: ref([]),
      booksAll,
      booksAll2,
      url,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      capitalizeFirstLetter (str:string) {
        // Capitalizar solo la primera letra
        return str.charAt(0).toUpperCase() + str.slice(1)
      },
      changeRoute (val) {
        console.log(val)
        $router.push(`/book/${val.id}`)
      },
      filterFn (val, update) {
        update(() => {
          const needle = val.toLowerCase()
          // console.log(needle)
          booksAll.value = booksAll2.value.filter((v) => v.name.toLowerCase().includes(needle))
        })
      }
    }
  },
  created () {
    api.get('categories').then((res) => {
      this.categories = res.data.map((c) => {
        return {
          ...c,
          name: this.capitalizeFirstLetter(c.name.toLowerCase())
        }
      })
    })
    api.get('books/all').then((res) => {
      this.booksAll = res.data.map((b) => {
        return {
          ...b,
          name: this.capitalizeFirstLetter(b.name.toLowerCase())
        }
      })
      this.booksAll2 = this.booksAll
    })
  },
  computed: {
    booksQuantity () {
      let total = 0
      this.$store.pedidos.forEach((p) => {
        total += parseInt(p.quantity)
      })
      return total
    }
  }
})
</script>
<style>
.GPLAY__toolbar {
  height: 60px;
}

.GPLAY__logo {
  width: 183px;
  height: 39px;
}

.GPLAY__toolbar-input-container {
  min-width: 100px;
  width: 55%;
}

.GPLAY__toolbar-input-btn {
  border-radius: 0;
  max-width: 60px;
  width: 100%;
}

.GPLAY__drawer-link .q-item__section--avatar {
  margin: -8px 0 -8px -16px;
  padding: 8px 0 8px 16px;
}

.GPLAY__drawer-link .q-item__section--main {
  margin: -8px -16px -8px 16px;
  padding: 8px 16px 8px 2px;
  font-size: 18px;
  font-weight: 300;
}

.GPLAY__drawer-link--apps,
.GPLAY__drawer-link--movies,
.GPLAY__drawer-link--music,
.GPLAY__drawer-link--books,
.GPLAY__drawer-link--devices {
  background: #f5f5f5!important;
}

.GPLAY__drawer-link--apps:hover {
  background: #43a047!important;
  color: #eee !important;
}

.GPLAY__drawer-link--movies:hover {
  background: #e53935!important;
  color: #eee !important;
}

.GPLAY__drawer-link--music:hover {
  background: #fb8c00!important;
  color: #eee !important;
}

.GPLAY__drawer-link--books:hover {
  background: #1e88e5!important;
  color: #eee !important;
}

.GPLAY__drawer-link--devices:hover {
  background: #546e7a!important;
  color: #eee !important;
}

.GPLAY__drawer-item {
  padding: 6px 12px 6px 23px;
}

.GPLAY__sticky {
  min-height: 49px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.12);
}

.GPLAY__sticky-help {
  border: 1px solid #ccc;
  padding-left: 8px;
  padding-right: 8px;
}

.GPLAY__sticky-settings {
  padding-left: 17px;
  padding-right: 17px;
  border: 1px solid #ccc;
}

.GPLAY__pr-lg {
  display: flex;
  align-items: center;
}

.GPLAY__pr-lg > q-img {
  margin-right: 10px;
}

.GPLAY__pr-lg > div {
  text-align: center;
  font-size: 12px;
}

.GPLAY__pr-lg > div > div {
  margin-left: 5px;
}

@media (max-width: 599px) {
  .GPLAY__toolbar-input-container {
    min-width: 100px;
    width: 100%;
  }
}
</style>
