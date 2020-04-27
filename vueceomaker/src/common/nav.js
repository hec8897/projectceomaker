import './nav.scss';

const Nav = {
    props:['show'],
    template:`<div class='nav_mo' v-bind:class="show">
                    <ul class='lnb'>
                        <router-link to='/service/' tag='li'>SERVICE</router-link>
                        <ol>
                            <router-link to='/service/design' tag='li'>Design</router-link>
                            <router-link to='/service/marketing' tag='li'>Marketing</router-link>
                            <router-link to='/service/academy' tag='li'>Academy</router-link>
                            <router-link to='/service/consulting' tag='li'>Consulting</router-link>
                        </ol>
                        <router-link to='/works/전체' tag='li'>WORKS</router-link>
                        <ol>
                            <li>홈페이지</li></li>
                            <li>랜딩페이지</li>
                            <li>도서</li>
                            <li>상세페이지</li>
                            <li>마케팅</li>
                        </ol>
                        <router-link to='/contact/normal' tag='li'>CONTACT</router-link>
                        <router-link to='/about/normal' tag='li'>ABOUT</router-link>
                    </ul>
              </div>`
             
}
export default Nav;