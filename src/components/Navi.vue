<template>
    <div class="navi">
        <ul class="navi">
            <li v-for="(item, index) in navi" :key="index">
                <a :href="'javascript:;'">{{item.naviname}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Navi",
        props: {
        },
        data: function () {
            return {
                navi: []
            }
        },
        methods: {
            testConsole() {
                // eslint-disable-next-line no-console
                console.log('testConsole')
            },
            getNavi() {
                let xhr = new XMLHttpRequest()
                xhr.open("GET", "http://localhost:8080/api/navi/rows", true)
                xhr.onreadystatechange = function () {
                    // eslint-disable-next-line no-empty
                    if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
                        let nav = JSON.parse(xhr.responseText)
                        // eslint-disable-next-line no-console
                        // console.log(nav.data)
                        if (nav.error == 0) {
                            this.navi = nav.data
                        }
                    }
                }.bind(this)
                xhr.send()
            },
            clickTest() {
                // eslint-disable-next-line no-console
                console.log(this.navi)
            }
        },
        mounted() {
            this.testConsole()
            this.getNavi()
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