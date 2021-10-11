<template>
  <div class="project">
    <div class="project-left">
        <div>
            <Section title="lsp-server" width="70vmin">
                <Paragraph>
                    2012.34.56 ~ 2012.34.56
                </Paragraph>
                <Paragraph>
                    포스트맨 링크
                    <span class="material-icons" @click="goto('https://www.postman.com/jinhyeokfang/workspace/my-workspace/collection/4527657-4c019082-f937-411a-b923-f8b7e9b4084b?ctx=documentation')">
                        link
                    </span>
                </Paragraph>
                <Paragraph>
                    깃허브 링크 
                    <span class="material-icons" @click="goto('https://github.com/JinhyeokFang/lsp-server')">
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
                &nbsp;&nbsp;이 프로젝트는 영국에서 최초로 시작되어 일년에 한 바퀴 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 프로젝트는 4일 안에 당신 곁을 떠나야 합니다. 이 프로젝트를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다...
            </Paragraph>
        </Section>
        <Section title="사용 기술 및 역할" width="70vmin">
            <Paragraph>
                역할: 서버 개발 및 배포
            </Paragraph>
            <div class="category-container">
                <div class="category">
                    <span class="skill category-title">Backend</span>
                    <span class="skill">Express</span>
                    <span class="skill">TypeScript</span>
                    <span class="skill">MongoDB</span>
                </div>
                <div class="category">
                    <span class="skill category-title"></span>
                    <span class="skill">Prisma</span>
                    <span class="skill">Docker API</span>
                    <span class="skill">Nginx</span>
                </div>
                <div class="category">
                    <span class="skill category-title">Deployment</span>
                    <span class="skill">Linux</span>
                    <span class="skill">PM2</span>
                    <span class="skill">VPS(vultr)</span>
                    <span class="skill">Docker</span>
                </div>
                <div class="category">
                    <span class="skill category-title">etc</span>
                    <span class="skill">Git/Github</span>
                    <span class="skill">Postman</span>
                    <span class="skill unimportant">...</span>
                </div>
            </div>
        </Section>
        <Section title="기능 설명" width="70vmin">
            <Paragraph>
                기능1, 기능2, 어어어엄청기이이이능
            </Paragraph>
        </Section>
    </div>
  </div>
</template>

<script>
import Section from './Section.vue'
import Paragraph from './Paragraph.vue'
import ImageView from './ImageView.vue'

export default {
  name: 'Project',
  components: {
    Section,
    Paragraph,
    ImageView
  },
  methods: {
    goto(link) {
        location.href = link;
    }
  }
}
</script>

<style scoped>
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
