<template>
  <div id="app">
    <PageContainer :page=0 ref="container">
      <Page class="page" backgroundColor="#fafafa">
        <Profile/>
        <Introduction/>
      </Page>
      <Page class="page" backgroundColor="#fafafa">
        <Project
          :title="'lsp-server'"
          :period="'2012.34.56 ~ 2012.34.56'"
          :links="[
            { name: '포스트맨 링크', url: 'https://www.postman.com/jinhyeokfang/workspace/my-workspace/collection/4527657-4c019082-f937-411a-b923-f8b7e9b4084b?ctx=documentation'},
            { name: '깃허브 링크', url: 'https://github.com/JinhyeokFang/lsp-server'},
          ]"
          :role="'역할: 서버 개발 및 배포'"
          :categorys="[
            {title: 'Backend', items: ['Express', 'TypeScript', 'MongoDB']},
            {title: '', items: ['Prisma', 'Docker API', 'Nginx']},
            {title: 'Deployment', items: ['Linux', 'PM2', 'VPS(vultr)', 'Docker']},
            {title: 'etc', items: ['Git/Github', 'VSCode', 'Postman']}
          ]"
          :functionManual="'기능1, 기능2, 어어어엄청기이이이능'"
        >
          &nbsp;&nbsp;이 프로젝트는 영국에서 최초로 시작되어 일년에 한 바퀴 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 프로젝트는 4일 안에 당신 곁을 떠나야 합니다. 이 프로젝트를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다...
        </Project>
      </Page>
      <Page class="page" backgroundColor="#fafafa">
        <Project
          :title="'ts-server-v3'"
          :period="'2012.34.56 ~ 2012.34.56'"
          :links="[
            { name: '포스트맨 링크', url: 'https://www.postman.com/jinhyeokfang/workspace/my-workspace/collection/4527657-4c019082-f937-411a-b923-f8b7e9b4084b?ctx=documentation'},
            { name: '깃허브 링크', url: 'https://github.com/JinhyeokFang/lsp-server'},
          ]"
          :role="'역할: 서버 개발 및 배포'"
          :categorys="[
            {title: 'Backend', items: ['Express', 'TypeScript', 'MongoDB']},
            {title: '', items: ['Prisma', 'Docker API', 'Nginx']},
            {title: 'Deployment', items: ['Linux', 'PM2', 'VPS(vultr)', 'Docker']},
            {title: 'etc', items: ['Git/Github', 'VSCode', 'Postman']}
          ]"
          :functionManual="'기능1, 기능2, 어어어엄청기이이이능'"
        >
          &nbsp;&nbsp;이 프로젝트는 영국에서 최초로 시작되어 일년에 한 바퀴 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 프로젝트는 4일 안에 당신 곁을 떠나야 합니다. 이 프로젝트를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다...
        </Project>
      </Page>
    </PageContainer>
    <div id="notSupport">
      <div>
        <h1>죄송합니다 :(</h1>
        <p>&nbsp;&nbsp;이 사이트는 오직 가로 화면에서만 동작합니다.</p>
      </div>
    </div>
  </div>
</template>

<script>
import Introduction from './components/Introduction.vue'
import Page from './components/Page.vue'
import PageContainer from './components/PageContainer.vue'
import Profile from './components/Profile.vue'
import Project from './components/Project.vue'

export default {
  name: 'App',
  components: {
    Page,
    PageContainer,
    Profile,
    Project,
    Introduction
  },
  methods: {
    changeCurruntPage(number) {
      this.$refs.container.changeCurruntPage(number);
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    overflow: hidden;
    font-family: 'IBM Plex Sans KR', sans-serif;
    background-color: #fafafa;
  }

  #notSupport {
    display: none;
    z-index: 10000;
  }

  @media screen and (orientation: portrait) {
    #notSupport {
      position: fixed;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      background: #fafafa;
    }
  }
</style>
