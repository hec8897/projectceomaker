import Section1 from './section1';
import Section2 from './section2/section2';
import SectionCate from '../common/section-cate'
import ClientsSection from '../common/client';
import EventBus from '../eventbus'

const MainPage = {
    props:['cate'],
    template:`<div class='main'>
                <Section1 />
                <SectionCate cate='normal'/>
                    <Section2 v-bind:cate='cate'/>
                    <ClientsSection v-bind:cate='cate'/>
                </div>`,
    components:{
        Section1,
        Section2,
        SectionCate,
        ClientsSection
    },
    created(){
        EventBus.$emit('routerChange',true)
    },
    updated(){
        EventBus.$emit('routerChange',true)
    },
}

export default MainPage;