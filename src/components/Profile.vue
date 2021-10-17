<template>
  <div id="profile" :class="{showIntro}">
    <img id="profile-image" draggable="false" src="profile.jpg" alt="프로필 사진">
    <h1 id="title">방진혁</h1>
    <h3 class="text big">":)"</h3>
    <h3 v-if="!showIntro" class="text">경기도 수원시</h3>
    <h3 v-if="!showIntro" class="text">경기대학교 컴퓨터공학전공</h3>
    <h3 v-if="!showIntro" class="text">2002.06</h3>
    <button class="close-button" v-if="showIntro" @click="closeIntro()">
      <span class="material-icons">
        navigate_next
      </span>
    </button>
  </div>
</template>

<script lang="ts">
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
</script>

<style scoped lang="scss">
#profile.showIntro {
  @include flex-center;

  position: fixed;

  width: 300vw;
  height: 100vh;
  left: -100vw;
  top: 0;
  margin: 0;
  padding: 0;
  border: none;

  z-index: 100000;
}

.close-button {
  @include shadow;

  border: none;
  padding: 0;
  margin: 0;
  margin-top: 1vmin;
  width: 8vmin;
  height: 8vmin;
  border-radius: 10vmin;
  background-color: $app-background-color;
  transition: 0.5s all;
  cursor: pointer;
}

.close-button:hover {
  background-color: $card-shadow-color;
}

#profile {
  @include flex-column-center;
  @include shadow;

  position: static;
  cursor: auto;

  width: 50vmin;
  height: 65vmin;
  padding: 7.5vmin 2vmin;
  margin: 2vmin;
  background-color: white;

  z-index: 0;
  transition: 1s all;
}

#profile-image {
  display: block;
  width: 32.5vmin;
  height: 32.5vmin;
  padding: 5px;
  box-shadow: 0px 0px 2px 0px $card-shadow-color;
  border-radius: 100vw;
}

#title {
  margin: 1vmin 0;
  font-weight: bold;
  font-size: 4.5vmin;
}

.text {
  margin: 0.5vmin 0;
  font-weight: lighter;
  font-size: 2.25vmin;
}

.text.big {
  font-size: 2.75vmin;
  font-weight: normal;
}
</style>
