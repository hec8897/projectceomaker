import MainSection1 from './section1'
import SectionCate from '../common/section-cate'
import WorksList from './works-list'
import EventBus from '../eventbus'

const MainPage = {
    template:`<div class='work'>
                <MainSection1/>
                <SectionCate cate='Works'/>
                <WorksList />
              </div>`,
    components:{
        MainSection1,
        SectionCate,
        WorksList
    },
    created(){
        EventBus.$emit('routerChange',true)
    },
    updated(){
        EventBus.$emit('routerChange',true)
    }

}

export default MainPage;