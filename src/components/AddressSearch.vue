<template>
  <div class="search-box">
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
      :value="searchQuery"
      @input="onInput"
    />
    <span v-if="searchQuery" class="clear-text" @click="clearSearch">Clear</span>
  </div>
</template>

<script>
export default {
  props: {
    value: String,
  },
  data() {
    return {
      searchQuery: this.value,
      autocomplete: null,
      isStarFilled: false,
      emptyStar: 'https://www.svgrepo.com/show/533052/star.svg',
      filledStar: 'https://www.svgrepo.com/show/472830/star-filled.svg',
    };
  },
  watch: {
    value(newVal) {
      if (newVal !== this.searchQuery) {
        this.searchQuery = newVal;
      }
    },
  },
  mounted() {
    this.initAutocomplete();
  },
  methods: {
    initAutocomplete() {
      if (window.google && window.google.maps && window.google.maps.places) {
        this.autocomplete = new google.maps.places.Autocomplete(
          this.$refs.searchInput,
          { types: ['geocode'] }
        );
        this.autocomplete.addListener('place_changed', this.onPlaceChanged);
      } else {
        console.error('Google Maps API script not loaded!');
      }
    },
    onInput(event) {
      this.searchQuery = event.target.value;
      this.$emit('input', this.searchQuery);
    },
    onPlaceChanged() {
      const place = this.autocomplete.getPlace();
      if (place && place.geometry) {
        this.searchQuery = place.formatted_address;
        this.$emit('input', place.formatted_address);
      }
    },
    clearSearch() {
      this.searchQuery = "";
      this.$emit('input', '');
      this.$refs.searchInput.focus();
      if (this.autocomplete) {
        this.autocomplete.setBounds(null);
      }
    },
    toggleStar() {
      this.isStarFilled = !this.isStarFilled;
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
