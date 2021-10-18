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