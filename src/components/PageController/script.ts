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