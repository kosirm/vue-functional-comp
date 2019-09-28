<template>
  <!-- Try adding disabled -->
  <FunctionalButton @click="log">
    Click me
  </FunctionalButton>
</template>

<script>
import FunctionalButton from "./FunctionalButton.js";

export default {
  components: {
    FunctionalButton
  },
  methods: {
    log() {
      console.log("clicked");
    }
  }
};
</script>
