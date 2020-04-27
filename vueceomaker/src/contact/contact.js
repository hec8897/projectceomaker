import './contact.scss'
const contactArea = {
    props:['mode'],
    template:`<div class='form'>
                    <h2>1:1문의</h2>
                    <div class="privacy">
                        <div class="p_box">
                            <p>CEOMAKER는 개인정보를 중요시 하며 정보통신망 이용촉진 및 정보보호에 관한 법률을 준수하고 있습니다.</p>
                            <ol>
                                <li>
                                    개인정보의 수집목적 <br>
                                    회사는 수집한 개인정보를 상담 문의 목적을 위해 활용합니다.
                                </li>
                                <li>
                                    수집하는 개인정보 항목 <br>
                                    회사는 상담, 서비스 신청 등을 위해 아래와 같은 개인정보를 수집하고 있습니다. <br>
                                    수집항목 : 이름, 이메일주소, 휴대폰번호, 전화번호, 그 외 개인이 직접 입력한 내용
                                </li>
                                <li>
                                    수집하는 개인정보의 처리 및 보존기간<br>
                                    회사는 개인정보의 처리목적이 달성될 때까지 개인정보를 보유하고, 목적이 달성된 후에는 지체없이 파기합니다. <br>
                                    다만, 사전동의를 받은 경우 또는 관련 법규에 의하여 보존 필요성이 있는 경우 에는 보존할 수 있습니다.
                                </li>
                                <li>
                                    동의거부 권리 및 동의거부시 불이익<br>
                                    고객은 본 개인정보 수집 및 이용 동의를 거부할 권리가 있습니다. 다만, 동의거부시 서비스 이용에 제한이 있을 수있습니다.
                                </li>
                            </ol>
                        </div>
                        <div class="checkbox">
                            <input type="checkbox" id="checkbox_1"/>
                            <label for="checkbox_1">개인정보수집 및 이용에 동의합니다.</label>
                        </div>
                        <div class="form_area">
                            <div class="form_box">
                                <form action="" method='POST' id='frm' enctype="multipart/form-data">

                                <div>
                                    <p>신청자명</p>
                                    <input type="text" id='reqname' v-model="reqName">
                                </div>
                                
                                <div>
                                    <p>연락처*</p>
                                    <input type="text" id='reqphone' v-model="reqPhone">
                                </div>
                                <div>
                                    <p>이메일*</p>
                                    <input type="text" id='reqemail' v-model="reqEmail">
                                </div>
                                <div>
                                    <p>상담분야</p>
                                    <input type="text" id='reqconsult' v-model="consultClass">
                                </div>
                                <div class="text_area">
                                    <p>문의 내용*</p>
                                    <textarea name="" id="reqmemo" v-model="reqMemo"></textarea>
                                </div>
                                </form>
                            </div>
                        </div></div>
               </div>`,
               data(){
                   return{
                       reqName:'',
                       reqPhone:'',
                       reqEmail:'',
                       consultClass:'',
                       reqMemo:''
                   }
               },
               created(){
                   if(this.mode == 'design'){
                        this.consultClass= "디자인 문의"
                   }
                   else if(this.mode == 'marketing'){
                        this.consultClass= "마케팅 문의"
                   }
                   else if(this.mode == 'academy'){
                        this.consultClass= "교육 문의"
                   }
                   else if(this.mode == 'consulting'){
                        this.consultClass= "컨설팅 문의"
                   }
                   else{
                        this.consultClass= "일반 상담 문의"
                   }
               }
}

export default contactArea;