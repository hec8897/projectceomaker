Vue.component('list-numbering',{
    props:['listData','index','pageClass','PhpRoute'],
    template: ` <div class="page">
                    <span>
                    <a class v-on:click='PrevListIndex' v-if="index > 9">
                        <i class="material-icons vam">navigate_before</i>
                    </a>
                    </span>

                    <span v-for="start in limit" >
                        <router-link class v-bind:to="pageClass+(start-1)" >{{start}}</router-link>
                    </span>

                    <span>
                        <a class v-on:click='NextListIndex' v-if='lists.length>100'>
                            <i class="material-icons vam">navigate_next</i>
                        </a>
                    </span>
               </div>`,
               data(){
                   return{
                        PhpRoutes:this.PhpRoute,
                        lists:null,
                        start:0,
                        limit:10,
                        NextNumber:null,
                        prevNumber:null
                   }
                   //start, limit 값 올려서 자동배여해야함ㅎㅎ
                   //라스트페이지 넥스트버튼 삭제
               },
               updated(){
                console.log(this.start)

               },
                created(){
                    const baseURI = this.PhpRoutes
                    axios.post(`${baseURI}`, {
                        mode:'list',
                    })
                    .then((result) => {
                        if(result.data.result.length > 0){
                            this.lists = result.data.result;
                        }
                        else{
                            this.lists = this.listData
                        }

                        if(this.lists.length>100){
                            this.limit = 10;
                        }
                        else{
                            this.limit = Math.ceil(this.lists.length/10);
                        }
                        // this.limit = Math.ceil((this.lists.length))


                    })
                    .catch(err => console.log('Login: ', err));
               },
               methods:{
                   NextListIndex(){
                    this.start = this.limit+1;
                    this.limit = this.start+10;
                    console.log(this.start)

                    ///손봐야함;;;

                   },
                   PrevListIndex(){
                       
                   }
                
               }
    
})