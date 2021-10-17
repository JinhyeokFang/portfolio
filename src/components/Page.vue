<template>
  <div class="page" :style="{ backgroundColor }">
    <slot>
      
    </slot>
  </div>
</template>

<script lang="ts">
import Vue from "vue"
import { Component, Prop } from "vue-property-decorator"

@Component({
  name: 'Page'
})
export default class Page extends Vue {
  @Prop(String) readonly backgroundColor!: string;
}
</script>

<style scoped lang="scss">
  .page {
    width: 100vw;
    height: 100vh;
    
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
