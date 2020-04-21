import './common.scss'
const Gnb = {
    template: `<nav class='app-gnb'>
        <ul>
            <router-link to='/new' tag='li'>최신</router-link>
            <router-link to='/sns' tag='li'>SNS 마케팅</router-link>
            <router-link to='/homepage' tag='li'>홈페이지 개발</router-link>
            <router-link to='/lend' tag='li'>랜딩페이지 제작</router-link>
            <router-link to='/book' tag='li'>도서 출판</router-link>
            <router-link to='/etc' tag='li'>기타</router-link>
        </ul>
    </nav>`
}

export default Gnb;