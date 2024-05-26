<template>
    <div class="animation-page">
        <div v-for="i in count" :key="i" class="box">
        
        </div>
        <div class="animated-element">
            <p>
                デジタルの彼方に眠る、魂の謎<br>
                サイバー・ソウルへの冒険が、始まる
            </p>
        </div>
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const animationDuration = ref(8000)

onMounted(() => {
  setTimeout(() => {
    window.location.href = '/top'
  }, animationDuration.value)
});

const count = ref(20);

onMounted(() => {
  const bg = document.getElementById('container')
  for (let i = 0; i < count.value; i++) {
    let glitchBox = document.createElement('div')
    glitchBox.className = 'box'
    bg.appendChild(glitchBox)
  }
})

const applyGlitchEffect = () => {
  const glitch = document.getElementsByClassName('box')
  for (let i = 0; i < glitch.length; i++) {
    glitch[i].style.left = Math.floor(Math.random() * 100) + 'vw'
    glitch[i].style.top = Math.floor(Math.random() * 100) + 'vh'
    glitch[i].style.width = Math.floor(Math.random() * 400) + 'px'
    glitch[i].style.height = Math.floor(Math.random() * 100) + 'px'
  }
}

setInterval(applyGlitchEffect, 200)
</script>