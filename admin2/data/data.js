LoginFn = () => {
    const memId = document.getElementById('reqid');
    const memPw = document.getElementById('reqpw');
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            console.log(this)
        }
    }
    xhttp.open('POST', 'php/login_pro.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    data = {
        userId: memId.value,
        userPw: memPw.value
    }

    xhttp.send("data=" + JSON.stringify(data))
    if(memId.value == ""){
        alert('아이디를 입력해주세요')
    }
    else if(memPw.value == ""){
        alert('패스워드를 입력해주세요')
    }

}