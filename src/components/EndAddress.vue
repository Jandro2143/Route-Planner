<template>
    <div class="search-box">
      <input
        ref="searchInput"
        class="search-input"
        type="text"
        placeholder="Enter End Destination"
        v-model="searchQuery"
        @input="onInput"
      />
      <!-- Clear text -->
      <span
        v-if="searchQuery"
        class="clear-text"
        @click="clearSearch"
      >Clear</span>
    </div>
  </template>
  
  <script>
  export default {
    name: "AddressSearch",
    data() {
      return {
        searchQuery: "",
        autocomplete: null,
      };
    },
    mounted() {
      this.initAutocomplete();
    },
    methods: {
      initAutocomplete() {
        // Ensure the Google Maps API script has been loaded
        if (window.google && window.google.maps && window.google.maps.places) {
          this.autocomplete = new google.maps.places.Autocomplete(
            this.$refs.searchInput,
            { types: ['geocode'] }
          );
  
          this.autocomplete.addListener('place_changed', () => {
            const place = this.autocomplete.getPlace();
            if (!place.geometry) {
              console.log("Returned place contains no geometry");
              return;
            }
            this.$emit('place-changed', place);
          });
        } else {
          console.error('Google Maps API script not loaded!');
        }
      },
      onInput() {
        // Handle input event
      },
      clearSearch() {
        this.searchQuery = "";
        this.$refs.searchInput.value = "";
        this.autocomplete.setBounds(null);
        this.$emit('search-cleared');
      },
    },
  };
  </script>
  
  <style>
  .search-box {
    position: relative;
    width: 100%;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    background-color: white;
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    padding: 10px 16px; /* Symmetrical padding on both sides */
  }
  
  .search-input {
    flex-grow: 1;
    padding-right: 50px; /* Add right padding to prevent text overlap */
    border: none;
    border-radius: 20px;
    outline: none;
  }
  
  .clear-text {
    position: absolute;
    right: 16px; /* Position "Clear" text to the right with padding */
    color: #007bff;
    font-size: 0.9em;
    cursor: pointer;
  }
  </style>