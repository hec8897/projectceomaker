import Section1 from './section1'
import About from './about'
const AboutPage = {
    template:`<div class='about'>
        <Section1 />
        <About/>
    </div>`,
    components:{
        Section1,
        About
    }

}

export default AboutPage;