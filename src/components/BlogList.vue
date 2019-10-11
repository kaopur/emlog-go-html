<template>
    <div class="blog-list">
        <div v-for="(item, index) in blogList" :key="index">
            <a :href="'javascript:;'">{{item.title}}</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "BlogList",
        data: function () {
            return {
                blogList: []
            }
        },
        mounted() {
            this.getList2()
        },
        methods: {
            getList: ()=>{
                let xhr = new XMLHttpRequest()
                xhr.open("GET", "http://localhost:8080/api/blog/rows", true)
                xhr.onreadystatechange = function () {
                    // eslint-disable-next-line no-empty
                    if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                        let json = JSON.parse(xhr.responseText)
                        // eslint-disable-next-line no-console
                        console.log(json.data)
                        if (json.error == 0) {
                            this.blogList = json.data
                        }
                    }
                }
                xhr.send()
            },
            getList2() {
                let xhr = new XMLHttpRequest()
                xhr.open("GET", "http://localhost:8080/api/blog/rows", true)
                xhr.onreadystatechange = function () {
                    // eslint-disable-next-line no-empty
                    if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                        let json = JSON.parse(xhr.responseText)
                        // eslint-disable-next-line no-console
                        // console.log(json.data)
                        if (json.error == 0) {
                            this.blogList = json.data
                        }
                    }
                }.bind(this)
                xhr.send()
            }
        }
    }
</script>

<style scoped>
    h3 {
        margin: 40px 0 0;
    }
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