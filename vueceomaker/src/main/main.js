import MainSection1 from './section1'
import SectionCate from '../common/section-cate'
const MainPage = {
    template:`<div class='main'>
                <MainSection1/>
                <SectionCate cate='Works'/>
              </div>`,
    components:{
        MainSection1,
        SectionCate
    }

}

export default MainPage;