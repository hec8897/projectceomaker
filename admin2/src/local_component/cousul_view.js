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