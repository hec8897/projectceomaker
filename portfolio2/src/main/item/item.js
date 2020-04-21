import './item.view.scss'
const itemView = {
    template:`<div id='wrap1200'>
                <div class='item_info'>
                    <div class='item_img'>
                        <img v-bind:src='item.mainimg'>
                    </div>
                    <div class='item_desc'>
                        <h3>{{item.tit}}</h3>
                        <p>{{item.desc}}</p>
                        <div class='text_area'>
                            <h4>제작 상품 안내</h4>
                            <ul>
                                <li>- 홈페이지 개발</li>
                                <li>- 랜딩페이지 개발</li>
                                <li>- sns 디자인</li>
                                <li>- 상세페이지 디자인</li>
                                <li>- 도서출판</li>
                            </ul>
                            <h4>제작 과정 안내</h4>
                            <p>모든 제작은 제작의뢰 신청이 접수되면 담당자가 순차적으로 연락을 드리며, 상담완료 후 작업이 시작됩니다.</p>
                        </div>
                        <div class='btn_area'>
                            <div class='site btn'>사이트 방문</div>
                            <div class='make btn'>제작문의</div>
                        </div>
                    </div>
                </div>
            </div>`,
            data(){
                return{
                    item:{
                        idx:2,
                        standard:"lend",
                        tit:"랜딩페이지 샘플",
                        mainimg:"uploadimg/id1-main.jpg",
                        desc:"랜딩페이지 샘플",
                        sub:[
                            {
                                subidx:0,
                                subtitle:"보험친구들 서브1",
                                subdesc:"BM Company 홈페이지 서브1",
                                subImg:"uploadimg/id1-sub_1.jpg"
                            },
                            {
                                subidx:1,
                                subtitle:"보험친구들 서브2",
                                subdesc:"BM Company 홈페이지 서브2",
                                subImg:"uploadimg/id1-sub_2.jpg"
                            },
                            {
                                subidx:2,
                                subtitle:"보험친구들 서브3",
                                subdesc:"BM Company 홈페이지 서브3",
                                subImg:"uploadimg/id1-sub_3.jpg"
                            }
                        ]
                
                    }
                }
            }
}

export default itemView