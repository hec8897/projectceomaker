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
    this.limit = Number(this.index)*10+15
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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
            },{
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