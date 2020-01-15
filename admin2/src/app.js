
Vue.component('modal-open-delete',{
    props:['mode','dataFn'],
    template:`<div class="pop-window fade" id="modal-del">
    <div class="alert">
        <div class="alert_con">
            <i class="material-icons red">error_outline</i>
            <p>정말로 삭제 하시겠습니까?{{mode}}</p>
        </div>
        <div class="modal_foot">
            <a href="javascript:;" data-dismiss="modal" class="b_red">확인</a>
            <a href="javascript:;" data-dismiss="modal" class="b_sgrey">취소</a>
        </div>
    </div>
</div>`
})

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
            <list-numbering></list-numbering>
        <!-- page -->

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
            path: '/portfolio/:index',
            component: portfolio,
            props:true
        },
        {
            path:'/portfolioview/:mode',
            component:PortFolioView,
            props:true
          
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
