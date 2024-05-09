<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          {{ $store.user.name }}
        </q-toolbar-title>

        <div>
          <q-btn dense size="10px" label="Salir" no-caps @click="logout" color="red" icon="logout" />
        </div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="200"
      bordered
    >
      <q-list>
        <q-item-label header class="text-center text-bold">
          Opciones
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Principal',
    icon: 'home',
    link: 'admin'
  },
  {
    title: 'Carusel',
    icon: 'photo_library',
    link: 'carousel'
  },
  {
    title: 'Libros',
    icon: 'book',
    link: 'books'
  },
  {
    title: 'Pedidos',
    icon: 'shopping_cart',
    link: 'sales'
  }
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    logout () {
      this.$q.dialog({
        title: 'Salir',
        message: '¿Estás seguro de que deseas salir?',
        persistent: true,
        ok: {
          label: 'Salir',
          color: 'red'
        },
        cancel: 'Cancelar'
      }).onOk(() => {
        this.$store.isLogin = false
        this.$router.push('/login')
      })
    }
  }
})
</script>
