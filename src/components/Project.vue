<template>
  <div class="project">
    <div class="project-left">
        <div>
            <h1 class="title">lsp-server</h1>
            <hr>
            <p class="introduction-text">
                2012.34.56 ~ 2012.34.56
            </p>
        </div>
        <img class="project-image" draggable="false" src="project.jpg" alt="프로젝트 사진">
    </div>
    <div class="project-right">
        <h1 class="title">프로젝트 소개</h1>
        <hr>
        <p class="introduction-text">
            &nbsp;&nbsp;이 프로젝트는 영국에서 최초로 시작되어 일년에 한 바퀴 돌면서 받는 사람에게 행운을 주었고 지금은 당신에게로 옮겨진 이 프로젝트는 4일 안에 당신 곁을 떠나야 합니다. 이 프로젝트를 포함해서 7통을 행운이 필요한 사람에게 보내 주셔야 합니다...
        </p>
        <h1 class="title">사용 기술 및 역할</h1>
        <hr>
        <p class="introduction-text">
            역할: 서버 개발 및 배포
        </p>
        <div class="skill-container">
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
        <h1 class="title">기능 설명</h1>
        <hr>
        <p class="introduction-text">
            기능1, 기능2, 어어어엄청기이이이능
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Project',
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
.project {
    display: flex;

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
    display: block;
    width: 64vmin;
    height: 36vmin;
    margin-bottom: 18vmin;
    padding: 5px;
    box-shadow: 0px 0px 2px 0px #9f9f9f;
}

.project-right {
    display: flex;

    width: 68vmin;
    margin-left: 2vmin;
    flex-direction: column;
    align-items: center;
}

.title:first-child {
    margin-top: 5vmin;
}

.title {
    margin: 0;
    margin-top: 2vmin;
    padding: 0;
    width: 100%;
    min-width: 68vmin;
    font-weight: bold;
    font-size: 3vmin;
}

hr {
    display:block;
    width: 100%;
    height: 1px;
    border: none;
    background-color: #9f9f9f;
}

.introduction-text {
    margin: 0;
    width: 100%;
    text-align: left;
}

.skill-container {
    margin: 0.5vmin 0;
    width: 100%;
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
</style>
