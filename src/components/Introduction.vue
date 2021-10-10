<template>
  <div class="introduction">
    <h1 class="title">Skills</h1>
    <hr>
    <div class="skill-container">
        <div class="category">
            <span class="skill category-title">Backend</span>
            <span class="skill">Express</span>
            <span class="skill">TypeScript</span>
            <span class="skill">MongoDB</span>
            <span class="skill unimportant">Nginx</span>
        </div>
        <div class="category">
            <span class="skill category-title">Frontend</span>
            <span class="skill">HTML</span>
            <span class="skill">CSS</span>
            <span class="skill">JavaScript</span>
            <span class="skill unimportant">Vue</span>
        </div>
        <div class="category">
            <span class="skill category-title">Deployment</span>
            <span class="skill">Linux</span>
            <span class="skill">PM2</span>
            <span class="skill">VPS</span>
            <span class="skill unimportant">Docker</span>
            <span class="skill unimportant">GCP</span>
        </div>
        <div class="category">
            <span class="skill category-title">etc</span>
            <span class="skill">Git/Github</span>
            <span class="skill">Postman</span>
            <span class="skill unimportant">...</span>
        </div>
    </div>
    <h1 class="title">Education</h1>
    <hr>
    <div class="education-container">
        <div class="category">
            <span class="education period">2021.03 ~ 재학중</span>
            <span class="education name">경기대학교 컴퓨터공학전공</span>
        </div>
        <div class="category">
            <span class="education period">2018.03 ~ 2021.02</span>
            <span class="education name">선린인터넷고등학교 소프트웨어과</span>
        </div>
    </div>
    <h1 class="title">Certificate</h1>
    <hr>
    <div class="certificate-container">
        <div class="category">
            <span class="certificate period">2020.08</span>
            <span class="certificate name">정보처리기능사 취득</span>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Introduction',
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

.title {
    margin: 0;
    margin-top: 5vmin;
    padding: 0;
    width: 100%;
    font-weight: bold;
    font-size: 3vmin;
}

hr {
    display:block;
    margin: 1vmin 0;
    width: 100%;
    height: 1px;
    border: none;
    background-color: #9f9f9f;
}

.skill-container {
    margin: 1vmin 0;
    width: 100%;
}

.skill {
    display: block;
    text-align: left;
    font-size: 2.5vmin;
    margin-right: 5vmin;
}

.skill.category-title {
    width: 20vmin;
    font-size: 2.5vmin;
}

.skill.unimportant {
    font-weight: lighter;
}

.category {
    display: flex;
    align-items: center;
    width: 100%;
}

.education-container {
    margin: 1vmin 0;
    width: 100%;
}

.education-container > .category > .period {
    width: 20vmin;
    font-size: 2vmin;
}

.education {
    display: block;
    text-align: left;
    font-size: 2.5vmin;
    margin-right: 5vmin;
}

.certificate-container {
    margin: 1vmin 0;
    width: 100%;
}

.certificate-container > .category > .period {
    width: 20vmin;
    font-size: 2vmin;
}

.certificate {
    display: block;
    text-align: left;
    font-size: 2.5vmin;
    margin-right: 5vmin;
}

</style>
