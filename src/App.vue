<template>
  <div id="app">
    <PageContainer :page=0 ref="container">
      <Page id="page1" class="page" backgroundColor="#fafafa">
        <Profile/>
        <Introduction/>
      </Page>
      <Page class="page" backgroundColor="#fafafa">
        <Project/>
      </Page>
      <Page class="page" backgroundColor="#fafafa">
        <h1>공사중 :(</h1>
      </Page>
    </PageContainer>
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
  mounted() {
    alert('주의! 페이지 공사중');
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
  }
</style>
