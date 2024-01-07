<template>
    <div class="multiple-address-search">
      <div v-for="(box, index) in searchBoxes" :key="box.id" class="search-box-wrapper">
        <address-search
          :placeholder="`Enter destination #${index + 1}`"
          :value="box.address"
          @input="event => updateAddress(event, index)"
        />
        <img
          src="https://www.svgrepo.com/show/522183/minus-circle.svg"
          alt="Remove"
          @click="removeSearchBox(index)"
          class="remove-button"
        />
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
        uniqueIdCounter: 0,
      };
    },
    methods: {
      addSearchBox() {
        this.searchBoxes.push({ id: this.generateUniqueId(), address: '' });
      },
      removeSearchBox(index) {
        this.searchBoxes.splice(index, 1);
      },
      updateAddress(event, index) {
        if (event && event.target && event.target.value !== undefined) {
          this.searchBoxes[index].address = event.target.value;
        }
      },
      generateUniqueId() {
        return `id-${++this.uniqueIdCounter}`;
      },
      emitGenerateRoute() {
        this.$emit('route-generated', this.searchBoxes.map(box => box.address));
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
    width: 100%;
    box-sizing: border-box;
  }
  </style>