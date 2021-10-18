import Vue from 'vue';
import Component from 'vue-class-component';
import Section from '../Section/Section.vue'

@Component({
    name: 'Introduction',
    components: {
        Section
    }
})
export default class Introduction extends Vue {
    goto(link: string): void {
        location.href = link;
    }
    copy(value: string): void {
        navigator.clipboard.writeText(value);
    }
}