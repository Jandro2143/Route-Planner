<template>
    <div>
      <!-- Input for Start Address -->
      <StartAddress v-model="startAddress" />
  
      <!-- Multiple Address Search Component for Waypoints -->
      <MultipleAddressSearch @waypoint-added="addWaypoint" />
  
      <!-- Input for End Address -->
      <EndAddress v-model="endAddress" />
  
      <!-- Button to Print Addresses -->
      <button @click="printAddresses">Print Addresses</button>
    </div>
  </template>
  
  <script>
  import StartAddress from 'src/components/StartAddress.vue';
  import EndAddress from 'src/components/EndAddress.vue';
  import MultipleAddressSearch from 'src/components/MultipleAddressSearch.vue';
  
  export default {
    components: {
      StartAddress,
      EndAddress,
      MultipleAddressSearch,
    },
    data() {
      return {
        startAddress: '',
        endAddress: '',
        waypointsList: [],
      };
    },
    methods: {
      addWaypoint(waypoint) {
        this.waypointsList.push(waypoint);
      },
      printAddresses() {
        console.log('Start Address:', this.startAddress);
        console.log('End Address:', this.endAddress);
        console.log('Waypoints:', this.waypointsList.join(', '));
      },
    },
  };
  </script>