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
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .button { 
    width: 25px;
    height: 10px;
    margin: 5px;
    background-color: white;
    box-shadow: 0px 0px 3px 1px #9f9f9f;
    border: none;
    cursor: pointer;
    transition: 0.5s all;
  }

  .button:hover {
    background-color: #9f9f9f;
  }

  .button.selected {
    background-color: #9f9f9f;
    box-shadow: none;
  }
</style>
