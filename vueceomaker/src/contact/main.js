import Section1 from './section1'
import contactArea from './contact'
import EventBus from '../eventbus'

const contactMainPage = {
    props:['mode'],
    template:`<div class='contact'>
                    <Section1/>
                    <contactArea v-bind:mode='mode'/>
                </div>`,
                components:{
                    Section1,
                    contactArea
                },
                created(){
                    window.scrollTo(0, 0); 
                    EventBus.$emit('routerChange',true);
                }
}

export default contactMainPage;