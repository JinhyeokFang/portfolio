import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  name: 'Profile'
})
export default class Profile extends Vue {
  public showIntro = true;

  closeIntro(): void {
    this.showIntro = false;
  }
}