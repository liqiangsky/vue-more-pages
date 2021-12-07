<template>
  <div class="home">{{ value }}</div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["value"]),
  },
};
</script>
