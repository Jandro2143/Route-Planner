<template>
  <div class="search-box">
    <!-- Star icon that toggles between filled and unfilled -->
    <img
      :src="isStarFilled ? filledStar : emptyStar"
      @click="toggleStar"
      class="star-icon"
      alt="Star Rating"
    />
    <input
      ref="searchInput"
      class="search-input"
      type="text"
      placeholder="Enter a destination"
      v-model="searchQuery"
      @input="onInput"
    />
    <!-- Clear text -->
    <span v-if="searchQuery" class="clear-text" @click="clearSearch">Clear</span>
  </div>
</template>

<script>
export default {
  name: "AddressSearch",
  data() {
    return {
      searchQuery: "",
      autocomplete: null,
      isStarFilled: false, // Tracks the state of the star
      emptyStar: 'https://www.svgrepo.com/show/533052/star.svg', // URL for the empty star image
      filledStar: 'https://www.svgrepo.com/show/472830/star-filled.svg', // URL for the filled star image
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
      this.$refs.searchInput.focus(); // Focus on the input after clearing
      this.autocomplete.setBounds(null);
      this.$emit('search-cleared');
    },
    toggleStar() {
      this.isStarFilled = !this.isStarFilled; // Toggle the state of the star
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
  padding: 10px 16px; /* Adjusted padding for symmetry */
}

.star-icon {
  cursor: pointer;
  width: 24px; /* Set the size of the star icon */
  height: 24px; /* Set the size of the star icon */
  margin-right: 8px; /* Space between star icon and input */
}

.search-input {
  flex-grow: 1;
  border: none;
  border-radius: 20px;
  outline: none;
  padding-left: 32px; /* Added padding to make space for the star icon */
}

.clear-text {
  position: absolute;
  right: 16px; /* Position "Clear" text to the right with padding */
  color: #007bff;
  font-size: 0.9em;
  cursor: pointer;
}
</style>
