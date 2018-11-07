<template>
    <div class="prolist">
        <div class="title"><span>{{title}}</span><span @click="change">改变视图</span></div>
        <div class="inner">
            <div class="all"><span @click="all">所有</span><span @click="already">已公开</span></div>
            <div class="box">
               <dl :class="classes" v-for="val in prolist">
                    <dt><img :src="val.img" alt=""></dt>
                    <dd>
                        <span>{{val.english}}</span>
                        <span>{{val.chinese}}</span>
                    </dd>
                </dl>
               
            </div>
        </div>
         <div class="addnew" @click="newBuild">
                   添加
        </div>
    </div>
</template>

<script>
export default {
    name:"",
    data(){
        return {
            prolist:[],
            befor:[],
            classes:'each',
            title:'',
        }
    },
    mounted(){
        bus.$on('page',(res,ind)=>{
            this.prolist = res.data
            this.befor = res.data
            this.title=res['tit']+"("+res.data.length+")"
        })
    },
    methods:{
        change(){
            if(this.classes=="each"){
                this.classes='move'
            }else{
                this.classes="each"
            }
        },
        already(){
            const arr = [];
            this.prolist.map(function(item){
                if(item.flag){
                    arr.push(item)
                }
            })
            this.prolist=arr;
        },
        all(){
            this.prolist=this.befor
        },
         newBuild(){
            location.href='/#/new'
        }
    }
   
}
</script>

<style>

</style>
