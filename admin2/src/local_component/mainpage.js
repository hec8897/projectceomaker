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