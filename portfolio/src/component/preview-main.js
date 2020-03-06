import preViewBox from './preview-box'
import EventBus from '../eventbus'
import previewSub from './preview-sub'


const preViewMain = {
    props: ['lists'],
    template: `<div id="gallery" class="gallery">
                <pre-view-box v-bind:getdata = 'MainArrayResult' showQuery='true' v-for="MainArrayResult in MainArrayResults"></pre-view-box>
                <pre-sub-box v-bind:getdata = 'SubData' v-bind:title='title' v-for="SubData in SubDatas"></pre-sub-box>
              </div>`,
    components: {
        'pre-view-box': preViewBox,
        'pre-sub-box': previewSub
    },
    data() {
        return {
            results: Array,
            MainArrayResults: Array,
            SubDatas: Array,
            title: ''
        }
    },
    created() {
        EventBus.$on('lists', (data) => {
            this.results = data
            let DataArray = []
            for (let i = 0; i < this.results.length; i++) {
                DataArray.push({
                    title: this.results[i].title,
                    MainData: this.results[i].main
                })
            }
            this.MainArrayResults = DataArray
        })

        EventBus.$on('navClick', (Data) => {
            const resultData = this.results.filter((x) => {
                return x.title == Data
            })
            this.title = Data
            setTimeout(() => {
                this.SubDatas = resultData[0].sub
            }, 200);
        })

    }
}
export default preViewMain;