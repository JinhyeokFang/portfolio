<template>
  <div class="page">
    <slot>
      
    </slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component } from "vue-property-decorator"

@Component({
  name: 'Page'
})
export default class Page extends Vue {}
</script>

<style scoped lang="scss">
  .page {
    @include flex-center;
    @include fullscrean;
  }
</style>
