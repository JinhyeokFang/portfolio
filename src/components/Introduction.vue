<template>
  <div class="introduction">
    <Section title="Skills" width="90vmin">
        <div class="category-container">
            <div class="category">
                <span class="item category-title">Backend</span>
                <span class="item">Express</span>
                <span class="item">TypeScript</span>
                <span class="item">MongoDB</span>
                <span class="item unimportant">Nginx</span>
            </div>
            <div class="category">
                <span class="item category-title">Frontend</span>
                <span class="item">HTML</span>
                <span class="item">CSS</span>
                <span class="item">JavaScript</span>
                <span class="item unimportant">Vue</span>
            </div>
            <div class="category">
                <span class="item category-title">Deployment</span>
                <span class="item">Linux</span>
                <span class="item">PM2</span>
                <span class="item">VPS</span>
                <span class="item unimportant">Docker</span>
                <span class="item unimportant">GCP</span>
            </div>
            <div class="category">
                <span class="item category-title">etc</span>
                <span class="item">Git/Github</span>
                <span class="item">Postman</span>
                <span class="item unimportant">...</span>
            </div>
        </div>
    </Section>
    <Section title="Education" width="90vmin">
        <div class="category-container">
            <div class="category">
                <span class="left">2021.03 ~ 재학중</span>
                <span class="right">경기대학교 컴퓨터공학전공</span>
            </div>
            <div class="category">
                <span class="left">2018.03 ~ 2021.02</span>
                <span class="right">선린인터넷고등학교 소프트웨어과</span>
            </div>
        </div>
    </Section>
    <Section title="Contacts" width="90vmin">
        <div class="category-container">
            <div class="category">
                <span class="left">이메일</span>
                <span class="right">
                    JinhyeokFang@gmail.com
                    <span class="material-icons" @click="copy('jinhyeokfang@google.com')">
                        content_copy
                    </span>
                </span>
            </div>
            <div class="category">
                <span class="left"></span>
                <span class="right">
                    hyeki0206@naver.com
                    <span class="material-icons" @click="copy('hyeki0206@naver.com')">
                        content_copy
                    </span>
                </span>
            </div>
            <div class="category">
                <span class="left">깃허브</span>
                <span class="right">
                    https://github.com/JinhyeokFang
                    <span class="material-icons" @click="goto('https://github.com/JinhyeokFang')">
                        link
                    </span>
                </span>
            </div>
            <div class="category">
                <span class="left">페이스북</span>
                <span class="right">
                    https://facebook.com/JinhyeokB
                    <span class="material-icons" @click="goto('https://facebook.com/JinhyeokB')">
                        link
                    </span>
                </span>
            </div>
            <div class="category">
                <span class="left">카카오톡</span>
                <span class="right">
                    X
                </span>
            </div>
        </div>
    </Section>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Section from './Section.vue'

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
</script>

<style scoped lang="scss">
.introduction {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 90vmin;
    height: 80vmin;
    padding: 0 4vmin;
    margin: 2vmin;
    box-shadow: 0px 0px 2px 0px #9f9f9f;
    background-color: white;
}

.item {
    display: block;
    text-align: left;
    font-size: 2.5vmin;
    margin-right: 5vmin;
}

.item.category-title {
    width: 20vmin;
    font-size: 2.5vmin;
}

.item.unimportant {
    font-weight: lighter;
}

.category {
    display: flex;
}

.category-container > .category > .left {
    width: 30vmin;
}

.category-container > .category > .left,
.category-container > .category > .right,
.material-icons {
    display: inline-block;
    text-align: left;
    font-size: 2.25vmin;
    margin-right: 5vmin;
}

.material-icons {
    cursor: pointer;
}

</style>
