<template>
  <div>
      <div
      id="page-container"
      v-hammer:swipe.horizontal="onSwipe"
      :style="{ width: pagesWidth, marginLeft: marginLeftWidth }">
      <slot>

      </slot>
    </div>
    <PageController class="controller" :numberOfPages="numberOfPages" v-model="curruntPage" />
  </div>
</template>

<script>
import PageController from './PageController.vue'

export default {
  name: 'PageContainer',
  props: {
    page: Number
  },
  components: {
    PageController
  },
  mounted() {
    this.numberOfPages = this.$children.length - 1;
    if (this.page !== undefined)
        this.curruntPage = this.page;
    
    const DirectionLeft = 'ArrowLeft';
    const DirectionRight = 'ArrowRight';
    window.addEventListener('keyup', event => {
      if (event.key == DirectionLeft) 
        this.previousPage();
      if (event.key == DirectionRight) 
        this.nextPage();
    });
  },
  computed: {
    marginLeftWidth() {
      return -1 * this.curruntPage * 100 + 'vw';
    },
    pagesWidth() {
      return this.numberOfPages * 100 + 'vw';
    }
  },
  methods: {
    onSwipe(event) {
      const DirectionLeft = 2;
      const DirectionRight = 4;

      if (event.direction == DirectionLeft)
        this.nextPage();
      if (event.direction == DirectionRight)
        this.previousPage();
    },
    nextPage() {
      if (this.curruntPage < this.numberOfPages - 1)
        this.curruntPage++;
    },
    previousPage() {
      if (this.curruntPage > 0)
        this.curruntPage--;
    },
    changeCurruntPage(pageNumber) {
      this.curruntPage = pageNumber;
    }
  },
  data() {
    return {
      numberOfPages: 0,
      curruntPage: 0
    }
  }
}
</script>

<style >
  #page-container {
    display: flex;
    height: 100vh;
    transition: 0.5s margin-left;
    scroll-behavior: smooth;
  }

  .page {
    flex: 1;
  }

  .controller {
    position: absolute;
    bottom: 4vmin;
  }
</style>
