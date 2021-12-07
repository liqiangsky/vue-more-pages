<template>
  <div class="about">
    <h1>{{ value }}</h1>
    <button @click="handleClick">跳转abc</button>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["value"]),
  },
  methods: {
    handleClick() {
      this.$router.push("/abc?a=1&b=3");
    },
  },
};
</script>
