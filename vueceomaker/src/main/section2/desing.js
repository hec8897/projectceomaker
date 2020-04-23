const desingSection = {
    template: `<div class='design_section' v-if='show'> 
                <div class='section section-1'>
                    <div class='sub_1 sub'>
                        <div class='service_tit'>
                            <div class='tit_bg'>01</div>
                            <div>
                                <p>웹사이트 디자인</p>
                                <h2>WEBSITE <span class="">DESIGN</span></h2>
                            </div>
                        </div>
                        <div class='sec_tit'>
                            <h2>성공적인 비즈니스를 위한</h2>
                            <h2><span>웹사이트 구축</span></h2>
                            <p class='mt'>고객의 니즈를 반영하여 동일한 UI/UX 환경에서</p>
                            <p>차별화된 브랜드 구축이 가능합니다</p>
                            <p>기획 설계부터 디자인, 개발, 마케팅까지</p>
                            <p><b>CEOMAKER</b>가 함께합니다.</p>
                        </div>
                        <div class='sec_img'>
                            <img src='image/service_img_1.gif' class='sec1'>
                        </div>
                    </div>
                </div>
                <div class='section section-2'>
                    <div class='sub_1 sub'>
                    <div class='service_tit'>
                            <div class='tit_bg'>02</div>
                            <div>
                                <p>브랜드 디자인</p>
                                <h2>BRAND</span> <span class="">DESIGN</span></h2>
                            </div>
                        </div>
                        <div class='sec_tit'>
                            <h2>브랜드 디자인은</h2>
                            <h2><span>사업 차별화의 시작입니다.</span></span></h2>
                            <p class='mt'>라벨, 봉투, 명함부터 제품 홍보용 리플렛, 브로슈어등 각종 편집 디자인까지</p>
                            <p>기술력과 디자인으로 브랜드를 만들어 드립니다.</p>
                        </div>
                    <div class='sec_img'>
                            <img src='image/service_img_2.png' class='sec2'>
                        </div>
                    </div>
                </div>
                <div class='section section-3'>
                    <div class='sub_1 sub'>
                    <div class='service_tit'>
                            <div class='tit_bg'>03</div>
                            <div>
                                <p>SNS 디자인</p>
                                <h2>SNS</span> <span class="">DESIGN</span></h2>
                            </div>
                        </div>
                        <div class='sec_tit'>
                            <h2>다양한 기능과</h2>
                            <h2>강력한 확산력이있는</h2>
                            <h2><span>SNS 디자인은 필수입니다.</span></h2>
                            <p class='mt'>개인 미디어에서 전문적인 홍보 수단으로 발전되고 활용되는 SNS!</p>
                            <p>차별화된 디자인으로 성공적인 SNS운영을 도와드립니다.</p>
                        </div>
                    <div class='sec_img'>
                            <img src='image/service_img_3.png' class='sec3'>
                        </div>
                    </div>
                </div>
                <div class='section section-4'>
                    <div class='sub_1 sub'>
                    <div class='service_tit'>
                            <div class='tit_bg'>04</div>
                            <div>
                                <p>광고 디자인</p>
                                <h2>ADVERTISE</span> <span class="">DESIGN</span></h2>
                            </div>
                        </div>
                        <div class='sec_tit'>
                            <h2>브랜드 광고는</h2>
                            <h2><span>이제 전문가와 함께하세요.</span></h2>
                            <p class='mt'>제품 홍보용 랜딩페이지, 쇼핑몰 제품 상세페이지, 포털사이트 배너광고 등</p>
                            <p>최상의 홍보효과를 낼 수 있는 디자인을 제공해 드립니다.</p>
                        </div>
                    <div class='sec_img'>
                            <img src='image/service_img_4.png' class='sec4'>
                        </div>
                    </div>
                </div>
              </div>`,
              data(){
                  return{
                      show:false
                  }
              },
              mounted(){
                  setTimeout(() => {
                    this.show = true
                  }, 100);

              }
}

export default desingSection;