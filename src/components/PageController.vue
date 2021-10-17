<template>
  <div id="page-controller">
    <button 
        class="button" 
        v-for="(_, index) in numberOfPages" 
        :key="index"
        :class="{selected: index == parseInt(value, 10)}"
        @click="input(index)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Component({
  name: 'PageController'
})
export default class PageController extends Vue {
  @Prop(Number) readonly numberOfPages!: number;
  @Prop(Number) readonly value!: number;

  @Emit()
  input(number: number): number {
    return number;
  }
}
</script>

<style scoped lang="scss">
  #page-controller {
    @include flex-center;

    width: 100vw;
  }

  .button {
    @include shadow();

    width: 40px;
    height: 8px;
    margin: 5px;
    background-color: white;
    border: none;
    cursor: pointer;
    opacity: 0.8;
    transition: 0.5s all;
  }

  .button:hover {
    background-color: $card-shadow-color;
  }

  .button.selected {
    background-color: $card-shadow-color;
    box-shadow: none;
  }
</style>
