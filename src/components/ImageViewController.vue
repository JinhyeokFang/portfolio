<template>
  <div id="page-controller">
    <button 
        class="button" 
        v-for="(_, index) in numberOfImages" 
        :key="index"
        :class="{selected: index == value}"
        @click="input(index)"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";
import { Emit, Prop } from "vue-property-decorator";

@Component({
  name: 'ImageController'
})
export default class ImageController extends Vue {
  @Prop(Number) readonly numberOfImages!: number;
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
  }

  .button {
    @include shadow;

    width: 25px;
    height: 10px;
    margin: 5px;
    background-color: white;
    border: none;
    cursor: pointer;
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
