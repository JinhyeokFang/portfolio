import PageController from '../PageController/PageController.vue'
import NextPageButton from '../NextPageButton/NextPageButton.vue'
import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from 'vue-property-decorator';
import ISwipeEvent, { Direction } from '../../interfaces/ISwipeEvent'

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
  @Prop(Boolean) readonly portrait!: boolean;

  mounted(): void {
    this.numberOfPages = this.$children.length - (this.portrait ? 1 : 3);
    if (this.page !== undefined)
      this.currentPage = this.page;
    if (this.portrait)
      return;
    
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
    return this.portrait ? '0' : -1 * this.currentPage * 100 + 'vw';
  }
  get pagesWidth(): string {
    return this.portrait ? '100vw' : this.numberOfPages * 100 + 'vw';
  }
  get marginTopHeight(): string {
    return !this.portrait ? '0' : -1 * this.currentPage * 100 + 'vh';
  }
  get pagesHeight(): string {
    return !this.portrait ? '100vh' : this.numberOfPages * 100 + 'vh';
  }
  get showPreviousButton(): boolean {
    return this.currentPage != 0;
  }
  get showNextButton(): boolean {
    return this.currentPage != this.numberOfPages - 1;
  }

  onSwipe(event: ISwipeEvent): void {
    if (this.portrait) {
      if (event.direction == Direction.Bottom)
        this.nextPage();
      if (event.direction == Direction.Top)
        this.previousPage();
    } else {
      if (event.direction == Direction.Left)
        this.nextPage();
      if (event.direction == Direction.Right)
        this.previousPage();
    }
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