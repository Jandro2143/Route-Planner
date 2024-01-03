<template>
  <StartAddress v-model="startAddress" />
  <EndAddress v-model="endAddress" :isVisible="!checkbox"/>
  <Checkbox v-model="checkbox"/>
  <br><br>
  <div class="route-text">Enter Route:</div>
  <q-page class="flex">
    <multiple-address-search />
    <!-- Include the MultipleAddressSearch component here -->
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue'
import MultipleAddressSearch from 'src/components/MultipleAddressSearch.vue';
import StartAddress from 'src/components/StartAddress.vue';
import EndAddress from 'src/components/EndAddress.vue';
import Checkbox from 'src/components/Checkbox.vue';

export default defineComponent({
  name: 'IndexPage',
  components: {
    MultipleAddressSearch,
    StartAddress,
    EndAddress,
    Checkbox
  },
  setup() {
    const startAddress = ref('');
    const endAddress = ref('');
    const checkbox = ref(false); // Define the reactive property for checkbox

    return { startAddress, endAddress, checkbox };
  }
})
</script>

<style>
.route-text {
  text-align: center;
  width: 100%;
}
</style>
