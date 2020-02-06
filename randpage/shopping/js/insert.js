InsertData = () => {
    const reqName = document.getElementById('reqname')
    const reqPhone = document.getElementById('reqphone')


    Data = {
        reqName: reqName.value,
        reqPhone: reqPhone.value
    }

    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            var returnJson = JSON.parse(this.response)
            console.log(returnJson)

        }
    }
    xhttp.open('POST', 'php/insert.php', true);
    xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xhttp.send(`data=${JSON.stringify(Data)}`)


}