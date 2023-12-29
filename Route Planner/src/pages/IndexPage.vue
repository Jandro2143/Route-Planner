<template>
  <StartAddress/>
  <EndAddress/>
  <br><br>
  <div class="route-text">Enter Route:</div>
  <q-page class="flex">
    <multiple-address-search />
    <!-- Include the MultipleAddressSearch component here -->
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import MultipleAddressSearch from 'src/components/MultipleAddressSearch.vue';
import StartAddress from 'src/components/StartAddress.vue';
import EndAddress from 'src/components/EndAddress.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    MultipleAddressSearch,
    StartAddress,
    EndAddress
  }
})
</script>

<style>
.route-text {
  text-align: center; /* Center the text horizontally */
  width: 100%; /* Make sure the div takes the full width */
}
/* Add any other global styles here */
</style>
