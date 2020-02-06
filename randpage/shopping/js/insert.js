function InsertData() {
  var reqName = document.getElementById('reqname');
  var reqPhone = document.getElementById('reqphone');
  var reqChecked = document.getElementById('reqcheck');

  if (reqName.value == "") {
    alert('성함을 입력해주세요');
    reqName.focus();
  } else if (reqPhone.value == "") {
    alert('연락처를 입력해주세요');
    reqPhone.focus();
  } else if (reqChecked.checked == false) {
    alert('개인정보 수집 및 이용에 동의 해주세요');
  } else {
    Data = {
      reqName: reqName.value,
      reqPhone: reqPhone.value
    };
    xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
      if (this.readyState == 4 && this.status == 200) {
        var returnJson = JSON.parse(this.response);
        if (returnJson.phpResult == "ok") {
          alert('수강 신청이 완료되었습니다.');
          location.reload();
        } else {
          alert('실패');
        }
      }
    };

    xhttp.open('POST', 'php/insert.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send("data=".concat(JSON.stringify(Data)));
  }
};