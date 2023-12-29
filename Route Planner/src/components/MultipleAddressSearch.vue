<template>
  <div class="multiple-address-search">
    <div v-for="box in searchBoxes" :key="box.id" class="search-box-wrapper">
      <address-search :placeholder="`Enter destination ${box.id}`" />
      <img src="https://www.svgrepo.com/show/522183/minus-circle.svg" alt="Remove" @click="removeSearchBox(box.id)" class="remove-button" />
    </div>
    <!-- The "Add Stop" button to add more search boxes -->
    <div class="add-box" @click="addSearchBox">
      Add Stop
    </div>
    <div class="line"></div>
  </div>
</template>

<script>
import AddressSearch from 'C:/Users/Alejandro Cedillo/OneDrive - Carbiz Rentals/Desktop/Route Planner/Route Planner/src/components/AddressSearch.vue';

export default {
  components: {
    AddressSearch,
  },
  data() {
    return {
      searchBoxes: [{ id: this.generateUniqueId() }],
    };
  },
  methods: {
    addSearchBox() {
      this.searchBoxes.push({ id: this.generateUniqueId() });
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
}
</style>
