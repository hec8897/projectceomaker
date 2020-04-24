import Section1 from './section1'
import contactArea from './contact'
const contactMainPage = {
    props:['id'],
    template:`<div class='contact'>
                    <Section1/>
                    <contactArea />
                </div>`,
                components:{
                    Section1,
                    contactArea
                }
}

export default contactMainPage;