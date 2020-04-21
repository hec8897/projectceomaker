import './header.scss'
const Header = {
    template: `<header>
                    <div class='head'>
                        <div class='wrap'>
                            <h1><img src='image/logo_w.png'></h1>
                            <ul>
                                <li>WORKS</li>
                                <li>SERVICE
                                    <ol>
                                        <li>design</li>
                                        <li>marketing</li>
                                        <li>academy</li>
                                        <li>consulting</li>
                                    </ol>
                                </li>
                                <li>CONTACT</li>
                                <li>ABOUT</li>
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