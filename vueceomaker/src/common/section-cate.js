import './section_cate.scss'
const SectionCate = {
    props:['cate'],
    template:`<div class='section_cate'>
                <ul class='wrap'>
                    <router-link 
                    tag='li'
                    v-for='list in lists' 
                    v-bind:to="page+list"
                    :style="{ width: 'calc(100%/'+lists.length+')'}"
                    v-text='list.toUpperCase()'
                    ></router-link>
                </ul>
              </div>`,
              created(){
                this.cate == 'Works'?this.lists = this.Works:this.lists = this.Normal;
                this.cate == 'Works'?this.page = '/works/':'/design/';
              },
              data(){
                  return{
                      page:'',
                      lists:[],
                      Works:[
                          '전체','홈페이지','랜딩페이지','도서','상세페이지','마케팅'
                      ],
                      Normal:[
                          'design','marketing','academy','consulting'
                      ]
                  }
              },
}
export default SectionCate;