import './section2.scss'
import desingSection from './desing'
import consultSection from './consulting'
import academySection from './academy';
import marketingSection from './marketing'

const Section2 = {
    props:['cate'],
    template:`<section class='section2'>
                <desingSection v-if="cate=='design' || cate==undefined"/>
                <consultSection v-else-if="cate=='consulting'"/>
                <academySection v-else-if="cate=='academy'"/>
                <marketingSection v-else-if="cate=='marketing'"/>
            </section>`,
    components:{
        desingSection,
        consultSection,
        academySection,
        marketingSection
    }
}

export default Section2;