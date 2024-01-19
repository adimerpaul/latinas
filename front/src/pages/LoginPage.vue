<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useCounterStore } from 'stores/example-store'
import { useRouter } from 'vue-router'
import { api } from 'boot/axios'
export default defineComponent({
  name: 'LoginPage',
  setup () {
    const store = useCounterStore()
    const router = useRouter()
    const email = ref('admin@test.com')
    const password = ref('123456')
    const login = () => {
      api.post('users/login', {
        email: email.value,
        password: password.value
      }).then((res) => {
        console.log(res.data)
        localStorage.setItem('tokenLatinas', res.data.jwt)
        store.user = res.data.user
        router.push('/admin')
      })
    }
    return {
      email,
      password,
      visiblePassword: ref(false),
      login
    }
  }
})
</script>

<template>
  <q-page padding>
    <div class="row">
      <div class="col-12 col-md-4"></div>
      <div class="col-12 col-md-4">
        <q-card class="max-w-sm mx-auto bg-grey-3">
          <q-form @submit="login">
            <div class="text-center q-pt-md">
              <q-avatar size="100px" class="q-mb-md" rounded>
                <q-img src="/logo.png" />
              </q-avatar>
            </div>
            <div>
              <div class="text-subtitle1 text-bold text-center text-grey-9">Bienvenido</div>
              <div class="text-subtitle2 text-center text-grey-7">Inicia sesión para continuar</div>
            </div>
            <div class="row">
              <div class="col-12">
                <q-separator />
              </div>
              <div class="col-12 q-px-md q-py-xs">
                <q-input v-model="email" label="Email" filled >
                  <template v-slot:prepend>
                    <q-icon name="o_email" />
                  </template>
                </q-input>
              </div>
              <div class="col-12 q-px-md q-py-xs">
                <q-input v-model="password" label="Password" filled :type="visiblePassword ? 'text' : 'password'">
                  <template v-slot:prepend>
                    <q-icon name="o_lock" />
                  </template>
                  <template v-slot:append>
                    <q-icon :name="visiblePassword ? 'o_visibility' : 'o_visibility_off'" @click="visiblePassword = !visiblePassword"/>
                  </template>
                </q-input>
              </div>
            </div>
            <div class="col-12 q-pa-md flex  flex-center">
              <q-btn label="Ingresar" type="submit" size="15px" class="text-bold" color="primary" rounded no-caps style="width: 250px;"/>
            </div>
          </q-form>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<style scoped lang="sass">

</style>
