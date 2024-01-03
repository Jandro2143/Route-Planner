<template>
  <StartAddress v-model="startAddress" />
  <!-- Conditionally render EndAddress based on checkbox state -->
  <EndAddress v-if="!checkbox.value" v-model="endAddress" />
  <!-- Checkbox input -->
  <Checkbox v-model="checkbox" />
  <br><br>
  <div class="route-text">Enter Route:</div>
  <q-page class="flex">
    <multiple-address-search />
  </q-page>
</template>

<script>
import { defineComponent, ref } from 'vue';
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
    const checkbox = ref(false);

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
