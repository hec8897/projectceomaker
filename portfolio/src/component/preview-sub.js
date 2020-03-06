import './preview-box.less'
import EventBus from '../eventbus'

const previewSub = {
    props: ['getdata','showQuery','title'],

    template: `
    
    <div class="image group-1" v-if="show">
        <div class="image-inner">
            <a href="images/img-01/main.jpg" data-lightbox="group-1">
                <img v-bind:src="datas.images" alt="" />
            </a>
        </div>
        <div class="image-info">
            <h5 class="title">{{title}}</h5>
            <div class="desc">
                {{datas.subTitle}}
            </div>
            <a v-bind:href="datas.images" target="_blank">다운로드</a>
        </div>
    </div>`,
    data(){
        return{
            datas:'',
            show:true
        }
    },created(){
        this.datas = []
        this.datas = this.getdata
        EventBus.$on('navClick',(Data)=>{
            if(Data === 'all'){
                this.show = false
            }
            // else if(this.title == Data){
            //     this.show = true
            // }
            // else if(this.title!=Data){
            //     this.show = false
            // }
           
        })
    }
}

export default previewSub;