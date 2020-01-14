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
                    <input id='reqwriter' v-else type="text" placeholder="작성자 ID"  v-bind:value='Data[0].writer'>
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
                            <option value=
                            '컨설팅'>컨설팅</option>
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
                <li><h5>미리보기 폰트</h5></li>
                <li class="select_input">
                <div>
                <select v-if="mode === 'new'" id='font_color'>
                <option value='#444'>검정(기본값)</option>
                <option value='#fff'>흰색</option>
                </select>
                <select v-else id='font_color'>
                <option v-if="Data[0].fontColor === '#444'" value='#444' selected>검정</option>
                <option v-else-if="Data[0].fontColor ==='#fff'" value='#fff'>흰색</option>

              
                </select>
                </div>
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
        <a href="#modal-del" data-toggle="modal" class="b_red" v-on:click='DeletData'>삭제</a>
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
                    title:"보험친구들",
                    subTit:"보험친구들 테스트",
                    project:"관리자페이지 테스트 글",
                    mainDesc:"관리자페이지 테스트 글 설명충",
                    Period:"4주",
                    fontColor:"#fff",
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
            const fontColor = document.getElementById('font_color');


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
            formData.append('fontColor',fontColor.value)


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
        },
        DeletData(){
            const baseURI = 'api/delete.data.php';
            axios.post( 
                `${baseURI}`, {
                    idx:this.mode,
                })
                .then((result) => {
                    router.push({path:'/portfolio/0'})
                })
                .catch(err => console.log('Login: ', err));
        }
    }
}
