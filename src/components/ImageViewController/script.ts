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