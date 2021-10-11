<template>
  <div id="profile">
    <img id="profile-image" draggable="false" src="profile.jpg" alt="프로필 사진">
    <h1 id="title">방진혁</h1>
    <h3 class="text big">"치자피즈 먹고싶다"</h3>
    <h3 class="text">경기도 수원시</h3>
    <h3 class="text">경기대학교 컴퓨터공학전공</h3>
    <h3 class="text">2002.06</h3>
  </div>
</template>

<script>
export default {
  name: 'Profile'
}
</script>

<style scoped>
#profile {
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 50vmin;
    height: 65vmin;
    padding: 7.5vmin 2vmin;
    margin: 2vmin;
    box-shadow: 0px 0px 2px 0px #9f9f9f;
    background-color: white;
}

#profile-image {
    display: block;
    width: 32.5vmin;
    height: 32.5vmin;
    padding: 5px;
    box-shadow: 0px 0px 2px 0px #9f9f9f;
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
