String.prototype.replaceAll = function (org, dest) {
    return this.split(org).join(dest);
}

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
                </ul></nav>`,
});

const MainPage = {
    props:['items'],

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
                            <th>파일</th>
                            <th>등록일</th>
                        </tr>
                        <tbody id='tables'>
                        </tbody>
                    </table>
                </div>
            </div>`,

beforeCreate() {
    const baseURI = 'api/cousel.data.php';
    axios.post(`${baseURI}`, {})
        .then((result) => {
            const Table = document.getElementById('tables')
            let TableData = [];

            router.options.routes[0].props.items = result.data.result
            this.props = result.data.result;

            let Data = this.props;
            
            for(let i = 0; i < Data.length; i++){
                TableData.push(
                    `<tr>
                        <td>${i+1}</td>
                        <td>${Data[i].reqcompany}</td>
                        <td>${Data[i].reqmemo}</td>
                        <td>${Data[i].reqname}</td>
                        <td>${Data[i].reqphone}</td>
                        <td>${Data[i].reqfilerout}</td>
                        <td>${Data[i].time}</td>
                    </tr>`
                    )
                }
                TableHtml = TableData.toString().replaceAll(",","");
                Table.innerHTML = TableHtml;
        })
        .catch(err => console.log('Login: ', err));
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
        <!-- END main banner edit -->
    </div>
    <!-- END main banner //-->
</div>`
}
const portfolio = {
    template: `   <div class="con_wrap">
    <!-- search -->
    <div class="search_wrap">
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
                            <option value="">검색종류</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" placeholder="검색">
                        <a href=""><i class="material-icons">search</i></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
    <!-- list table -->
    <div class="table_wrap mt40">
        <div class="tit_wrap">
            <h4>포트폴리오</h4>
        </div>
        <table class="portfolio">
            <tr>
                <th>No</th>
                <th>제목</th>
                <th>시공형태</th>
                <th>시공주소</th>
                <th>시공면적</th>
                <th>천정</th>
                <th>바닥</th>
                <th>벽체</th>
                <th>노출</th>
            </tr>
            <tr>
                <td>123456</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr class="tgrey">
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>비공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr class="tgrey">
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>비공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
            <tr>
                <td>12345</td>
                <td class="tal"><a href="">아이들이 행복한 집, 개포LG자이 APT</a></td>
                <td>주거공간</td>
                <td>구로 디지털로 1234 개포LG APT</td>
                <td>220m<sup>3</sup></td>
                <td>적삼목</td>
                <td>대리석</td>
                <td>적삼목</td>
                <td>공개</td>
            </tr>
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
const cousul = {
    template: `  <div class="con_wrap">
    <!-- search -->
    <div class="search_wrap">
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
                            <option value="">검색종류</option>
                        </select>
                    </div>
                    <div>
                        <input type="text" placeholder="검색">
                        <a href=""><i class="material-icons">search</i></a>
                    </div>
                </li>
            </ul>
        </div>
    </div>
    
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
    routes:[
        {
            path: '/',
            component: MainPage,
            props:{
                items:[]
            },

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
            component: portfolio
        },
        {
            path: '/counsul',
            component: cousul
        }
    ]
})


var app = new Vue({
    router,
    data:{
        items:[]
    }
}).$mount('#app')

