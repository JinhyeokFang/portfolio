<template>
  <div id="app">
    <PageContainer :page=0 ref="container">
      <Page id="page1" class="page" backgroundColor="#fafafa">
        <Profile :class="{isVisible, isNotVisible}"/>
        <Introduction :class="{isVisible, isNotVisible}"/>
      </Page>
      <Page class="page" backgroundColor="#fafafa">
        <Project/>
      </Page>
      <Page class="page" backgroundColor="#fafafa">
        <h1>공사중 :(</h1>
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
  computed: {
    isNotVisible() {
      return !this.isVisible;
    }
  },
  methods: {
    changeCurruntPage(number) {
      this.$refs.container.changeCurruntPage(number);
    }
  },
  mounted() {
    setTimeout(() => this.isVisible = true, 500);
  },
  data() {
    return {
      isVisible: false
    }
  }
}
</script>

<style>
  body {
    margin: 0;
    overflow: hidden;
    font-family: 'IBM Plex Sans KR', sans-serif;
  }

  .isVisible {
    transition: 0.5s all;
    opacity: 1;
  }

  .isNotVisible {
    opacity: 0;
    transform: translateX(0px);
    transform: translateY(0px);
  }

  #page1 > *:nth-child(1).isNotVisible {
    transform: translateX(-25px);
  }

  #page1 > *:nth-child(2).isNotVisible {
    transform: translateX(25px);
  }

  #notSupport {
    display: none;
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
