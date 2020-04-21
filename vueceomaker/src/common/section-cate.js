import './section_cate.scss'
const SectionCate = {
    props:['cate'],
    template:`<div class='section_cate'>
                <ul class='wrap'>
                    <router-link 
                    tag='li'
                    class="no"
                    v-for='list in lists' 
                    v-bind:to="/Works/+list"
                    :style="{ width: 'calc(100%/'+lists.length+')'}"
                    @click='ActiveList(list,$event)'
                    >{{list}}</router-link>
                </ul>
              </div>`,
              created(){
                this.cate == 'Works'?this.lists = this.Works:this.lists = this.Normal;
              },
              data(){
                  return{
                      lists:[],
                      Works:[
                          '전체','홈페이지','랜딩페이지','도서','상세페이지','마케팅'
                      ],
                      Normal:[
                          '디자인','마케팅','컨설팅','아카데미'
                      ]
                  }
              },
              methods: {
                  ActiveList(list,event) {
                      console.log(list)
                      console.log(event.target.className)
                      event.target.className = 'no active'
                      
                  },
              },
}
export default SectionCate;