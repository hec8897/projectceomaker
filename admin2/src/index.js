
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

                        <router-link to="/portfolio/0" tag='li' class='has-sub' class-active="has-sub on">
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

Vue.component('list-numbering',{
    props:['listData','index','pageClass'],
    template: ` <div class="page">
                    <span v-if="index >= 10">
                    <a class v-on:click='PrevListIndex'>
                        <i class="material-icons vam">navigate_before</i>
                        </a>
                    </span>

                    <span v-for="i in ListNumberLength" v-if ="i <= limit  && i >= start">
                        <router-link class v-bind:to="pageClass+(i-1)" >{{i}}</router-link>
                    </span>

                    <span v-if="ListNumberLength >= limit">
                        <a class v-on:click='NextListIndex'>
                            <i class="material-icons vam">navigate_next</i>
                        </a>
                    </span>
               </div>`,
               data(){
                   return{
                        ListNumberLength:null,
                        start:0,
                        limit:10,
                        NextNumber:null,
                        prevNumber:null
                   }
                   //start, limit 값 올려서 자동배여해야함ㅎㅎ
                   //라스트페이지 넥스트버튼 삭제
               },
                created(){
                    this.ListRenderData();
                    const ListLength = this.listData.length;
                    // this.limit = Math.ceil(Number(this.index)/10)*10 
                    // this.start = (Math.ceil(Number(this.index)/10)*10)-9
                    if(ListLength < 10){
                        this.start = 0
                        this.limit = 10
                    }
                    else{
                        const Indexs = Number(this.index)+1
                        this.limit = Math.ceil(Indexs/10)*10
                        this.start = this.limit-9
                    }

      
               },
               methods:{
                   ListRenderData(){
                       // 1보다 작을땐 출력안함
                       var DataLength = this.listData.length/10
                       const ListNumberLength = Math.round(DataLength) < 1 ?0:Math.round(DataLength)
                       this.ListNumberLength = ListNumberLength;
                   },
                   NextListIndex(){
                        this.NextNumber = this.limit;
                        this.start = this.limit+1
                        this.limit = this.NextNumber+10
                        router.push(`${this.NextNumber}`)
                   },
                   PrevListIndex(){
                        this.prevNumber = this.start-2;
                        this.limit = this.start-1;
                        this.start = this.limit-9;
                        router.push(`${this.prevNumber}`)   

                   }
                
               }
    
})
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
                            <tr v-for='(list, index) in lists'>
                                <td>{{index+1}}</td>
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
    props:['index'],
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
            <router-link v-bind:to="NextpageNode+list.idx" tag='tr' v-for='(list, no) in lists' v-if="no <= limit && no >= start">
                <td>{{no+1}}</td>
                <td>{{list.title}}</td>
                <td>{{list.subTit}}</td>
                <td>{{list.projectDesc}}</td>
                <td>{{list.customer}}</td>
                <td>{{list.Period}}</td>
            </router-link>
         
        </table>
        <div class="foot_btn">
            <router-link v-bind:to="NextpageNode+'new'" class="b_add b_blue">등록</router-link>
        </div>
        <list-numbering v-bind:listData="lists" v-bind:pageClass="thispageNode" v-bind:index="index"></list-numbering>
    </div>
</div>`,
created(){
    if(this.index == 0){
        this.start = Number(this.index)*10,
        this.limit = Number(this.index)+9
    }
    else{
        this.start = Number(this.index)*10,
        this.limit = Number(this.index)*10+9
    }

    const baseURI = 'api/work.data.php';
    axios.post(`${baseURI}`, {
        mode:'list',
    })
    .then((result) => {
        if(result.data.result.length > 0){
            this.lists = result.data.result;
        }
    })
    .catch(err => console.log('Login: ', err));
},
updated(){
    this.start = Number(this.index)*10,
    this.limit = Number(this.index)*10+9
},
data:function(){
    return{
        NextpageNode:"/portfolioview/",
        thispageNode:"/portfolio/",
        lists:[
            {
                idx:0,
                writer:'김다운',
                title:"임시데이터",
                subTit:"보험친구들 테스트",
                projectDesc:"관리자페이지 테스트 글",
                customer:"BM",
                Period:"4주",
                mainRoute:"",
                imgRoute:"",
                activation:1
            },
           
            {
                idx:1,
                writer:'김다운',
                title:"보험친구들",
                subTit:"보험친구들 테스트",
                projectDesc:"관리자페이지 테스트 글",
                customer:"BM",
                Period:"4주",
                mainRoute:"",
                imgRoute:"",
                activation:1
            },
            {
                idx:2,
                writer:'김다운',
                title:"투게더인스",
                subTit:"보험친구들 테스트",
                projectDesc:"관리자페이지 테스트 글",
                customer:"BM",
                Period:"4주",
                mainRoute:"",
                imgRoute:"",
                activation:1
            },
            {
                idx:3,
                writer:'김다운',
                title:"보험친구들",
                subTit:"보험친구들 테스트",
                projectDesc:"관리자페이지 테스트 글",
                customer:"BM",
                Period:"4주",
                mainRoute:"",
                imgRoute:"",
                activation:1
            },
            {
                idx:4,
                writer:'김다운',
                title:"투게더인스",
                subTit:"보험친구들 테스트",
                projectDesc:"관리자페이지 테스트 글",
                customer:"BM",
                Period:"4주",
                mainRoute:"",
                imgRoute:"",
                activation:1
            },
            {
                idx:5,
                writer:'김다운',
                title:"보험친구들",
                subTit:"보험친구들 테스트",
                projectDesc:"관리자페이지 테스트 글",
                customer:"BM",
                Period:"4주",
                mainRoute:"",
                imgRoute:"",
                activation:1
            },

            {
                idx:6,
                writer:'김다운',
                title:"투게더인스",
                subTit:"보험친구들 테스트",
                projectDesc:"관리자페이지 테스트 글",
                customer:"BM",
                Period:"4주",
                mainRoute:"",
                imgRoute:"",
                activation:1
            },
         
    
          
            
        ],
        loading:null,
        start:null,
        limit:null
        }
},
methods:{
    indexUpdate(){
        console.log(this.index)
    }

}

}
const PortFolioView = {
    props:['mode'],
    template:`<div class="con_wrap">
    <div class="info_wrap">
        <h4 class="title">포트폴리오</h4>
        <div class="panel mody">
            <ul>
                <li><h5>작성자 ID</h5></li>
                <li>
                    <input  v-if="mode ==='new'"  type="text" placeholder="작성자 이름" value=''>
                    <input v-else type="text" placeholder="작성자 ID"  v-bind:value='mode'>
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
                    <input v-if="mode ==='new'" type="text" placeholder="회사명/개인사업자" class="mody_tit">
                    <input v-else type="text" placeholder="회사명/개인사업자" v-bind:value='Data[0].customer'>
                </li>
                <li><h5>프로젝트명</h5></li>
                <li>
                    <input v-if="mode ==='new'" type="text" placeholder="프로젝트명">
                    <input v-else type="text" placeholder="프로젝트명" v-bind:value='Data[0].title'>
                </li>
                <li><h5>프로젝트 부제목</h5></li>
                <li>
                    <input v-if="mode ==='new'" type="text" placeholder="프로젝트 부제목">
                    <input v-else type="text" placeholder="프로젝트 부제목" v-bind:value='Data[0].subTit'>
                </li>
                
                <li><h5>프로젝트 요약</h5></li>
                <li>
                    <input v-if="mode === 'new'" type="text" placeholder="제목" class="mody_tit">
                    <input v-else type="text" placeholder="제목" class="mody_tit" v-bind:value='Data[0].projectDesc'>
                </li>
                <li><h5>상세내용</h5></li>
                <li>
                    <textarea v-if="mode === 'new'" name="" id="" placeholder="상세내용" style='resize:none'></textarea>
                    <textarea v-else placeholder="상세내용" style='resize:none'>{{Data[0].Desc}}</textarea>

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
        <router-link to="/portfolio/0" class="b_sgrey">목록</router-link>
    </div>
</div>`,

//여기부터해야함
//여기부터해야함
//여기부터해야함
//여기부터해야함
//여기부터해야함
//여기부터해야함

data:function(){
    return{
        Data:[
            {   
                idx:0,
                writer:'김다운',
                title:"임시데이터",
                subTit:"보험친구들 테스트",
                projectDesc:"관리자페이지 테스트 글",
                Desc:"관리자페이지 테스트 글 설명충",
                customer:"BM",
                Period:"4주",
                mainRoute:"",
                imgRoute:"",
                activation:1
            }
        ]
    }
}
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
