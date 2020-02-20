const Nav ={
    template:`<nav>
                <ul>
                    <li v-bind:style="liStyle">전체</li>
                    <li v-bind:style="liStyle" v-for="list in lists">{{list.title}}</li>
                </ul>

            </nav>`,
    data(){
        return{
            liStyle:{display:"inline-block" , border:"1px solid #d0d0d0", borderRadius:"5px", margin:"2px", background:"#fff", fontSize:'14px', padding:"5px", cursor:"pointer"},
            lists:[
                {idx:0,title:'보험친구들',category:"homepage"},
                {idx:1,title:'유전자검사 랜딩',category:"randing"},
                {idx:2,title:'개인홈 랜딩',category:"randing"},
                {idx:3,title:'투게더인스',category:"homepage"},
                {idx:4,title:'씨이오메이커',category:"homepage"},
                {idx:5,title:'start up map',category:"book"},
                {idx:6,title:'재무설계 랜딩',category:"randing"},
                {idx:7,title:'개인홈 광고 랜딩',category:"randing"},
                {idx:8,title:'율 디자인',category:"homepage"},
                {idx:9,title:'보험친구들 랜딩',category:"randing"},
                {idx:10,title:'멍꾸멍꾸 상세페이지',category:"Detail_page"},
                {idx:11,title:'모니키키 상세페이지',category:"Detail_page"},
                {idx:12,title:'SNS광고',category:"etc"},
                {idx:13,title:'GDN광고',category:"etc"}
            ],
        }
    },
    created() {
        console.log(this.lists)
    },

}
export default Nav;