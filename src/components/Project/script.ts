import Section from '../Section/Section.vue'
import Paragraph from '../Paragraph/Paragraph.vue'
import ImageView from '../ImageView/ImageView.vue'

import ICategory from '../../interfaces/ICategory'
import ILink from '../../interfaces/ILink'

import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop } from 'vue-property-decorator'

@Component({
    name: 'Project',
    components: {
        Section,
        Paragraph,
        ImageView
    }
})
export default class Project extends Vue {
    @Prop(String) readonly title!: string;
    @Prop(String) readonly period!: string;
    @Prop(String) readonly description!: string;
    @Prop(Array) readonly categorys!: Array<ICategory>;
    @Prop(Array) readonly links!: Array<ILink>;
    @Prop(String) readonly role!: string;
    @Prop(String) readonly functionManual!: string;

    goto(link: string): void {
        location.href = link;
    }
}