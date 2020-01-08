
Vue.component('app-header', {
    template: `<header class="head_wrap"><div class="head_bi">
                     <router-link to="/" tag='h4'>
                     CEOMAKER ADMINISTRATOR
                     </router-link>
                </div>
                <div class="head_info" onclick='LoginProcess.DestorySessionData()'>
                    <span class="btn_out">로그아웃</span>
                </div></header>`
});

Vue.component('app-nav', {
    template: `<nav id="sidebar" class="sidebar">
                    <ul class="nav">
                        <router-link to="/info" tag='li' class='has-sub' class-active="has-sub on">
                            <b class="caret fr"></b>
                            <i class="material-icons ml20 mr10">group</i>
                            <h5>관리자 관리</h5>
                        </router-link>
                        <router-link to="/banner" tag='li' class='has-sub' class-active="has-sub on">
                            <b class="caret fr"></b>
                            <i class="material-icons ml20 mr10">view_compact</i>
                            <h5>메인 관리</h5>
                        </router-link>

                        <router-link to="/portfolio" tag='li' class='has-sub' class-active="has-sub on">
                            <b class="caret fr"></b>
                            <i class="material-icons ml20 mr10">dvr</i>
                            <h5>포트폴리오</h5>
                            </router-link>

                            <router-link to="/counsul" tag='li' class='has-sub' class-active="has-sub on">
                            <b class="caret fr"></b>
                            <i class="material-icons ml20 mr10">assignment_late</i>
                            <h5>견적문의</h5>
                            </router-link>
                    </li>
                </ul></nav>`
});

Vue.component('search-data', {
    props:['mode'],
    template: ` <div class="search_wrap">
    <div class="panel">
        <ul>
            <li><h5>등록일</h5></li>
            <li>
                <div class="daterange">
                    <label for="datepicker-default"><i class="material-icons md-18">date_range</i></label>
                    <input type="text" class="" name="start" id="datepicker-default" placeholder="날짜선택" />
                </div>
                ~
                <div class="daterange">
                    <label for="datepicker-autoClose"><i class="material-icons md-18">date_range</i></label>
                    <input type="text" class="" name="end" id="datepicker-autoClose" placeholder="날짜선택" />
                </div>
            </li>
            <li><h5>검색종류</h5></li>
            <li class="search_input">
                <div>
                    <select name="" id="" class="">
                        <option value="">검색종류</option>
                        <option value="">컨텐츠 제목</option>
                        <option value="">카테고리</option>
                    </select>
                </div>
                <div>
                    <input type="text" placeholder="검색">
                    <a href=""><i class="material-icons">search</i></a>
                </div>
                <div class='search_btn'>검색</div>
            </li>
        </ul>
    </div>
</div>`,
mounted(){
    this.dataPicker()
},
methods:{
    dataPicker:function(){
        handleDatepicker();
    }
}
});

const MainPage = {
    template: `<div class="con_wrap">
                <div class="table_wrap mt50">
                    <div class="tit_wrap">
                        <h4>상담문의 (최근7일)</h4>
                        <router-link to="/counsul" class='b_more'>더보기 +</router-link>
                    </div>
                    <table class="need">
                        <tr>
                            <th>no</th>
                            <th>신청회사</th>
                            <th>분류</th>
                            <th>신청자</th>
                            <th>전화번호</th>
                            <th>첨부파일</th>
                            <th>상세보기</th>
                            <th>등록일</th>
                        </tr>
                        <tbody id='tables'>
                            <tr v-for='list in lists'>
                                <td></td>
                                <td><a href=''>{{list.reqcompany}}</a></td>
                                <td>{{list.reqbordercate}}</td>
                                <td>{{list.reqname}}</td>
                                <td>{{list.reqphone}}</td>
                                <td v-if="list.reqfilerout === ''">파일없음</td>
                                <td v-else>{{list.reqfilerout}}</td>
                                <td><router-link v-bind:to="'/view/'+list.idx" class='more_view'>상세보기</router-link></td>
                                <td>{{list.time}}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>`,
    data:function(){
        return{
            loading:false,
            lists:null,
            post:null,
            error:null
        }
    },
    beforeCreate(){
        // fetchData(){
            const baseURI = 'api/cousel.data.php';
            axios.post(`${baseURI}`, {
                    mode: "Recently"
                })
                .then((result) => {
                    this.lists = result.data.result
                })
                .catch(err => console.log('Login: ', err));
        // }
    },
    methods:{
        fetchData(){
            const baseURI = 'api/cousel.data.php';
            axios.post(`${baseURI}`, {
                    mode: "Recently"
                })
                .then((result) => {
                    this.lists = result.data.result
                })
                .catch(err => console.log('Login: ', err));
        },
        ViewData:function(datas){
            // eventBus.$emit('propsId',datas)
            location.href = `main.html#/view/${datas}`
        }

    }

  
}
const CousulView = {
    props: ['id'],
    template: ` <div class="con_wrap">
                    <div class="info_wrap">
                        <h4 class="title">신청 문의</h4>
                        <div class="order">
                            <table>
                                <tr>
                                    <th>상담현황</th>
                                    <td></td>
                                </tr>
                                <tr>
                                    <th>분류</th>
                                    <td>
                                        {{post.reqbordercate}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>회사명/선청자명</th>
                                    <td>{{post.reqcompany}}/{{post.reqname}}</td>
                                </tr>
                                <tr>
                                    <th>연락처</th>
                                    <td>{{post.reqphone}}</td>
                                </tr>
                                <tr>
                                    <th>내용</th>
                                    <td>
                                        {{post.reqmemo}}
                                    </td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td>{{post.reqemail}}</td>
                                </tr>
                                <tr>
                                    <th>문의 유형</th>
                                    <td>{{post.reqinqr}}</td>
                                </tr>
                                <tr>
                                    <th>첨부파일</th>
                                    <td v-if="post.reqfilerout === ''">파일없음</td>
                                    <td v-else><a v-bind:href="'../upload/'+post.reqfilerout" download>{{post.reqfilerout}}<img src='images/downloading-file.png'/></a></td>
                                </tr>
                                <tr>
                                    <th>프로젝트 예산</th>
                                    <td class='dels'>{{post.reqpay}}</td>
                                </tr>

                            </table>
                        </div>
                    </div>
                    <div class="btn_wrap">
                        <a href="#modal-del" data-toggle="modal" class="b_red">삭제</a>
                        <a href="main.html#/" class="b_sgrey">목록</a>
                    </div>
                </div>`,
                data:function(){
                    return{
                        loading:false,
                        post:null,
                        file:null,
                        getId:null,
                        error:null
                    }
                },
                created () {
                    this.fetchData()
                },
                    methods:{
                    fetchData(){
                    const baseURI = 'api/cousel.data.php';
                    axios.post(`${baseURI}`, {
                        mode:'view',
                        idx: this.id
                    })
                    .then((result) => {
                        this.loading = true;
                        this.post = result.data.result[0];
                    })
                    .catch(err => console.log('Login: ', err));
                    },
              
            }



}
const AdminInfo = {
    template: `<div class="con_wrap">
    <div class="info_wrap">
        <h4 class="title">관리자 정보</h4>
        <div class="panel">
            <ul>
                <li><h5>아이디</h5></li>
                <li><input type="text" placeholder="아이디"></li>
                <li><h5>비밀번호</h5></li>
                <li><input type="password" placeholder="비밀번호"></li>
                <li><h5>연락처</h5></li>
                <li class="phone_input">
                    <div class="mr5">
                        <select name="" id="" class="">
                            <option value="">010</option>
                            <option value="">011</option>
                        </select>
                    </div>
                    <div>
                        - <input type="text"> - <input type="text">
                    </div>
                </li>
                <li><h5>비밀번호 확인</h5></li>
                <li><input type="password" placeholder="비밀번호 확인"></li>
            </ul>
        </div>
    </div>
    
    <!-- button area -->
    <div class="btn_wrap">
        <a href="#modal-alert" data-toggle="modal" class="b_blue">수정 완료</a>
        <a href="" class="b_sgrey">메인 화면</a>
    </div>
    <!-- END button area //-->
</div>`
}
const Mbanner = {
    template: ` <div class="con_wrap">
    <!-- main banner -->
    <div class="mban_wrap">
        <h4 class="title">메인이미지 관리</h4>

        <!-- main banner edit --> 
        <div class="mban_edit">
            <div class="edit_ban">
                <a href="#modal-alert" class="btn_del" data-toggle="modal">삭제</a>
                <a href="#modal-modify" class="btn_mody" data-toggle="modal">수정</a>
                <img src="images/banner_1.jpg" alt="main banner 1">
            </div>
            <div class="edit_ban">
                <a href="#modal-alert" class="btn_del" data-toggle="modal">삭제</a>
                <a href="#modal-modify" class="btn_mody" data-toggle="modal">수정</a>
                <img src="images/banner_2.jpg" alt="main banner 2">
            </div>
            <div class="mban_insert">
                <a href="#modal-add" data-toggle="modal">
                    <i class="material-icons md-48">image</i><p>이미지 등록</p>
                </a>
            </div>
        </div>
    </div>
</div>`
}


const portfolio = {
    template: `<div class="con_wrap">
    <search-data></search-data>
    <div class="table_wrap mt40">
        <div class="tit_wrap">
            <h4>포트폴리오</h4>
        </div>
        <table class="portfolio">
            <tr>
                <th>No</th>
                <th>컨텐츠 제목</th>
                <th>켄텐츠 부제</th>
                <th>프로젝트 요약</th>
                <th>고객</th>
                <th>기간</th>
            </tr>
            <router-link to="/portfolioview" tag='tr'>
                <td>1</td>
                <td>투게더인스</td>
                <td>국내 최고 금융 및 보험 전문가의 알찬 정보를 제공하는 투게더인스</td>
                <td>보험친구들 웹사이트 / 보험비교 및 보험 계산 시스템</td>
                <td>BM COMPANY</td>
                <td>4주</td>
            </router-link>
         
        </table>
        <div class="foot_btn">
            <a href="" class="b_add b_blue">등록</a>
        </div>
        <!-- page -->
        <div class="page">
            <a href="" class="none"><i class="material-icons vam">navigate_before</i></a>
            <a href="" class="on">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">7</a>
            <a href="">8</a>
            <a href="">9</a>
            <a href="">10</a>
            <a href=""><i class="material-icons vam">navigate_next</i></a>
        </div>
        <!-- END page -->
    </div>
    <!-- END list table //-->
</div>`
}
const PortFolioView = {
    template:`<div class="con_wrap">
    <div class="info_wrap">
        <h4 class="title">포트폴리오</h4>
        <div class="panel mody">
            <ul>
                <li><h5>작성자 ID</h5></li>
                <li>
                    <input type="text" placeholder="작성자 ID">
                </li>
                <li><h5>노출여부</h5></li>
                <li class="select_input">
                    <div>
                        <select name="" id="" class="">
                            <option value="">공개</option>
                            <option value="">비공개</option>
                        </select>
                    </div>
                </li>
                <li><h5>카태고리</h5></li>
                <li class="select_input">
                    <div>
                        <select name="" id="" class="">
                            <option value="">분류</option>
                            <option>디자인</option>
                            <option>홈페이지</option>
                            <option>교육</option>
                            <option>마케팅</option>
                            <option>컨설팅</option>
                        </select>
                    </div>
                </li>
                
                <li><h5>고객</h5></li>
                <li>
                    <input type="text" placeholder="회사명/개인사업자" class="mody_tit">
                </li>
                <li><h5>프로젝트명</h5></li>
                <li class="half">
                    <input type="text" placeholder="프로젝트명">
                </li>
                <li><h5>프로젝트 부제</h5></li>
                <li class="half">
                    <input type="text" placeholder="프로젝트 부제목">
                </li>
                
                <li><h5>프로젝트 요약</h5></li>
                <li>
                    <input type="text" placeholder="제목" class="mody_tit">
                </li>
                <li><h5>상세내용</h5></li>
                <li>
                    <textarea name="" id="" placeholder="상세내용" style='resize:none'></textarea>
                </li>
                <li><h5>메인 이미지 (W 1920)</h5></li>
                <li>
                    <input type="file" placeholder="제목" class="mody_tit">
                </li>

            </ul>
        </div>
    </div>
    <div class="btn_wrap">
        <a href="#modal-del" data-toggle="modal" class="b_red">삭제</a>
        <a href="#modal-alert" data-toggle="modal" class="b_blue">등록</a>
        <a href="" class="b_sgrey">목록</a>
    </div>
</div>`
}
const cousul = {
    template: `  <div class="con_wrap">
    <search-data></search-data>
    <!-- list table -->
    <div class="table_wrap mt40">
        <div class="tit_wrap">
            <h4>견적문의</h4>
        </div>
        <table class="need">
            <tr>
                <th>No</th>
                <th>제목</th>
                <th>분류</th>
                <th>이름</th>
                <th>전화번호</th>
                <th>등록일</th>
            </tr>
            <tr>
                <td>1234567</td>
                <td class="tal"><a href="">질문 있어요</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>9</td>
                <td class="tal"><a href="">아파트 30평 견적 문의 드립니다.</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            
            <tr>
                <td>6</td>
                <td class="tal"><a href="">용인시에 있는 단독주택 47평 견적의뢰 합니다.</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>5</td>
                <td class="tal"><a href="">아파트 30평 견적 문의 드립니다.</a></td>
                <td>상업공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>4</td>
                <td class="tal"><a href="">아파트 30평 견적 문의 드립니다.</a></td>
                <td>상업공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>3</td>
                <td class="tal"><a href="">아파트 30평 견적 문의 드립니다.</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>2</td>
                <td class="tal"><a href="">용인시에 있는 단독주택 47평 견적의뢰 합니다.</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>1</td>
                <td class="tal"><a href="">용인시에 있는 단독주택 47평 견적의뢰 합니다.</a></td>
                <td>상업공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
        </table>
        <!-- page -->
        <div class="page">
            <a href="" class="none"><i class="material-icons vam">navigate_before</i></a>
            <a href="" class="on">1</a>
            <a href="">2</a>
            <a href="">3</a>
            <a href="">4</a>
            <a href="">5</a>
            <a href="">6</a>
            <a href="">7</a>
            <a href="">8</a>
            <a href="">9</a>
            <a href="">10</a>
            <a href=""><i class="material-icons vam">navigate_next</i></a>
        </div>
    </div>
</div>`
}
const router = new VueRouter({
    routes: [
        {
            path: '/',
            component: MainPage,
            params:true,
        },
        {
            path: '/info',
            component: AdminInfo
        },
        {
            path: '/banner',
            component: Mbanner
        },
        {
            path: '/portfolio',
            component: portfolio,
        },
        {
            path:'/portfolioview',
            component:PortFolioView,
            children:[
                {path:''}
            ]
        },
        {
            path: '/counsul',
            component: cousul
        },
        {
            path: '/view/:id',
            component: CousulView,
            props: true,
            params:true
        }
    ]
})
var app = new Vue({
    router,
    data: {
        items: []
    }
}).$mount('#app')
