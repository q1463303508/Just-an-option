<template>
    <div>
        <div class="namelist">
            <div class="addpro" @click="newBuild">
                项目
            </div>
            <ul class="type">
                <li v-for="(val,ind) in namelist" @click='tab(ind,val)' :class="{active:ind==act}">
                   {{val.tit}}({{val.data.length}})
                </li>
            </ul>
        </div>
        <prolist></prolist>
    </div>
</template>

<script>
import prolist from "./prolist.vue"
import newbuild from "./newbuild.vue"
import axios from "axios";
export default {
    name:"",
    data(){
        return{
            act:0,
            namelist:[],
            sum:0
        }
    },
    mounted(){
        this._getList()
        this.more()
    },
    methods:{
        _getList(){
            axios.get('/product').then(res=>{
                this.namelist = res.data
            })
        },
        tab(ind,data){
            this.act=ind;
            bus.$emit('page',data,ind)
        },
        more(){
            this.act=0;
            console.log(this.namelist)
        },
        newBuild(){
            location.href='/#/new'
        }
    },
    components:{
        prolist,
    }
}
</script>

<style>
@import url('../../css/index.css');
</style>
