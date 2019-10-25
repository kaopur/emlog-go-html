<template>
    <div>
        <el-row>
            <el-col :span="1">
                <el-image
                        :src="url"
                        :fit="fit"></el-image>
            </el-col>
            <el-col :span="23"><Navi></Navi></el-col>
        </el-row>
        <el-row>
            <el-col :span="18" :offset="1">
                <router-view name="default"></router-view>
            </el-col>
            <el-col :span="5">
                <Sidebar></Sidebar>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import Navi from "./Navi";
    import Sidebar from "./Sidebar";

    export default {
        name: "Index",
        components: {
            Navi,
            Sidebar
        },
        data() {
            return {
                url: "http://img3.duitang.com/uploads/item/201507/23/20150723115018_ma428.thumb.700_0.jpeg",
                fit: "fill"
            };
        },
        mounted() {

        },
        methods: {
        }
    }
</script>

<style scoped>

</style>