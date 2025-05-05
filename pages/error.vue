<script lang="ts" setup>
const route = useRoute();
const error = route.query.error || "An unknown error occured.";
</script>

<template>
  <div class="card bg-base-300 container mt-4 max-h-72">
    <div role="alert" class="alert alert-error">
      <span>Oh no! {{ error }}</span>
    </div>
  </div>
</template>
