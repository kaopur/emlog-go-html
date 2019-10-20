<template>
    <div>
        <el-row>
<!--            <el-col :span="1">-->
<!--                <el-image-->
<!--                        style="width: 100px; height: 100px"-->
<!--                        :src="url"-->
<!--                        :fit="fit"></el-image>-->
<!--            </el-col>-->
            <el-col :span="24"><Navi></Navi></el-col>
        </el-row>
        <el-row>
            <el-col :span="23" :offset="1">
                <router-view name="default"></router-view>
            </el-col>
        </el-row>

    </div>
</template>

<script>
    import Navi from "./Navi";

    export default {
        name: "Index",
        components: {
            Navi
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