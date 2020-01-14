Vue.component('list-numbering',{
    props:['listData','index','pageClass'],
    template: ` <div class="page">
                    <span>
                    <a class v-on:click='PrevListIndex'>
                        <i class="material-icons vam">navigate_before</i>
                        </a>
                    </span>

                    <span v-for="i in 10" >
                        <router-link class v-bind:to="pageClass+(i-1)" >{{i}}</router-link>
                    </span>

                    <span>
                        <a class v-on:click='NextListIndex'>
                            <i class="material-icons vam">navigate_next</i>
                        </a>
                    </span>
               </div>`,
               data(){
                   return{
                        ListNumberLength:null,
                        start:0,
                        limit:15,
                        NextNumber:null,
                        prevNumber:null
                   }
                   //start, limit 값 올려서 자동배여해야함ㅎㅎ
                   //라스트페이지 넥스트버튼 삭제
               },
               mounted(){
                //    this.ListRenderData();

               },
                created(){
                    const ListLength = this.listData.length;
                    // this.limit = Math.ceil(Number(this.index)/10)*10 
                    // this.start = (Math.ceil(Number(this.index)/10)*10)-9
                    if(ListLength < 10){
                        this.start = 0
                        this.limit = 15
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
                       let DataLength = this.listData.length/10
                       if(DataLength>0){
                        
                       }

                       const ListNumberLength = Math.round(DataLength) <= 1 ?0:Math.round(DataLength)
                       console.log(this.listData)
                       console.log(this.listData.length)
                    //    console.log(DataLength)
                    //    console.log(ListNumberLength)
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