<template>
  <q-page class="flex">
    <StartAddress/>
    <EndAddress/>
    <multiple-address-search />
    <!-- Include the MultipleAddressSearch component here -->
  </q-page>
</template>



<script>
import { defineComponent } from 'vue'
import MultipleAddressSearch from 'src/components/MultipleAddressSearch.vue'; // Import the MultipleAddressSearch component
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
