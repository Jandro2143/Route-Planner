<template>
  <button class="add-box" @click="printAddresses">
    Print Addresses
  </button>
</template>

<script>
export default {
  name: 'GenerateRoute',
  props: {
    startAddress: String,
    endAddress: String,
    waypoints: Array,
  },
  methods: {
    printAddresses() {
      console.log('Start Address:', this.startAddress);
      console.log('End Address:', this.endAddress);
      if (this.waypoints && this.waypoints.length > 0) {
        console.log('Waypoints:', this.waypoints.join(', '));
      } else {
        console.log('No waypoints provided');
      }
    },
  },
};
</script>
