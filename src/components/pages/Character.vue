<template>
    <headerComp />
    <main>
        <h2>CHARACTER</h2>
        <div class="character_tabMenu">
    <ul class="tabs">
      <li v-for="(tab, index) in tabs" :key="index" @click="changeTab(index)" :class="{ active: activeTab === index }">
      </li>
    </ul>
    <div class="character_content">
      <div class="character_img">
        <img :src="tabs[activeTab].url" alt="">
      </div>
      <div class="character_txt">
        <h3>{{tabs[activeTab].name}}</h3>
        <div class="character_details">
          <dl>
            <dt>Age</dt>
            <dd>{{tabs[activeTab].age}}</dd>
            <dt>Info</dt>
            <dd>{{tabs[activeTab].info}}</dd>
            <dt>Cv.</dt>
            <dd>{{tabs[activeTab].cv}}</dd>
          </dl>
        </div>
        <table>

        </table>
      </div>
    </div>
  </div>
    </main>
    <footerComp />
</template>

<script setup>
import { ref } from 'vue'
import headerComp from "/src/components/modules/header.vue"
import footerComp from "/src/components/modules/footer.vue"

const tabs = ref([
  { 
    url: "/src/assets/yuna-DEvYHxE.png",
    name: "ユウナ (Yuna)",
    age: "16",
    info: "明るく勇敢な性格で、友情と冒険を大切にする。デジタル世界での冒険が彼女の情熱であり、サイバー・ソウルの謎解きに全力を注ぐ。",
    cv:"Aoi"
  },
  {
    url: "/src/assets/ren-DHWVq85h.png",
    name: "レン (Ren)",
    age: "17",
    info: "ハッキングとテクノロジーに優れた天才であり、デジタル世界の奥深い部分に精通している。ユウナの親友であり、彼女のサポート役でもある。",
    cv:"Yuki"
  },
  {
    url: "/src/assets/kira-BSHaBKXI.png",
    name: "キラ (Kira)",
    age: "18",
    info: "戦闘のスペシャリストで、冷静沈着な性格を持つ。危険な状況でも常に冷静に対処し、仲間を守るために奮闘する。",
    cv:"Chiwa"
  },
  {
    url: "/src/assets/iori-Lu43yTAP.png",
    name: "イオリ (Iori)",
    age: "???",
    info: "デジタル世界の守護者であり、ユウナたちの指導者的存在。古代の知識と強力な力を持ち、彼らの冒険を導く。",
    cv:"Akira"
  },
  {
    url: "/src/assets/shadow-BAt9wrdc.png",
    name: "シャドウ (Shadow)",
    age: "???",
    info: " 謎めいた存在で、サイバー・ソウルと関連している。ユウナたちの冒険に影響を与えるが、その正体や目的は不明。",
    cv:"???"
  }
])

const activeTab = ref(0);

const changeTab = (index) => {
  activeTab.value = index;
}

</script>