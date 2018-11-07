<template>
    <div class="newbuild">
        thisis bui
        <button @click="back">取消</button>
        <button @click="back">确定</button>
    </div>
</template>

<script>
export default {
    name:'',
    methods:{
         back(){
            location.href='/#/Main'
        }
    }
}
</script>

<style>

</style>
