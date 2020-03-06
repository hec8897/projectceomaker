import './nav.less'
import EventBus from '../eventbus'

const Nav ={
    template:`<nav>
                <ul>
                    <li @click="ClickList('all')">전체</li>
                    <li @click="ClickList(list)" v-for="list in lists">{{list}}</li>
                </ul>

            </nav>`,
    data(){
        return{
            lists:Array
                
        }
    },
    created(){
        EventBus.$on('navs',(data)=>{
            this.lists = data
        })
    },
    methods:{
        ClickList(data){
            EventBus.$emit('navClick',data)

        }
    }
}
export default Nav;