import './transition.scss'
import router from '../../router'

const item = {
    props: ['item'],
    template: `<transition name='fade'>
                    <div class='item'>
                        <div class='item_img'>
                            <img v-bind:src='item.mainimg' alt='메인이미지'>
                        </div>
                        <div class='desc_area'>
                            <h2>{{item.tit}}</h2>
                            <p>{{item.desc}}</p>
                            <div class='btn' @click='RouterMove'>자세히 보기</div>
                        </div>
                    </div>
                    </transition>`,
    methods: {
        RouterMove() {
            router.push(  {
                path: `/${this.item.standard}/${this.item.idx}`,
            },)
            
        },
    },
}

export default item;