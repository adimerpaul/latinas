<template>
  <q-layout view="lHh Lpr lFf" class="bg-grey-3">
    <q-header class="bg-grey-2">
      <q-toolbar class="text-grey bg-primary">
        <div class="q-pr-lg flex flex-center" v-if="$q.screen.gt.xs">
          <q-img src="logo.png" width="45px" class="cursor-pointer" />
          <!-- Nuevo div con el texto -->
          <div class="q-px-none q-pt-xs q-ml-md" style="line-height: 0.8">
            <span class="text-bold text-white beauRivage" style="font-size: 2.5em">Latinas</span><br>
            <span class="text-caption text-white beauRivage" style="font-size: 1.5em">Editores SRL</span>
          </div>
        </div>

        <q-space />
        <div class="GPLAY__toolbar-input-container row no-wrap">
          <q-input dense outlined v-model="search" placeholder="Buscar" bg-color="white" class="col" rounded>
            <template v-slot:append>
              <q-icon name="search" />
            </template>
          </q-input>
<!--          <q-btn class="GPLAY__toolbar-input-btn" color="primary" icon="search" unelevated />-->
        </div>

        <q-space />

        <div class="q-pl-md q-gutter-sm row no-wrap items-center">
<!--          <q-btn round dense flat color="grey-8" size="14px" icon="apps">-->
<!--            <q-tooltip>Google Apps</q-tooltip>-->
<!--          </q-btn>-->

          <q-btn round dense flat color="white" icon="notifications">
            <q-badge color="red" text-color="white" floating>
              2
            </q-badge>
            <q-tooltip>Notificaciones</q-tooltip>
          </q-btn>

          <q-btn round flat>
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
          <q-tab v-for="c in categories" :key="c.id" :name="c.name" :label="c.name" />
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
import { api } from 'boot/axios'
export default defineComponent({
  name: 'MainClienteLayout',

  setup () {
    const leftDrawerOpen = ref(false)
    const search = ref('')

    return {
      leftDrawerOpen,
      search,
      tab: ref('tab1'),
      categories: ref([]),
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      },
      capitalizeFirstLetter (str:string) {
        // Capitalizar solo la primera letra
        return str.charAt(0).toUpperCase() + str.slice(1)
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
