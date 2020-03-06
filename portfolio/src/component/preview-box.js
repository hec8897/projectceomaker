import './preview-box.less'
import EventBus from '../eventbus'

const preViewBox = {
    props:['getdata','showQuery'],
    template:`
    <transition name="fade">
    <div class="image group-1" v-if="show">
        <div class="image-inner">
            <a href="images/img-01/main.jpg" data-lightbox="group-1">
                <img v-bind:src="datas.MainData.images" alt="" />
            </a>
        </div>
        <div class="image-info">
            <h5 class="title">{{datas.title}}</h5>
            <div class="desc">
                {{datas.MainData.subTitle}}
            </div>
            <a v-bind:href="datas.MainData.images" target="_blank">다운로드</a>
        </div>
    </div> </transition>
    `,
    data(){
        return{
            datas:'',
            show:true
        }
    },
    created(){
        this.show = this.showQuery
        if(this.showQuery == 'true'){
            this.show=true
        }
        else{
            this.show=false
        }
        EventBus.$on('navClick',(Data)=>{
            if(Data === 'all'){
                this.show = true
            }
            else if(this.datas.title == Data){
                this.show = true
            }
            else if(this.datas.title!=Data){
                this.show = false
            }
           
        })

        this.datas = this.getdata
        // setTimeout(() => {
        //     this.show = false
            
        // },1000)
    },
    mounted(){
        
    }
}

export default preViewBox