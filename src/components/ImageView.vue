<template>
    <div>
        <div @click="imageClickEvent()" class="fullscrean-image-view" :class="{fullscrean}">
            <div class="background"></div>
            <img draggable="false" :src="src[curruntImage]" alt="프로젝트 사진">
        </div>
        <div class="image-view">
            <img @click="imageClickEvent()" 
                :style="{
                    width, height
                }"
                draggable="false" 
                :src="src[curruntImage]" 
                :alt="alt"
            />
            <ImageViewController id="controller" :numberOfImages=src.length v-model="curruntImage" />
        </div>
    </div>
</template>

<script>
import ImageViewController from './ImageViewController.vue';

export default {
  name: 'ImageView',
  props: {
    src: Array,
    width: String,
    height: String,
    alt: String
  },
  components: {
    ImageViewController
  },
  methods: {
    imageClickEvent() {
        this.fullscrean = !this.fullscrean;
    }
  },
  data() {
    return {
        fullscrean: false,
        curruntImage: 0
    }
  }
}
</script>

<style scoped>
#controller {
    position: absolute;
    bottom: 0;
    margin: auto;
}

.fullscrean-image-view,
.image-view img {
    display: block;
    cursor: pointer;
}

.image-view {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 0px 2px 0px #5f5f5f;
    padding: 5px;
}

.image-view img {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    object-fit: cover;
}

.fullscrean-image-view {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;

    bottom: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    transform: translateY(-100vh);
    transition: 1s all;
    opacity: 0;
    z-index: 1;
}

.fullscrean-image-view .background {
    bottom: 0;
    left: 0;
    position: absolute;
    width: 100vw;
    height: 100vh;
    opacity: 0.8;
    background: black;
}

.fullscrean-image-view img {
    max-width: 100vw;
    max-height: 100vh;
    object-fit: contain;
    /* cursor:initial; */
    z-index: 2;
}

.fullscrean-image-view.fullscrean {
    transform: translateY(0);
    opacity: 1;
}
</style>
