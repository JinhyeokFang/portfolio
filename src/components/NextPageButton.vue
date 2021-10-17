<template>
  <div class="next-button">
    <button id="one" class="button"/>
    <button id="two" class="button"/>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Component from "vue-class-component";

@Component({
    name: 'NextPageButton'
})
export default class NextPageButton extends Vue {}
</script>

<style scoped lang="scss">
    .next-button {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        filter: drop-shadow(0 0 3px #9f9f9f);
        width: 40px;
        height: 40px;
    }

    .button { 
        width: 40px;
        height: 8px;
        margin: 5px;
        background-color: white;
        border: none;
        cursor: pointer;
        transition: 0.5s all;
    }

    #one {
        transform: rotate(45deg);
    }

    #two {
        transform: rotate(-45deg);
    }

    .next-button:hover .button {
        background-color: #9f9f9f;
    }
</style>
