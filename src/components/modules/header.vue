<template>
    <header>
        <button type="button" class="zdo_drawer_button" @click="toggleMenu">
            <span class="zdo_drawer_bar zdo_drawer_bar1"></span>
            <span class="zdo_drawer_bar zdo_drawer_bar2"></span>
            <span class="zdo_drawer_bar zdo_drawer_bar3"></span>
        </button>
        <div class="menu" :class="{'is-active': open }">
            <ul class="menu_item">
                <li v-for="menu in menus" :key="menu.name">
                    <a v-bind:href="menu.url">{{ menu.name }}</a>
                </li>
            </ul>
        </div>
        <h1><a href="/top">Cyber Soul</a></h1>
    </header>
</template>

<script setup>
import { ref } from 'vue'

const open = ref(false)

const toggleMenu = () => {
    const button = document.querySelector('.zdo_drawer_button')
    button.classList.toggle('active')
    open.value = !open.value
}

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

</script>