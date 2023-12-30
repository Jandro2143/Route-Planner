<template>
  <div class="multiple-address-search">
    <div v-for="box in searchBoxes" :key="box.id" class="search-box-wrapper">
      <address-search
        :placeholder="`Enter destination ${box.id}`"
        v-model="box.address"
      />
      <img src="https://www.svgrepo.com/show/522183/minus-circle.svg" alt="Remove" @click="removeSearchBox(box.id)" class="remove-button" />
    </div>
    <div class="add-box" @click="addSearchBox">
      Add Stop
    </div>
    <!-- GenerateRoute Button -->
    <generate-route class="add-box" @click="emitGenerateRoute"></generate-route>
  </div>
</template>

<script>
import AddressSearch from 'src/components/AddressSearch.vue';
import GenerateRoute from 'src/components/GenerateRoute.vue';

export default {
  components: {
    AddressSearch,
    GenerateRoute,
  },
  data() {
    return {
      searchBoxes: [{ id: this.generateUniqueId(), address: '' }],
    };
  },
  methods: {
    addSearchBox() {
      this.searchBoxes.push({ id: this.generateUniqueId(), address: '' });
    },
    removeSearchBox(id) {
      const indexToRemove = this.searchBoxes.findIndex(box => box.id === id);
      if (indexToRemove !== -1) {
        this.searchBoxes.splice(indexToRemove, 1);
      }
    },
    generateUniqueId() {
      return Date.now() + Math.random().toString(36).substr(2, 9);
    },
    emitGenerateRoute() {
      this.$emit('route-generated', this.searchBoxes.map(box => box.address));
    },
  },
  watch: {
    searchBoxes: {
      deep: true,
      handler() {
        this.$emit('waypoints-updated', this.searchBoxes.map(box => box.address));
      }
    }
  },
};
</script>


<style scoped>
.multiple-address-search {
  width: 100%;
  max-width: 600px;
  margin: 16px auto;
}

.search-box-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
}

.remove-button {
  width: 24px;
  height: 24px;
  cursor: pointer;
  margin-left: 8px;
}

.add-box {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 16px;
  padding: 8px 16px;
  border-radius: 20px;
  background-color: #007bff;
  color: white;
  font-weight: bold;
  text-transform: uppercase;
  width: 100%; /* Ensure full width */
  box-sizing: border-box; /* Include padding and border in the element's total width and height */
}
</style>
