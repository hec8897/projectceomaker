import axios from 'axios';
import WorksItem from './work-item';
import './list-item.scss';
const WorksList = {
    template:`<div class='work-list'>
                    <h2>Ceomaker 포트폴리오</h2>
                    <WorksItem 
                    v-for='(list,i) in lists' 
                    v-if="i < limit"
                    :workData='list' />
                </div>`,
    data(){
        return{
            lists:'',
            limit:8
        }
    },
    components:{
        WorksItem
    },
    created(){
        axios.get('api/data.json')
        .then((result)=>{
            this.lists = result.data
        })
    }
}

export default WorksList;   