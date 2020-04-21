import item from './list/item'
import noList from './no-list'
import axios from 'axios'

const ListPage = {
    props: ['standard'],
    template: `<div id='wrap'>
                    <div class='list'>
                        <item-component v-for='list in lists' v-bind:item='list'/>
                        <no-list v-if='lists.length==0'/>
                    </div>
                </div>`,
    components: {
        'item-component': item,
        'no-list':noList
    },
    data(){
        return{
            lists:''
        }
    },
    mounted(){
        this.lists = []
        setTimeout(() => {
            this.getData(this.standard)
        },1000);

    },
    beforeRouteUpdate(to, from, next){
        this.lists = []
        setTimeout(() => {
            this.getData(to.params.standard)
        },1000);
        next()
    },
    methods: {
        getData(standard) {
            const baseUrl = 'api/data/data.json'
            axios.get(baseUrl)
                .then((then) => {
                    if(standard == undefined || standard == 'all'){
                        this.lists = then.data
                    }
                    else{
                        this.lists = then.data.filter((x) => {
                            return x.standard == standard
                        })
                    }

                })


        },
    },
}
export default ListPage;