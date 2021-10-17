<template>
  <div :style="{ width }">
    <h1 class="title">{{ title }}</h1>
    <hr>
    <slot>

    </slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
  name: 'Section'
})
export default class Section extends Vue {
  @Prop(String) readonly title!: string;
  @Prop(String) readonly width!: string;
}
</script>

<style scoped lang="scss">
.title {
    margin: 0;
    margin-top: 5vmin;
    padding: 0;
    width: 100%;
    font-weight: bold;
    font-size: 3vmin;
}

hr {
    display:block;
    margin: 1vmin 0;
    width: 100%;
    height: 1px;
    border: none;
    background-color: #9f9f9f;
}
</style>
