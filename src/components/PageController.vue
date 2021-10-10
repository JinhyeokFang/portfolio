<template>
  <div id="page-controller">
    <button 
        class="button" 
        v-for="(_, index) in numberOfPages" 
        :key="index"
        :class="{selected: index == value}"
        @click="changePage(index)"
    />
  </div>
</template>

<script>
export default {
  name: 'PageController',
  props: {
    numberOfPages: Number,
    value: Number
  },
  methods: {
    changePage(number) {
      this.$emit('input', number);
    }
  }
}
</script>

<style scoped>
  #page-controller {
    display: flex;
    justify-content: center;
    width: 100vw;
  }

  .button {
    width: 40px;
    height: 8px;
    margin: 5px;
    background-color: white;
    box-shadow: 0px 0px 3px 1px #9f9f9f;
    border: none;
    cursor: pointer;
    opacity: 0.8;
  }

  .button.selected {
    background-color: #9f9f9f;
  }
</style>
