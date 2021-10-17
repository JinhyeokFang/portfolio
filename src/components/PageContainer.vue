<template>
  <div>
      <div
      id="page-container"
      v-hammer:swipe.horizontal="onSwipe"
      :style="{ width: pagesWidth, marginLeft: marginLeftWidth }">
      <slot>

      </slot>
    </div>
    <NextPageButton class="page-button" :class="{showPreviousButton}" id="previous-page-button" @click.native="previousPage()"/>
    <NextPageButton class="page-button" :class="{showNextButton}" id="next-page-button" @click.native="nextPage()"/>
    <PageController class="controller" :numberOfPages="numberOfPages" v-model="currentPage" />
  </div>
</template>

<script lang="ts">
import PageController from './PageController.vue'
import NextPageButton from './NextPageButton.vue'
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import ISwipeEvent, { Direction } from '../interfaces/ISwipeEvent'

@Component({
  name: 'PageContainer',
  components: {
    PageController,
    NextPageButton
  }
})
export default class PageContainer extends Vue {
  public numberOfPages = 0;
  public currentPage = 0;

  @Prop(Number) readonly page!: number;

  mounted(): void {
    this.numberOfPages = this.$children.length - 3;
    if (this.page !== undefined)
        this.currentPage = this.page;
    
    const DirectionLeft = 'ArrowLeft';
    const DirectionRight = 'ArrowRight';
    window.addEventListener('keyup', event => {
      if (event.key == DirectionLeft) 
        this.previousPage();
      if (event.key == DirectionRight) 
        this.nextPage();
      if (!isNaN(parseInt(event.key, 10)))
        this.numberKeyEvent(parseInt(event.key, 10));
    });
  }

  get marginLeftWidth(): string {
    return -1 * this.currentPage * 100 + 'vw';
  }
  get pagesWidth(): string {
    return this.numberOfPages * 100 + 'vw';
  }
  get showPreviousButton(): boolean {
    return this.currentPage != 0;
  }
  get showNextButton(): boolean {
    return this.currentPage != this.numberOfPages - 1;
  }

  onSwipe(event: ISwipeEvent): void {
    if (event.direction == Direction.Left)
      this.nextPage();
    if (event.direction == Direction.Right)
      this.previousPage();
  }
  nextPage(): void {
    if (this.currentPage < this.numberOfPages - 1) {
      this.currentPage++;
    } else {
      this.currentPage += 0.25;
      setTimeout(() => this.currentPage = this.numberOfPages - 1, 125);
    }
  }
  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
    } else {
      this.currentPage -= 0.25;
      setTimeout(() => this.currentPage = 0, 125);
    }
  }
  changecurrentPage(pageNumber: number): void {
    this.currentPage = pageNumber;
  }
  numberKeyEvent(number: number): void {
    if (number > this.numberOfPages) {
      if (this.currentPage == this.numberOfPages - 1) {
        this.nextPage();
        return;
      }
      this.currentPage = this.numberOfPages - 1;
      setTimeout(() => this.currentPage += 0.25, 250);
      setTimeout(() => this.currentPage -= 0.25, 500);
    } else if (number != 0) {
      this.changecurrentPage(number - 1);
    }
  }
}
</script>

<style scoped lang="scss">
  #page-container {
    display: flex;
    height: 100vh;
    transition: 0.5s margin-left;
    scroll-behavior: smooth;
  }

  .page-button {
    position: absolute;
    bottom: 50vh;
    z-index: 1;
    opacity: 0;
    transition: 0.25s all;
    transition-delay: 0.5s;
    visibility: hidden;
  }

  .showPreviousButton,
  .showNextButton {
    opacity: 1;
    visibility: visible;
  }

  #previous-page-button {
    left: 5vmin;
    transform: rotate(180deg);
  }

  #next-page-button {
    right: 5vmin;
    z-index: 1;
  }

  .page {
    flex: 1;
  }

  .controller {
    position: absolute;
    bottom: 4vmin;
  }
</style>
