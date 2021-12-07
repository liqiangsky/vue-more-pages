<template>
  <div class="abc">
    <h1>abc</h1>
    <!-- <h2>{{ JSON.stringify($route.query) }}</h2> -->
    <template v-for="key in { a: 1, b: 2 }">
      <!-- <h3 :key="key">{{ key }}</h3> -->
      <h3 :key="key">{{ key }}</h3>
    </template>
  </div>
</template>
