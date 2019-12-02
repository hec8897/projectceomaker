let UseAdminFn = {
    loginCheck(){
        var memId = document.getElementById('input_id').value;
        var memPw = document.getElementById('input_pw').value;
        xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                console.log(xhttp)
                console.log(this.response)
                // var returnJson = JSON.parse(this.response);
                // console.log(returnJson)
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