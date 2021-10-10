<template>
  <div id="profile">
    <img id="profile-image" draggable="false" src="profile.jpg" alt="프로필 사진">
    <h1 id="title">방진혁</h1>
    <h3 class="text">경기도 수원시</h3>
    <h3 class="text">경기대학교 컴퓨터공학전공</h3>
    <h3 class="text">2002.06</h3>
    <div id="button-container">
        <button id="navermail" @click="copy('naverAddress')">Naver Address</button>
        <button id="gmail" @click="copy('gmailAddress')">Gmail Address</button>
        <button id="github" @click="goto('https://github.com/JinhyeokFang')">Github Link</button>
        <button id="facebook" @click="goto('https://facebook.com/JinhyeokB')">Facebook Link</button>
    </div>
    <input id="gmailAddress" type="text" class="hidden" value="jinhyeokfang@gmail.com">
    <input id="naverAddress" type="text" class="hidden" value="hyeki0206@naver.com">
  </div>
</template>

<script>
export default {
  name: 'Profile',
  methods: {
    goto(link) {
        location.href = link;
    },
    copy(id) {
        const element = document.getElementById(id);
        element.select();
        element.setSelectionRange(0, 99999);
        navigator.clipboard.writeText(element.value);
    }
  }
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
    width: 30vmin;
    height: 30vmin;
    padding: 5px;
    box-shadow: 0px 0px 2px 0px #9f9f9f;
    border-radius: 100vw;
}

#title {
    margin: 1vmin 0;
    font-weight: bold;
    font-size: 4vmin;
}

.text {
    margin: 0.5vmin 0;
    font-weight: normal;
    font-size: 2vmin;
}

#button-container {
    margin: 1vmin 0;
    display: flex;
    flex-wrap: wrap;
    width: 41vmin;
    justify-content: space-between;
    align-content: space-between;
}

#button-container > button {
    margin: 1vmin 0;
    box-shadow: 0px 0px 2px 0px #9f9f9f;
    background-color: white;
    width: 20vmin;
    height: 4vmin;
    font-size: 2vmin;
    cursor: pointer;
}

#button-container > #gmail {
    border: 1px solid #ea4335;
    color: #ea4335;
}

#button-container > #navermail {
    border: 1px solid #2db400;
    color: #2db400;
}

#button-container > #github {
    border: 1px solid #24292d;
    color: #24292d;
}

#button-container > #facebook {
    border: 1px solid #24292d;
    color: #24292d;
}

#button-container > #facebook {
    border: 1px solid #3b5998;
    color: #3b5998;
}

.hidden {
    display:none;
}
</style>
