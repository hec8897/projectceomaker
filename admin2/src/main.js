// 데이터 처리
// 페이지 네비게이션

const SrcNav = {
    login:"admin_login.html",
    main:"main.html#/"
}


const LoginProcess = {
    PostLoginData(){
        const ReqId = document.getElementById('reqid');
        const ReqPw = document.getElementById('reqpw');

        const baseURI = 'api/login_pro.php';

        axios.post(`${baseURI}`, {
            ID:ReqId.value,
            Pw:ReqPw.value,
        })
            .then((result) => {
                if(ReqId.value == ""){
                    alert('아이디를 입력해주세요');
                    ReqId.focus();
                }
                else if(ReqPw.value == ""){
                    alert('패스워드를 입력해주세요');
                    ReqPw.focus();
                }
                else{

                    
                    if(result.data.phpResult == "noid"){
                        alert('검색된아이디가 없습니다')
                    }
                    else if(result.data.phpResult == "pwno"){
                        alert('패스워드가 틀립니다')
                    }
                    else{
                        alert(`어서오세요 ${result.data.userName}님`)
                        sessionStorage.setItem("name", result.data.userName);
                        sessionStorage.setItem("ID", result.data.userId);
                        location.href = SrcNav.main
                    }
                }
            })
            .catch(err => console.log('Login: ', err));

    },
    DestorySessionData(){
            let y = confirm("로그아웃 하시겠습니까?")
            if(y == true){
                sessionStorage.clear();
                location.href = SrcNav.login
            }
    }
}



//LoginProcess{} 로그인 처리 관련
//LoginProcess.PostLoginData() 로그인 처리
//LoginProcess.DestorySessionData() 로그 아웃
