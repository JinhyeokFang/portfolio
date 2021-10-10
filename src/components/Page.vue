<template>
  <div class="page" :style="{ backgroundColor }">
    <slot>
      
    </slot>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    backgroundColor: String
  }
}
</script>

<style scoped>
  .page {
    width: 100vw;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
