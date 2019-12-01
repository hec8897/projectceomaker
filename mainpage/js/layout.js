const HtmlMokup = {
    Main:{
        main:"index.html"
    },
    Service:{
        main:"service_design.html",
        design:"service_design.html",
        marketing:"service_marketing.html",
        academy:"service_academy.html",
        consulting:"service_consulting.html"
    },
    Works:{
        main:"works_list.html",
        List:"works_list.html"
    },
    Contact:{
        main:"contact.html",
        design:"contact_design.html",
        marketing:"contact_marketing.html",
        academy:"contact_academy.html",
        consulting:"contact_consulting.html"
    },
    About:{
        main:"about.html"
        
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

        const SideBarService = document.querySelectorAll('.s_lnb')
        const _lnb = document.querySelectorAll('.h_lnb')
        _lnb[0].setAttribute('href',HtmlMokup.Service.main)
        _lnb[1].setAttribute('href',HtmlMokup.Works.main)
        _lnb[2].setAttribute('href',HtmlMokup.Contact.main)
        _lnb[3].setAttribute('href',HtmlMokup.About.main)
        SideBarService[0].innerHTML = `<li><a href="${HtmlMokup.Service.design}">design</a></li>
                                       <li><a href="${HtmlMokup.Service.marketing}">marketing</a></li>
                                       <li><a href="${HtmlMokup.Service.academy}">academy</a></li>
                                       <li><a href="${HtmlMokup.Service.consulting}">consulting</a></li>`
        
        SideBarService[1].innerHTML = `<li><a href="${HtmlMokup.Contact.design}">design</a></li>
                                        <li><a href="${HtmlMokup.Contact.marketing}">marketing</a></li>
                                        <li><a href="${HtmlMokup.Contact.academy}">academy</a></li>
                                        <li><a href="${HtmlMokup.Contact.consulting}">consulting</a></li>`
        

    }
}

navMokupRender.HeaderRender()
navMokupRender.SideBarNav()
