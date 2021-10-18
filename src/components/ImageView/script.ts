import Vue from 'vue';
import Component from 'vue-class-component';
import { Prop } from "vue-property-decorator";
import ImageViewController from '../ImageViewController/ImageViewController.vue';

@Component({
  name: 'ImageView',
  components: {
    ImageViewController
  }
})
export default class ImageView extends Vue {
    public fullscrean = false;
    public curruntImage = 0;

    @Prop(Array) readonly src!: Array<string>;
    @Prop(String) readonly width!: string;
    @Prop(String) readonly height!: string;
    @Prop(String) readonly alt!: string;

    imageClickEvent(): void {
        this.fullscrean = !this.fullscrean;
    }
}