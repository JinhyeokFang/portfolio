import Vue from 'vue'
import Component from 'vue-class-component'
import { Ref } from 'vue-property-decorator/lib'

import Introduction from '../Introduction/Introduction.vue'
import Page from '../Page/Page.vue'
import PageContainer from '../PageContainer/PageContainer.vue'
import Profile from '../Profile/Profile.vue'
import Project from '../Project/Project.vue'

@Component({
  name: 'App',
  components: {
    Page,
    PageContainer,
    Profile,
    Project,
    Introduction
  }
})
export default class App extends Vue {
  @Ref() readonly container!: PageContainer;

  changeCurruntPage(number: number): void {
    this.container.changecurrentPage(number);
  }

  mounted(): void {
    window.scrollTo(0, 1);
    this.$gtag.event('wow', { message: 'WOW' });
  }
}