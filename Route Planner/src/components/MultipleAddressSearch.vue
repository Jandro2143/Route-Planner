<template>
  <div class="multiple-address-search">
    <div v-for="box in searchBoxes" :key="box.id" class="search-box-wrapper">
      <address-search :placeholder="`Enter destination ${box.id}`" />
      <!-- Use a relative path to the image in the "public" directory -->
      <img src="https://www.svgrepo.com/show/522183/minus-circle.svg" alt="Remove" @click="removeSearchBox(box.id)" class="remove-button" style="width: 24px; height: 24px;" />
    </div>
    <!-- The "plus" line with the button to add more search boxes -->
    <div class="add-box" @click="addSearchBox">
      <!-- Add the plus icon here -->
      <img src="https://www.svgrepo.com/show/522230/plus-circle.svg" alt="Add" class="add-button" style="width: 24px; height: 24px;" />
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
      searchBoxes: [{ id: this.generateUniqueId() }], // Start with one search box with a unique ID
    };
  },
  methods: {
    addSearchBox() {
      // Add a new search box with a unique ID
      this.searchBoxes.push({ id: this.generateUniqueId() });
    },
    removeSearchBox(id) {
      // Remove the search box with the specified ID
      const indexToRemove = this.searchBoxes.findIndex(box => box.id === id);
      if (indexToRemove !== -1) {
        this.searchBoxes.splice(indexToRemove, 1);
      }
    },
    generateUniqueId() {
      // Generate a unique identifier
      return Date.now() + Math.random().toString(36).substr(2, 9);
    },
  },
};
</script>

<style scoped>
.multiple-address-search {
  width: 100%; /* Use the full width of the container */
  max-width: 600px; /* Or any maximum width you prefer */
  margin: 16px auto; /* Center the search box if container is wider */
}

.search-box-wrapper {
  display: flex; /* Display the search box and image in a row */
  align-items: center;
  justify-content: space-between; /* Space between the search box and image */
  margin-bottom: 16px; /* Adjust space between search boxes */
}

.remove-button {
  /* Adjust the width and height of the image as needed */
  width: 32px;
  height: 32px;
  cursor: pointer;
  margin-left: 8px; /* Add space between search box and image */
}

.add-box {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-top: 16px;
  width: 24px;
  height: 24px;
  background: url('https://www.svgrepo.com/show/522230/plus-circle.svg') center center no-repeat;
  background-size: contain;
}
</style>
