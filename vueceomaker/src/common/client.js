import './client.scss';

const ClientsSection = {
    props:['cate'],
    template:`<div class='client_section'>
        <h2>CLIENTS</h2>
        <p>디지털 에이전시 CEOMAKER와 함꼐한 고객입니다.</p>
        <div class='clients'>
            <div class='client'>
                <img src='image/client_1.jpg'>
            </div>
            <div class='client'>
                <img src='image/client_2.jpg'>
            </div>
            <div class='client'>
                <img src='image/client_3.jpg'>
            </div>
            <div class='client'>
                <img src='image/client_4.jpg'>
            </div>
            <div class='client'>
                <img src='image/client_5.jpg'>
            </div>
            <div class='client'>
                <img src='image/client_6.jpg'>
            </div>
            <div class='client'>
                <img src='image/client_7.jpg'>
            </div>
            <div class='client'>
                <img src='image/client_8.jpg'>
            </div>
            <div class='client'>
                <img src='image/client_9.jpg'>
            </div>
            <div class='client'>
                <img src='image/client_10.jpg'>
            </div>
            <div class='client'>
                <img src='image/client_11.jpg'>
            </div>
            <div class='client'>
                <img src='image/client_12.jpg'>
            </div>
            
        </div>
        <div class='btn'>
                카카오톡 문의
                <div class='pluarotate'>
                    <span></span>
                    <span></span>
                </div>    
            </div>
            <router-link v-bind:to ="'/contact/'+cate" tag='div' class='btn'>
                <b v-if="cate == 'design'">
                    디자인 문의
                </b>
                <b v-else-if="cate == 'marketing'">
                    마케팅 문의
                </b>
                <b v-else-if="cate == 'academy'">
                    교육 문의
                </b>
                <b v-else-if="cate == 'consulting'">
                    컨설팅 문의
                </b>
                <b v-else>
                    상담 문의
                </b>
                <div class='pluarotate'>
                    <span></span>
                    <span></span>
                </div>    
            </router-link>
    </div>`
}

export default ClientsSection;