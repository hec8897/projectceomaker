import './about.scss'
const About = {
     template:`<div class='about_main'>
                    <div class='section section1'>
                        <h2>개인과 기업의 브랜드를 만들어주는 기업</h2>
                        <p class='mt'>오랜 실무경험을 바탕으로 전문성을 확보한 디지털 전문기업 CEOMAKER는</p>
                        <p>전략적인 컨설팅을 통해 개인과 기업 모두 함께 발전하는 환경을 만들어 갑니다.</p>
                        <ul class='circle_gret'>
                            <li class='circle_gret1'>
                                <div>
                                    <img src='image/icon_about_1.png'>
                                    <h3>MARKETING</h3>
                                    <p>창의적인 확장</p>
                                </div>
                            </li>
                            <li class='circle_gret2'>
                                <div>
                                    <img src='image/icon_about_2.png'>
                                    <h3>CONSULTING</h3>
                                    <p>고객의 니즈 반영</p>
                                </div>
                            </li>
                            <li class='circle_gret3'>
                                <div>
                                    <img src='image/icon_about_3.png'>
                                    <h3>DESIGN</h3>
                                    <p>브랜드 메이킹</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div class='section section2'>
                        <h2>고객의 니즈에 최적화된 솔루션 제공</h2>
                        <p class='mt'>고객의 니즈에 맞춘 솔루션으로 브랜드의 비전과 가치를 높여 드립니다</p>
                        <ul class='sq_list'>
                            <li>
                                <h3>DESIGN</h3>
                                <p>PC 및 모바일 웹사이트 맞춤형 개발 기업의 브랜드 메이킹 디자인 광고 디자인</p>
                                <router-link tag='div' to='/contact/design' class='btn'>디자인 문의
                                    <div class='pluarotate'>
                                        <span></span>
                                        <span></span>
                                    </div>    
                                </router-link>
                            </li>
                            <li>
                                <h3>MARKETING</h3>
                                <p>마케팅 전략 기획 시장분석 및 트랜드 분석</p>
                                <router-link tag='div' to='/contact/marketing' class='btn'>마케팅 문의
                                    <div class='pluarotate'>
                                        <span></span>
                                        <span></span>
                                    </div>    
                                </router-link>
                            </li>
                            <li>
                                <h3>CONSULTING</h3>
                                <p>프로젝트 매니지먼트 설계, 분석, 서비스 기획</p>
                                <router-link tag='div' to='/contact/consulting' class='btn'>컨설팅 문의
                                    <div class='pluarotate'>
                                        <span></span>
                                        <span></span>
                                    </div>    
                                </router-link>
                            </li>
                            <li>
                                <h3>ACADEMY</h3>
                                <p>마케팅의 이해와 전략수립 과정 기업별 프로모션 전략 기업마케팅팀 구축 및 시스템 활용</p>
                                <router-link tag='div' to='/contact/academy' class='btn'>교육 문의
                                    <div class='pluarotate'>
                                        <span></span>
                                        <span></span>
                                    </div>    
                                </router-link>
                            </li>
                        </ul>
                    </div>
                    <div class='section section3'>
                        <div id='map'></div>
                    </div>


                </div>`
}
export default About;