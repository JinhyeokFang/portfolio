<template>
  <div class="project">
    <div class="project-left">
        <div>
            <Section :title="title" width="70vmin">
                <Paragraph>
                    {{ period }}
                </Paragraph>
                <Paragraph v-for="(link, index) in links" :key="index">
                    {{ link.name }}
                    <span class="material-icons" @click="goto(link.url)">
                        link
                    </span>
                </Paragraph>
            </Section>
        </div>
        <ImageView class="project-image" :src="['project.jpg','cat.jpg','big.png']" alt="프로젝트 사진" width="64vmin" height="36vmin" />
    </div>
    <div class="project-right">
        <Section title="프로젝트 소개" width="70vmin">
            <Paragraph>
                <slot />
            </Paragraph>
        </Section>
        <Section title="사용 기술 및 역할" width="70vmin">
            <Paragraph>
                {{ role }}
            </Paragraph>
            <div class="category-container">
                <div class="category" v-for="(category, index) in categorys" :key="index">
                    <span class="skill category-title">{{ category.title }}</span>
                    <span class="skill" v-for="(item, index) in category.items" :key="index">{{ item }}</span>
                </div>
            </div>
        </Section>
        <Section title="기능 설명" width="70vmin">
            <Paragraph>
                {{ functionManual }}
            </Paragraph>
        </Section>
    </div>
  </div>
</template>

<script lang="ts">
import Section from './Section.vue'
import Paragraph from './Paragraph.vue'
import ImageView from './ImageView.vue'

import ICategory from '../interfaces/ICategory'
import ILink from '../interfaces/ILink'

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
</script>

<style scoped lang="scss">
.project {
    display: flex;
    justify-content: space-around;

    width: 148vmin;
    height: 80vmin;
    padding: 0 4vmin;
    margin: 2vmin;

    box-shadow: 0px 0px 2px 0px #9f9f9f;
    background-color: white;
}

.project-left {
    display: flex;
    flex-direction: column;

    justify-content: space-between;

    width: 70vmin;
    flex-direction: column;
    align-items: center;
}

.project-image {
    margin-bottom: 18vmin;
}

.project-right {
    display: flex;

    width: 70vmin;
    flex-direction: column;
    align-items: center;
}

.category-container {
    margin: 0.5vmin 0;
}

.skill {
    display: block;
    text-align: left;
    font-size: 2.2vmin;
    margin-right: 5vmin;
}

.skill.category-title {
    width: 10vmin;
    font-size: 2.4vmin;
}

.category {
    display: flex;
    align-items: center;
    width: 100%;
}

.material-icons {
    display: inline-block;
    text-align: left;
    font-size: 2.25vmin;
    margin-right: 5vmin;
    cursor: pointer;
}
</style>
