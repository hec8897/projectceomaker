String.prototype.replaceAll = function (org, dest) {
    //array fillter prototype
    return this.split(org).join(dest);
}

const HtmlMokup = {
    Main: {
        main: "index.html"
    },
    Service: {
        main: "service_design.html?cate=0&pageno=0",
        design: "service_design.html?cate=0&pageno=0",
        marketing: "service_marketing.html?cate=0&pageno=1",
        academy: "service_academy.html?cate=0&pageno=2",
        consulting: "service_consulting.html?cate=0&pageno=3"
    },
    Works: {
        main: "works_list.html?cate=1",
        List: "works_list.html?cate=2"
    },
    Contact: {
        main: "contact.html?cate=2&pageno=0",
        design: "contact_design.html?cate=2&pageno=1",
        marketing: "contact_marketing.html?cate=2&pageno=2",
        consulting: "contact_consulting.html?cate=2&pageno=3",
        academy: "contact_academy.html?cate=2&pageno=4"
    },
    About: {
        main: "about.html?cate=3"
    }
}

let navMokupRender = {
    // HeaderRender() {

    //     const Gnb = document.getElementsByClassName('gnb')[0];
    //     Gnb.innerHTML = `<nav>
    //                             <div class="ci"><a href="${HtmlMokup.Main.main}"><img src="images/ci_white.png" alt="ceomaker"></a></div>
    //                             <a href="${HtmlMokup.Service.main}">SERVICE</a>
    //                             <a href="${HtmlMokup.Works.main}">WORKS</a>
    //                             <a href="${HtmlMokup.Contact.main}">CONTACT</a>
    //                             <a href="${HtmlMokup.About.main}">ABOUT</a>
    //                         </nav>`
    // },
    HeaderRender() {
        const Gnb = document.getElementsByClassName('gnb')[0];
        Gnb.innerHTML = `
        <nav>
        <div class="ci"><a href="${HtmlMokup.Main.main}"><img src="images/ci_white.png" alt="ceomaker"></a></div>        
        <div class="dropdown">
            <div>
                <a href="${HtmlMokup.Service.main}" class="gnbm">SERVICE</a>
            </div>
            <!-- sub -->
            <div class="sub_box">
                <div class="depth">
                <a href="${HtmlMokup.Service.design}">design</a>
                <a href="${HtmlMokup.Service.marketing}">marketing</a>
                <a href="${HtmlMokup.Service.academy}">academy</a>
                <a href="${HtmlMokup.Service.consulting}">consulting</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <div>
                <a href="${HtmlMokup.Works.main}" class="gnbm">WORKS</a>
            </div>
        </div>
        <div class="dropdown">
            <div>
                <a href="${HtmlMokup.Contact.main}" class="gnbm">CONTACT</a>
            </div>
            <!-- sub -->
            <div class="sub_box">
                <div class="depth">
                    <a href="${HtmlMokup.Contact.design}">design</a>
                    <a href="${HtmlMokup.Contact.marketing}">marketing</a>
                    <a href="${HtmlMokup.Contact.academy}">academy</a>
                    <a href="${HtmlMokup.Contact.consulting}">consulting</a>
                </div>
            </div>
        </div>
        <div class="dropdown">
            <div>
                <a href="${HtmlMokup.About.main}" class="gnbm">ABOUT</a>
            </div>
        </div>
    </nav>`
    },
    SideBarNav() {
        this.getQueryString();

        const SideBarService = document.querySelectorAll('.s_lnb')
        const ciLnb = document.querySelectorAll('.ci_lnb')
        const _lnb = document.querySelectorAll('.h_lnb')

        // _lnb[0].setAttribute('href',HtmlMokup.Main.main)
        for (let i = 0; i < ciLnb.length; i++) {
            ciLnb[i].setAttribute('href', HtmlMokup.Main.main)
        }

        if (params.cate != undefined) {
            for (let i = 0; i < _lnb.length; i++) {
                _lnb[i].classList = 'h_lnb'
            }
            _lnb[params.cate].className = 'h_lnb on'
        }

        _lnb[0].setAttribute('href', HtmlMokup.Service.main);
        _lnb[1].setAttribute('href', HtmlMokup.Works.main);
        _lnb[2].setAttribute('href', HtmlMokup.Contact.main);
        _lnb[3].setAttribute('href', HtmlMokup.About.main);

        SideBarService[0].innerHTML = `<li><a href="${HtmlMokup.Service.design}">design</a></li>
                                       <li><a href="${HtmlMokup.Service.marketing}">marketing</a></li>
                                       <li><a href="${HtmlMokup.Service.academy}">academy</a></li>
                                       <li><a href="${HtmlMokup.Service.consulting}">consulting</a></li>`

        SideBarService[1].innerHTML = `<li><a href="${HtmlMokup.Contact.design}">design</a></li>
                                        <li><a href="${HtmlMokup.Contact.marketing}">marketing</a></li>
                                        <li><a href="${HtmlMokup.Contact.academy}">academy</a></li>
                                        <li><a href="${HtmlMokup.Contact.consulting}">consulting</a></li>`

    },
    getQueryString() {
        //Get QueryString
        params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
            params[key] = value;
        });
        return params;
    },
    ActiveNav() {
        if (params.pageno != undefined) {
            const ServiceTabNavList = document.querySelectorAll('.sub_nav')
            ServiceTabNavList[params.pageno].className = 'sub_nav on';
        }

    },
    ServiceTabNav() {
        this.getQueryString()
        const ServiceTabNavHtml = document.querySelectorAll('.wid_4')
        let Activeclass = "on"

        if (ServiceTabNavHtml.length > 0) {
            ServiceTabNavHtml[0].innerHTML = `  <li><a href="${HtmlMokup.Service.design}" class='sub_nav'>DESIGN</a></li>
                                            <li><a href="${HtmlMokup.Service.marketing}" class='sub_nav'>MARKETING</a></li>
                                            <li><a href="${HtmlMokup.Service.academy}" class='sub_nav'>ACADEMY</a></li>
                                            <li><a href="${HtmlMokup.Service.consulting}" class='sub_nav'>CONSULTING</a></li>`
            this.ActiveNav()
        }
    },
    ContactTabNav() {
        this.getQueryString();
        const ContactTabNavHtml = document.querySelectorAll('.wid_5')
        if (ContactTabNavHtml.length > 0) {
            ContactTabNavHtml[0].innerHTML = ` <li><a href="${HtmlMokup.Contact.main}" class="sub_nav">1:1 문의</a></li>
                                                <li><a href="${HtmlMokup.Contact.design}" class="sub_nav">디자인 문의</a></li>
                                                <li><a href="${HtmlMokup.Contact.marketing}" class="sub_nav">마케팅 문의</a></li>
                                                <li><a href="${HtmlMokup.Contact.consulting}" class="sub_nav">컨설팅 문의</a></li>
                                                <li><a href="${HtmlMokup.Contact.academy}" class="sub_nav">아카데미 문의</a></li>`
        }
        this.ActiveNav()
    }
}



let WorkDataRender = {
    WorkData: [],
    WorkDataRender: function (page) {
        let xhttp = new XMLHttpRequest();

        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                WorkDataRender.WorkData = JSON.parse(this.response).result;
                const WorkListHtml = document.getElementById('work_list');
                const WorkData = WorkDataRender.WorkData

                TemplateArray = [];

    
                // <div style="color:${WorkData[i].fontColor}">${WorkData[i].work}</div>


                for (let i = 0; i < WorkData.length; i++) {
                    if(WorkData[i].port == 1){
                        portlink = `works_view.html?id=${WorkData[i].idx}`
                    }
                    else{
                        portlink = 'javascirt:void()'
                    }
                    TemplateArray.push(
                        `<div data-scrollview="true">
                        <div style="background:url(admin${(WorkData[i].background).replace("..","")}) center;" "background-size:auto 100%;" class="animated work_lists" data-animation="true" data-animation-type="fadeInUp">
                            <a href="${portlink}">
                                <div class="work_on">
                                    <div class="more_tag btn btn_w" >REAN MORE<div class="pluarotate"><span></span><span></span></div></div>
                                </div>
                                <div class="work_con">
                                <p style="color:${WorkData[i].fontColor}">${WorkData[i].subTit}</p>
                                <h2 style="color:${WorkData[i].fontColor}">${WorkData[i].mainTit}</h2>
                                </div>
                                <img src="images/img_dim.gif" alt="dim">
                            </a>
                        </div>
                    </div>`)
                }
                const limitList = page == 'main' ? 8 : 9;

                let limitArray = TemplateArray.slice(0, WorkData.length)

                if (page == "main") {
                    limitArray.push(`<div data-scrollview="true">
                        <div style="background:url(images/works_more.jpg) center;" class="animated delay_4" data-animation="true" data-animation-type="fadeInUp">
                            <a href="works_view.html?id=${HtmlMokup.Works}">
                                <div class="work_more">
                                    <h4>MORE PROJECT</h4>
                                    <div class="pluarotate"><span></span><span></span></div>
                                </div>
                                <img src="images/img_dim.gif" alt="dim">
                            </a>
                        </div>
                    </div>`)
                }


                let resultArrayHtml = limitArray.toString();
                let replaceAll1 = resultArrayHtml.replaceAll(',', '');
                let replaceAll2 = replaceAll1.replaceAll('|', ',');
                let replaceAll3 = replaceAll2.replaceAll(null, ' ');
                WorkListHtml.innerHTML = replaceAll3

                const WorkList = document.querySelectorAll('.work_lists');

                const MoreBtn = document.querySelectorAll('.more_tag');



                // for (let i = 5; i < MoreBtn.length; i++) {
                //     MoreBtn[i].classList = ""
                // }
                for (let i = limitList; i < WorkList.length; i++) {
                    WorkList[i].style.display = "none"

                }

            }

        }
        xhttp.open('POST', 'data/works.data.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data=0")
    },
    moreDataCount: 9,
    moreDataRender() {
        const WorkList = document.querySelectorAll('.work_lists')
        const workLoading = document.getElementById('work_loading')
        let limitCount = this.moreDataCount;
        if (limitCount < WorkList.length) {
            for (let i = limitCount; i < limitCount + 3; i++) {
                $(WorkList[i]).fadeIn()
                //스크롤 이벤트 걸어줘야함
                // WorkList[i].style.display="block"
            }
            this.moreDataCount += 3;
            if (WorkList.length <= this.moreDataCount) {
                this.moreDataCount = WorkList.length
            }
        } else {

            workLoading.style.opacity = '0'

        }




    },
    WorkViewPage(){
        const WorkHead = document.getElementById('workhead');
        const WorksImg = document.getElementById('works_area');
       
        let xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                let RetrunJson = JSON.parse(this.responseText);
                let ViewData =RetrunJson.result[0]
                WorkHead.innerHTML =`<div>
                <h6>PROJECT</h6>
                <p>${ViewData.project}</p>
            </div>
            <div>
                <h6>CLIENT</h6>
                <p>${ViewData.company}</p>
            </div>
            <div>
                <h6>PERIOD</h6>
                <p>${ViewData.Period}</p>
            </div>
            <div>
                <h6>CONTENTS</h6>
                <div>
                    <h1>${ViewData.mainTit}</h1>
                    <p>${ViewData.subTit}</p>
                    <a href="" class="btn">방문하기 <div class="pluarotate"><span></span><span></span></div></a>
                </div>
            </div>`

            WorksImg.innerHTML=`<img src="admin/${(ViewData.mainRoute).replace("..","")}" alt="works img">`
            }
        }
        Insertdata = {
            id:params.id,
            mode:"View"
        }
       

        xhttp.open('POST', 'data/works.data.php', true);
        xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhttp.send("data="+JSON.stringify(Insertdata))




    }

}

navMokupRender.HeaderRender()
navMokupRender.SideBarNav()
navMokupRender.ServiceTabNav()
navMokupRender.ContactTabNav()
