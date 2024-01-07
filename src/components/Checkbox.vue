<template>
    <div class="checkbox-container">
      <input
        type="checkbox"
        id="useSameAsStart"
        v-model="isChecked"
        @input="onCheckboxChange"
      />
      <label for="useSameAsStart">Use same as start destination</label>
    </div>
  </template>
  
  
  <script>
  export default {
    name: "CheckboxComponent",
    data() {
      return {
        isChecked: false,
      };
    },
    methods: {
      onCheckboxChange() {
        this.$emit('change', this.isChecked);
      },
    },
  };
  </script>
  
  <style>
  .checkbox-container {
    margin: 10px 0;
    display: flex;
    align-items: center;
    margin-left: 10px;
  }
  
  .checkbox-container label {
    margin-left: 8px;
  }
  </style>