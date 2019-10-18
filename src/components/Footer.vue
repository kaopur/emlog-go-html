<template>
    <footer>
        <hr>
        <ul>
            <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">关于我</a></li>
            <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">备案号</a></li>
            <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">版权所有</a></li>
            <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">联系我</a></li>
            <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">友情链接</a></li>
        </ul>
    </footer>
</template>

<script>
    export default {
        name: "Footer"
    }
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        display: inline-block;
        margin: 0 10px;
    }
    a {
        color: #42b983;
    }
</style>