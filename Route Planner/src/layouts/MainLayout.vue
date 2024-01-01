<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar class="centered-toolbar">
        <q-toolbar-title class="centered-title">
          Waypoint Wizard
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <!-- Footer with Centered and Separated Buttons -->
    <q-footer elevated>
      <q-toolbar class="footer-toolbar">
        <q-btn flat label="History" @click="goToHistory"></q-btn>
        <div class="separator"></div> <!-- Separator line -->
        <q-btn flat label="Plan Route" @click="goToPlanRoute"></q-btn>
        <div class="separator"></div> <!-- Additional Separator for Settings -->
        <q-btn flat label="Settings" @click="goToSettings"></q-btn> <!-- Settings Button -->
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'MainLayout',
  setup () {
    const router = useRouter();
    const leftDrawerOpen = ref(false);

    // Methods for button actions
    const goToHistory = () => {
      router.push('/history');
    };

    const goToPlanRoute = () => {
      router.push('/IndexPage');
    };

    const goToSettings = () => {
      router.push('/settings');
    };

    return {
      essentialLinks: [],
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      goToHistory,
      goToPlanRoute,
      goToSettings,
    };
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

/* Style for the footer */
.footer-toolbar {
  display: flex;
  justify-content: center;
  align-items: center;
}

.separator {
  height: 30px; /* Adjust as needed */
  width: 2px; /* Adjust thickness of the line */
  background-color: #ffffff; /* Color of the separator */
  margin: 0 10px; /* Space around the separator */
}
</style>
