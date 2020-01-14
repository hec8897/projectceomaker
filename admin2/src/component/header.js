Vue.component('app-header', {
    template: `<header class="head_wrap"><div class="head_bi">
                     <router-link to="/" tag='h4'>
                     CEOMAKER ADMINISTRATOR
                     </router-link>
                </div>
                <div class="head_info" onclick='LoginProcess.DestorySessionData()'>
                    <span class="btn_out">로그아웃</span>
                </div></header>`
});
