<template>
  <q-layout view="lHh Lpr lFf">
    <q-header class="bg-white text-black">
      <q-toolbar>
          <q-item to="/">
            <q-item-section side>
              <q-avatar rounded size="48px">
                <img src="logo.png" alt="Logo">
              </q-avatar>
            </q-item-section>
            <q-item-section class="ocultarMovil">
              <q-item-label class="text-bold text-h6">Latinas</q-item-label>
              <q-item-label caption>Editores Ltda.</q-item-label>
            </q-item-section>
          </q-item>
        <q-space/>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainClienteLayout',

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
<style>
</style>
