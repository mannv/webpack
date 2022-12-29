<script setup lang="ts">
defineProps<{
  msg?: string,
  languages?: string[]
}>()
</script>

<template>
  <div class="greetings">
    <h1 class="green">Hello: {{msg}}</h1>
    <h3>
      <pre>{{languages}}</pre>
    </h3>
  </div>
</template>

<style scoped>
.green {
  color: green;
}

h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
