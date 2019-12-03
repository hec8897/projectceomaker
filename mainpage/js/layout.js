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
         List: "works_list.html?cate=1"
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
     HeaderRender() {

         const Gnb = document.getElementsByClassName('gnb')[0];
         Gnb.innerHTML = `<nav>
                                <div class="ci"><a href="${HtmlMokup.Main.main}"><img src="images/ci_white.png" alt="ceomaker"></a></div>
                                <a href="${HtmlMokup.Service.main}">SERVICE</a>
                                <a href="${HtmlMokup.Works.main}">WORKS</a>
                                <a href="${HtmlMokup.Contact.main}">CONTACT</a>
                                <a href="${HtmlMokup.About.main}">ABOUT</a>
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

        if(params.cate!=undefined){
                for(let i = 0; i<_lnb.length; i++){
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
     getQueryString(){
        //Get QueryString
        params = {};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (str, key, value) {
            params[key] = value;
        });
        return params;
       },
       ActiveNav(){
           if(params.pageno!=undefined){
            const ServiceTabNavList = document.querySelectorAll('.sub_nav')
            ServiceTabNavList[params.pageno].className='sub_nav on';
           }
        
       },
     ServiceTabNav() {
         this.getQueryString()
         const ServiceTabNavHtml = document.querySelectorAll('.wid_4')
         let Activeclass = "on"

         if(ServiceTabNavHtml.length > 0){
                 ServiceTabNavHtml[0].innerHTML = `  <li><a href="${HtmlMokup.Service.design}" class='sub_nav'>DESIGN</a></li>
                                            <li><a href="${HtmlMokup.Service.marketing}" class='sub_nav'>MARKETING</a></li>
                                            <li><a href="${HtmlMokup.Service.academy}" class='sub_nav'>ACADEMY</a></li>
                                            <li><a href="${HtmlMokup.Service.consulting}" class='sub_nav'>CONSULTING</a></li>`
                this.ActiveNav()
                }
     },
     ContactTabNav(){
        this.getQueryString();
        const ContactTabNavHtml = document.querySelectorAll('.wid_5')
        if(ContactTabNavHtml.length > 0){
            ContactTabNavHtml[0].innerHTML = ` <li><a href="${HtmlMokup.Contact.main}" class="sub_nav">1:1 문의</a></li>
                                                <li><a href="${HtmlMokup.Contact.design}" class="sub_nav">디자인 문의</a></li>
                                                <li><a href="${HtmlMokup.Contact.marketing}" class="sub_nav">마케팅 문의</a></li>
                                                <li><a href="${HtmlMokup.Contact.consulting}" class="sub_nav">컨설팅 문의</a></li>
                                                <li><a href="${HtmlMokup.Contact.academy}" class="sub_nav">아카데미 문의</a></li>`
        }
        this.ActiveNav()
     }
 }

 navMokupRender.HeaderRender()
 navMokupRender.SideBarNav()
 navMokupRender.ServiceTabNav()
 navMokupRender.ContactTabNav()

