<template>
    <footer>
        <div class="menuList">
            <ul>
                <li v-for="menu in menus" :key="menu.name">
                    <a v-bind:href="menu.url">{{ menu.name }}</a>
                </li>
            </ul>
        </div>
        <div class="snsList">
            <ul>
                <li v-for="sns in snsList" :key="sns.className">
                    <a v-bind:href="sns.url">
                        <i v-bind:class="sns.className"></i>
                    </a>
                </li>
            </ul>
        </div>
        <small>&copy; 2024 雪月真夜・ChatGPT / CyberSoul捜索隊</small>
    </footer>
</template>

<script setup>
import { ref } from 'vue'

const menus = ref([
        {
            url: "/news",
            name: "NEWS"
        },
        {
            url: "/story",
            name: "STORY"
        },
        {
            url: "/character",
            name: "CHARACTER"
        },
        {
            url: "/on_air",
            name: "ON AIR"
        },
        {
            url: "/staff_cast",
            name: "STAFF&CAST"
        },
        {
            url: "/bd_dvd",
            name: "BD&DVD"
        },
        {
            url: "/music",
            name: "MUSIC"
        },
        {
            url: "/special",
            name: "SPECIAL"
        },
    ])

const snsList = ref([
        {
            url: "https://www.youtube.com/",
            className: "fa-brands fa-youtube"
        },
        {
            url: "https://twitter.com/",
            className: "fa-brands fa-x-twitter"
        },
        {
            url: "https://www.instagram.com/",
            className: "fa-brands fa-instagram"
        }
])

</script>