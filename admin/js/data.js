let UseAdminFn = {
    loginCheck(){
        var memId = document.getElementById('input_id').value;
        var memPw = document.getElementById('input_pw').value;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                var returnJson = JSON.parse(this.response);
                console.log(returnJson)
                if(returnJson.result =="noresult"){
                    alert('존재하지 않는 아이디 입니다  ')
                }
                else if(returnJson.result == "pwno"){
                    alert('패스워드가 틀립니다.')
                }
                else{
                    alert(`어서오세요 ${returnJson.name}님`)
                    location.href='main.html'
                }
            }

        }
        xhttp.open('POST', 'php/login_proc.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        data = {
            userId: memId,
            userPw: memPw
        }
        xhttp.send("data=" + JSON.stringify(data))

    }
}