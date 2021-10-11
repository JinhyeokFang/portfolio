<template>
  <p>
      <slot>
          
      </slot>
  </p>
</template>

<script>
export default {
  name: 'Paragraph'
}
</script>

<style scoped>
p {
    margin: 0;
    text-align: left;
    font-size: 2vmin;
}
</style>
