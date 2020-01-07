let DataInserter = {
    dataArray:[],
    DataInsertFn(mode){
        let reqCompany = document.getElementById('reqcompany').value;
        let reqPhone = document.getElementById('reqphone').value;
        let reqEmail = document.getElementById('reqemail').value;
        let reqMemo = document.getElementById('reqmemo').value;
        
        //// default Value
        let fileName = document.getElementById('file1');
        
        let reqName = document.getElementById('reqname');
        let reqPay = document.getElementById('reqpay');
        let reqInq = document.getElementById('reqinqr');
        let reqTarget = document.getElementById('reqtarget');
        let reqPerson = document.getElementById('reqperson');
        let Checkd = document.getElementById('checkbox_1').checked;
  
        // Addional values tag
  
        let reqInqr;
        let payInqr;
        let reqTargetr;
        let reqPersonr;
        let reqNamer;
        let fileNamer;
  
        if(mode!='basic'){
            reqInqr = reqInq.value;
            payInqr = reqPay.value;
            reqNamer = reqName.value;
            fileNamer = fileName.value;
        }
        if(mode == "academy"){
            reqTargetr = reqTarget.value;
            reqPersonr = reqPerson.value;
        }
  
        this.dataArray = [
            {
                
                reqCompany,
                reqPhone,
                reqEmail,
                reqMemo,
                mode,
                //default data
                reqInqr,
                payInqr,
                reqTargetr,
                reqPersonr,
                reqNamer,
                fileNamer
            }
        ]
  
        const dataArray = this.dataArray[0]
        if(mode == "basic"){
            if(dataArray.reqPhone == "" || dataArray.reqEmail == "" || dataArray.reqMemo ==""){
                alert('필수 입력정보가 누락되었습니다.')
            }
            else if(Checkd == false){
                alert('개인정보수집 및 이용에 동의해주세요')
            }
            else{
                InsertData()
            }
            
        }
        else if(mode == "design" || mode == "marketing" || mode == "consulting"){  
            if(dataArray.reqPhone == "" || dataArray.reqEmail == "" || dataArray.reqNamer == "" || dataArray.reqInqr == "" || dataArray.payInqr == "" || dataArray.reqMemo == ""){
                alert('필수 입력정보가 누락되었습니다.')
                console.log(dataArray)
            }
            else if(Checkd == false){
                alert('개인정보수집 및 이용에 동의해주세요')
            }
            else{
                InsertData()
            }          
        }
        else if(mode == "academy"){
            if(dataArray.reqPhone == "" || dataArray.reqEmail == "" || dataArray.reqNamer == "" || dataArray.reqInqr == "" || dataArray.payInqr == "" || dataArray.reqMemo == "" || dataArray.reqTargetr == "" || dataArray.reqPersonr ==""){
                alert('필수 입력정보가 누락되었습니다.')
                console.log(dataArray)
  
            }
            else if(Checkd == false){
                alert('개인정보수집 및 이용에 동의해주세요')
            }
            else{
                InsertData()
            }          
        }
      
     
        else{
        }   
 
            const xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var returnJson = JSON.parse(this.response)
                    if(returnJson.phpresult == 'ok'){
                        if(DataInserter.dataArray[0].fileNamer!=""){
                            if(mode!='basic'){
                                frm.submit()
                            }
                            else{
                                alert('상담신청이 완료 되었습니다. 빠른시일안에 연락 드리겠습니다');
                                location.reload()
                            }
  
                        }
                        else{
                            alert('상담신청이 완료 되었습니다. 빠른시일안에 연락 드리겠습니다');
                            location.reload()
  
                        }
                    }
                    else{
                        alert('상담신청실패');
                    }
                }
            }
            xhttp.open('POST', 'php/insert.php', true);
            xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            xhttp.send(`data=${JSON.stringify(DataInserter.dataArray)}`)
        }
  
    }
  }