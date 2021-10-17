<template>
  <p>
      <slot>
          
      </slot>
  </p>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component';

@Component({
  name: 'Paragraph'
})
export default class Paragraph extends Vue {}
</script>

<style scoped lang="scss">
p {
    margin: 0;
    text-align: left;
    font-size: 2vmin;
}
</style>
