<template>
    <div>
        <el-table
                :data="blogList"
                stripe
                style="width: 100%">
            <el-table-column
                    prop="title">
            </el-table-column>
            <el-table-column
                    prop="date_fmt">
            </el-table-column>
        </el-table>

        <div class="blog-list">
            <div v-for="(item, index) in blogList" :key="index">
                <router-link to="blog">{{item.title}}</router-link>
                <!--            <a href="http://www.baidu.com">{{item.title}}</a>-->
            </div>
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
            this.getList()
        },
        methods: {
            getList(){
                this.$http.get("http://localhost:8080/api/blog/rows").then((data) => {
                    if (data.data.error == 0) {
                        this.blogList = data.data.data
                    }
                })
            }
        }
    }
</script>

<style scoped>
</style>