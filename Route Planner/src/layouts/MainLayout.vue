<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="centered-toolbar">
        <q-toolbar-title class="centered-title">
          Route Planner
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'

const linksList = [
]

export default defineComponent({
  name: 'MainLayout',



  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>

<style scoped>
.centered-toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.centered-title {
  text-align: center;
}
</style>


