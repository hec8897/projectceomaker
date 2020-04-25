import './header.scss'
const Header = {
    template: `<header>
                    <div class='head'>
                        <div class='wrap'>
                            <router-link to = '/' tag='h1'><img src='image/logo_w.png'></router-link>
                            <ul>
                            <li>
                                <router-link to='/' tag='span'>SERVICE</router-link>
                                    <ol>
                                        <li>
                                            <router-link to='/design' tag='span'>design</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/marketing' tag='span'>marketing</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/academy' tag='span'>academy</router-link>
                                        </li>
                                        <li>
                                            <router-link to='/consulting' tag='span'>consulting</router-link>
                                        </li>
                                    </ol>
                                </li>
                                <li><router-link to='/works/전체' tag='span'>WORKS</router-link></li>
                               
                                <li><router-link to='/contact/normal' tag='span'>CONTACT</router-link></li>
                                <li><router-link to='/about/normal' tag='span'>ABOUT</router-link></li>
                            </ul>
                            <div class='ham_btn'>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </div>
               </header>`
}

export default Header;