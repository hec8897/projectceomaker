
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

Vue.component('modal-open-update',{
    props:['mode','dataFn'],
    template:`<div class="pop-window fade" id="modal-alert">
    <div class="alert">
        <div class="alert_con">
            <i class="material-icons tblue">error_outline</i>
            <p>등록하시겠습니까?{{mode}}</p>

        </div>
        <div class="modal_foot">
            <a href="javascript:;" v-on:click='dataFn' data-dismiss="modal" class="b_red">확인</a>
            <a href="javascript:;" data-dismiss="modal" class="b_sgrey">취소</a>
        </div>
    </div>
</div>`
})

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
            }
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
    template:`   
    <div class="con_wrap">
    <div class="pop-window fade" id="modal-alert">
    <div class="alert">
        <div class="alert_con">
            <i class="material-icons tblue">error_outline</i>
            <p v-if="mode == 'new'">등록하시겠습니까?</p>
            <p v-else>수정하시겠습니까?</p>

                </div>
                <div class="modal_foot">
                    <a v-if="mode == 'new'" href="javascript:"  v-on:click="PostData('new')" data-dismiss="modal" class="b_red">새로등록</a>
                    <a v-else href="javascript:" v-on:click="PostData('update')" data-dismiss="modal" class="b_red">수정</a>
                    <a href="javascript:" data-dismiss="modal" class="b_sgrey">취소</a>
                </div>
            </div>
        </div>
        <modal-open-delete mode='PortFolioView' dataFn=''></modal-open-delete>

    <div class="info_wrap">
        <h4 class="title">포트폴리오</h4>
        <div class="panel mody">
            <ul>
                <li><h5>작성자</h5></li>
                <li>
                    <input id='reqwriter' v-if="mode ==='new'" type="text" placeholder="작성자 이름" value=''>
                    <input id='reqwriter' v-else type="text" placeholder="작성자 ID"  v-bind:value='mode'>
                </li>
                <li><h5>미리보기 노출여부</h5></li>
                <li class="select_input">
                    <div>
                        <select id="activation" v-if="mode ==='new'">
                        <option value='0'>비공개</option>
                        <option value='1' disabled>공개</option>
                        </select>
                        <select id="activation" v-else>
                            <option v-if="Data[0].activation === '1'" selected value='1'>공개</option>
                            <option v-else value='1'>공개</option>
                            <option v-if="Data[0].activation === '0'" selected value='0'>비공개</option>
                            <option v-else value='0'>비공개</option>
                        </select>
                    </div>
                </li>
                <li><h5>상세포트폴리오</h5></li>
                <li class="select_input">
                    <div>
                        <select id="port" v-if="mode ==='new'">
                        <option value='0'>비공개</option>
                        <option value='1' disabled>공개</option>
                        </select>
                        <select id="port" v-else>
                            <option v-if="Data[0].port === '1'" selected value='1'>공개</option>
                            <option v-else value='1'>공개</option>
                            <option v-if="Data[0].port === '0'" selected value='0'>비공개</option>
                            <option v-else value='0'>비공개</option>
                        </select>
                    </div>
                </li>
                <li><h5>카태고리</h5></li>
                <li class="select_input">
                    <div>
                        <select id="reqclass" v-if="mode === 'new'">
                            <option value="" selected disabled>분류</option>
                            <option value='디자인'>디자인</option> 
                            <option value='홈페이지'>홈페이지</option>
                            <option value='교육'>교육</option>
                            <option value='마케팅'>마케팅</option>
                            <option value='컨설팅'>컨설팅</option>
                        </select>
                        <select id="reqclass" v-else>
                            <option v-if="Data[0].class!=null" value="" selected disabled>{{Data[0].class}}</option>
                            <option v-else value="" selected disabled>분류</option>
                            <option value='디자인'>디자인</option> 
                            <option value='홈페이지'>홈페이지</option>
                            <option value='교육'>교육</option>
                            <option value='마케팅'>마케팅</option>
                            <option value='컨설팅'>컨설팅</option>
                    </select>
                    </div>
                </li>
                
                <li><h5>고객</h5></li>
                <li>
                    <input id='reqcustomer' v-if="mode ==='new'" type="text" placeholder="회사명/개인사업자" class="mody_tit">
                    <input id='reqcustomer' v-else type="text" placeholder="회사명/개인사업자" v-bind:value='Data[0].customer'>
                </li>
                <li><h5>프로젝트기간</h5></li>
                <li>
                    <input id='reqperiod' v-if="mode ==='new'" type="text" placeholder="프로젝트기간">
                    <input id='reqperiod' v-else type="text" placeholder="프로젝트기간" v-bind:value='Data[0].Period'>
                </li>
                <li><h5>프로젝트명</h5></li>
                <li>
                    <input id='reqtit' v-if="mode ==='new'" type="text" placeholder="프로젝트명">
                    <input id='reqtit' v-else type="text" placeholder="프로젝트명" v-bind:value='Data[0].title'>
                </li>
                <li><h5>프로젝트 부제목</h5></li>
                <li>
                    <input id='req_subtit' v-if="mode ==='new'" type="text" placeholder="프로젝트 부제목">
                    <input id='req_subtit' v-else type="text" placeholder="프로젝트 부제목" v-bind:value='Data[0].subTit'>
                </li>
                
                <li><h5>프로젝트 요약</h5></li>
                <li>
                    <input id='req_projectdesc' v-if="mode === 'new'" type="text" placeholder="제목" class="mody_tit">
                    <input id='req_projectdesc' v-else type="text" placeholder="제목" class="mody_tit" v-bind:value='Data[0].project'>
                </li>
                <li><h5>상세내용</h5></li>
                <li>
                    <textarea v-if="mode === 'new'" name="" id="main_desc" placeholder="상세내용" style='resize:none'></textarea>
                    <textarea v-else placeholder="상세내용" id="main_desc" style='resize:none'>{{Data[0].mainDesc}}</textarea>

                </li>
                <li><h5>미리보기 (400*400)</h5></li>
                <li v-if="mode === 'new'">
                    <input 
                    v-on:change='SelectSubImg' 
                    ref="subimg"
                    type="file" 
                    id='img_route' 
                    class="mody_tit" 
                    >
                </li>
                <li v-else>
                <input 
                    v-if="Data[0].imgRoute === ''" 
                    v-on:change='SelectSubImg' 
                    ref="subimg" 
                    id='img_route' 
                    class="mody_tit"
                    type="file"  
                    >

                    <a 
                    v-if="Data[0].imgRoute != ''" 
                    v-bind:href="'admin/'+Data[0].imgRoute" 
                    target='blank'>
                    {{Data[0].imgRoute}}
                    </a>

                    <span v-if="Data[0].imgRoute!=''" 
                    class='del_btn' 
                    v-on:click="DelteImg('Data[0].imgRoute','sub')">
                    삭제
                    </span>

                </li>
                <li><h5>메인 이미지 (W 1920)</h5></li>
                <li v-if="mode === 'new'">
                    <input 
                    v-on:change='SelectMainImg' 
                    ref="mainimg"
                    id='img_route' 
                    class="mody_tit" 
                    type="file" 
                    >
                </li>
                <li v-else>
                  <input 
                    v-if="Data[0].mainRoute === ''" 
                    v-on:change='SelectMainImg'
                    ref="mainimg" 
                    id='img_route' 
                    class="mody_tit"
                    type="file"  
                    >

                    <a 
                    v-if="Data[0].mainRoute != ''" 
                    v-bind:href="'admin/'+Data[0].mainRoute" 
                    target='blank'>
                    {{Data[0].mainRoute}}
                    </a>

                    <span v-if="Data[0].mainRoute!=''" 
                    class='del_btn' 
                    v-on:click="DelteImg('Data[0].mainRoute','main')">
                    삭제
                    </span>
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
created(){
  this.GetData()
},
mounted(){
    this.ActivationWork()

},
data:function(){
    return{
        Data:[
                {   
                    idx:0,
                    writer:'김다운',
                    customer:"BM",
                    class:"디자인",
                    title:"",
                    subTit:"보험친구들 테스트",
                    project:"관리자페이지 테스트 글",
                    mainDesc:"관리자페이지 테스트 글 설명충",
                    Period:"4주",
                    imgRoute:"test",
                    mainRoute:"test",
                    activation:0,
                    port:1
                }
            ],
            UploadsubImg:null,
            UploadMainImg:null
    }
},
methods:{
        GetData(){
            const baseURI = 'api/work.data.php';
            axios.post(`${baseURI}`, {
                mode:'view',
                idx:this.mode
            })
            .then((result) => {
                if(result.data.result[0].idx!=null){
                    this.Data = result.data.result;
                    console.log(this.Data)
                }
            })
            .catch(err => console.log('Login: ', err));
        },
        SelectSubImg(){
            this.UploadsubImg = this.$refs.subimg.files[0];
        },
        SelectMainImg(){
            this.UploadMainImg = this.$refs.mainimg.files[0];
            console.log(this.UploadMainImg)
        },
        PostData(methods){
            const reqWriter = document.getElementById('reqwriter');
            const Activation = document.getElementById('activation');
            const Class = document.getElementById('reqclass');
            const reqCustomer = document.getElementById('reqcustomer');
            const reqTit = document.getElementById('reqtit');
            const reqPeriod = document.getElementById('reqperiod');

            const reqSubTit = document.getElementById('req_subtit');
            const reqProjectDesc = document.getElementById('req_projectdesc');
            const mainDesc = document.getElementById('main_desc');
            const port = document.getElementById('port');

            let formData = new FormData();

            formData.append('subImg', this.UploadsubImg);
            formData.append('MainImg', this.UploadMainImg);

            formData.append('reqWriter', reqWriter.value);
            formData.append('Activation',Activation.value)
            formData.append('Class',Class.value)
            formData.append('reqCustomer',reqCustomer.value)
            formData.append('reqTit',reqTit.value)
            formData.append('reqSubTit',reqSubTit.value)
            formData.append('reqProjectDesc',reqProjectDesc.value)
            formData.append('mainDesc',mainDesc.value)
            formData.append('port',port.value)

            formData.append('reqPeriod',reqPeriod.value)

            formData.append('mode',methods)
            const baseURI = 'api/work.post.pro.php';

            if(methods == 'update'){
            formData.append('idx',this.mode)
            axios.post(
                baseURI, formData
                )
                .then((result) => {
                    router.push({path:'/portfolio/0'})
                    console.log(result.data)
                    // this.Data = result.data.result;
                })
                .catch(err => console.log('Login: ', err));
            }
            else{
                axios.post(
                    baseURI, formData
                    )
                    .then((result) => {
                        router.push({path:'/portfolio/0'})
                        console.log(result.data)
                        // this.Data = result.data.result;
                    })
                    .catch(err => console.log('Login: ', err));

            }

         
        },
        DelteImg(Route,col){
            let y = confirm('이미지를 삭제하시겠습니까?')
            if(y == true){
                console.log(Route)

                const baseURI = 'api/delete.img.php';
                axios.post( 
                    `${baseURI}`, {
                        mode:'DeleteImg',
                        target:Route,
                        idx:this.mode,
                        col:col
                    })
                    .then((result) => {
                        this.GetData()
                    })
                    .catch(err => console.log('Login: ', err));
                }

        },
        ActivationWork(mode){
            // const Class = document.getElementById('reqclass');
            const ActivationSelect = document.getElementById('activation');
            console.log(ActivationSelect.value)
            
     
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
