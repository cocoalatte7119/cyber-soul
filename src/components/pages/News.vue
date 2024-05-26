<template>
    <headerComp />
    <main>
        <h2>NEWS</h2>
        <ul class="newsList">
                <li v-for="news in newsList" :key="news.id">
                    <a v-bind:href="`/news/?param=${news.id}`">
                        <h3>{{ news.heading }}</h3>
                        <span>{{ news.date }}</span>
                    </a>
                </li>
        </ul>
    </main>
    <footerComp />
</template>

<script setup>
import { ref } from 'vue'
import headerComp from "/src/components/modules/header.vue"
import footerComp from "/src/components/modules/footer.vue"

const newsList = ref([
    {
        id: 1,
        heading: "キービジュアル　公開！",
        date: "20XX/XX/XX"
    },
    {
        id: 2,
        heading: "本予告映像公開！",
        date: "20XX/XX/XX"
    },
    {
        id: 3,
        heading: "20XX年XX月よりXXテレビほかにて放送開始！",
        date: "20XX/XX/XX"
    },
    {
        id: 4,
        heading: "第2弾PV公開！",
        date: "20XX/XX/XX"
    },
    {
        id: 5,
        heading: "ユウナ&レン　新ビジュアル公開！",
        date: "20XX/XX/XX"
    },
    {
        id: 6,
        heading: "ユウナ役：Aoi / レン役：Yukiに決定！",
        date: "20XX/XX/XX"
    },
    {
        id: 7,
        heading: "コンセプトビジュアル公開！",
        date: "20XX/XX/XX"
    },
    {
        id: 8,
        heading: "第1弾PV公開！",
        date: "20XX/XX/XX"
    },
    {
        id: 9,
        heading: "20XX年XX月よりXXテレビほかにて放送！",
        date: "20XX/XX/XX"
    }
])
</script>