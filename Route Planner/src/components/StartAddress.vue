<template>
  <div class="search-box">
    <input
      ref="searchInput"
      class="search-input"
      type="text"
      placeholder="Enter Start Destination"
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
  name: "StartAddress",
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
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  background-color: white;
  border-radius: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  padding: 10px; /* Adjusted padding for consistency */
}

.search-input {
  flex: 1 0 auto; /* grow, shrink, basis */
  padding: 4px;
  border: none;
  border-radius: 20px;
  outline: none;
  font-size: 1em; /* Adjust the font size as needed */
}

.clear-text {
  margin-left: 8px; /* Ensure some space between the input and clear text */
  color: #007bff;
  font-size: 1em;
  cursor: pointer;
  padding: 4px 8px;
}


</style>
