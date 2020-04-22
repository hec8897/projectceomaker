import Section1 from './section1';
import Section2 from './section2/section2';
import SectionCate from '../common/section-cate'
import ClientsSection from './clients';
import './transition.scss'

const MainPage = {
    props:['cate'],
    template:`<div class='main'>
                <Section1 />
                <SectionCate cate='normal'/>
                <transition name='fade'>
                    <Section2 v-bind:cate='cate'/>
                </transition>
                <ClientsSection />
                </div>`,
    components:{
        Section1,
        Section2,
        SectionCate,
        ClientsSection
    }
}

export default MainPage;