import Section1 from './section1'
import About from './about'
import EventBus from '../eventbus'

const AboutPage = {
    template:`<div class='about'>
        <Section1 />
        <About/>
    </div>`,
    components:{
        Section1,
        About
    },
    created(){
        window.scrollTo(0, 0); 
        EventBus.$emit('routerChange',true)
    }

}

export default AboutPage;