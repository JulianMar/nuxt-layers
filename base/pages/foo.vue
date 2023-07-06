<template>
  <div>
    Hello from extended page !

    <img src="/Rectangle.png" />
  </div>
</template>

<script setup>
definePageMeta({
  middleware: 'foo',
});
</script>
