import './header.scss'
import NavTag from './nav.js'
import EventBus from '../eventbus'
const Header = {
    template: `<header>
                    <div class='head'>
                        <NavTag v-bind:show='NavShow'/>
                        <div class='wrap'>
                            <router-link to = '/' tag='h1'><img v-bind:src='logo' class='logo'></router-link>
                            <ul class='gnb'>
                            <li>
                                <router-link to='/service/design' tag='span'>SERVICE</router-link>
                                    <ol>
                                        <li>
                                            <router-link to='/service/design' tag='span'>design</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/service/marketing' tag='span'>marketing</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/service/academy' tag='span'>academy</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/service/consulting' tag='span'>consulting</router-link>
                                        </li>
                                    </ol>
                                </li>
                                <li>
                                    <router-link to='/works/전체' tag='span'>WORKS</router-link>
                                </li>
                                <li>
                                    <router-link to='/contact/normal' tag='span'>CONTACT</router-link>
                                </li>
                                <li>
                                    <router-link to='/about/normal' tag='span'>ABOUT</router-link>
                                </li>
                            </ul>
                            <div class='ham_btn' v-bind:class='NavShow' id='ham_btn' @click='NavOpen'>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
               </header>`,
               data(){
                   return{
                       NavShow:'close',
                       logo:'image/logo_w.png'
                    //    logo_color:'image/logo_color.png'

                   }
               },
               created(){
                    EventBus.$on('routerChange',()=>{
                        this.NavClose()
                    })

               },
               components:{
                    NavTag
               },
               methods: {
                   NavOpen() {
                       this.NavShow = this.NavShow == 'open'?
                       this.NavShow = 'close':
                       this.NavShow = 'open' ; // show nav

                       this.logo =  this.NavShow == 'close'?
                       this.logo = 'image/logo_w.png':
                       this.logo = 'image/logo_color.png'; //change logo
                   },
                   NavClose(){
                    this.NavShow = 'close'; // show nav
                    this.logo = 'image/logo_w.png'; //change logo
                   }
               },
}

export default Header;