const MainPage = {
    template: `
    <div class="con_wrap">
    <!-- main banner -->
    <div class="mban_wrap">
        <h4 class="title">메인이미지</h4>

        <!-- main banner edit --> 
        <ul class="mban_select">
            <li class="active">
                <a href="" class="btn_edit">수정</a>
                <a href="#nav-pills-tab-1" data-toggle="tab">
                    <span class=""><img src="images/banner_1.jpg" alt="main banner 1"></span>
                </a>
            </li>
            <li>
                <a href="" class="btn_edit">수정</a>
                <a href="#nav-pills-tab-2" data-toggle="tab">
                    <span class=""><img src="images/banner_2.jpg" alt="main banner 2"></span>
                </a>
            </li>
            <li>
                <a href="" class="btn_edit">수정</a>
                <a href="#nav-pills-tab-3" data-toggle="tab">
                    <span class=""><img src="images/banner_3.jpg" alt="main banner 3"></span>
                </a>
            </li>
            <li class="mban_add">
                <div>
                    <a href="">
                        <i class="material-icons md-24">image</i><p>이미지 등록</p>
                    </a>
                </div>
            </li>
        </ul>

        <div class="mban_view">
            <div class="fade active in" id="nav-pills-tab-1">
                <img src="images/banner_1.jpg" alt="main banner 1">
            </div>
            <div class="fade" id="nav-pills-tab-2">
                <img src="images/banner_2.jpg" alt="main banner 2">
            </div>
            <div class="fade" id="nav-pills-tab-3">
                <img src="images/banner_3.jpg" alt="main banner 3">
            </div>
        </div>
        <!-- END main banner edit -->

    </div>
    <!-- END main banner //-->

    <!-- 1:1 question -->
    <div class="table_wrap mt50">
        <div class="tit_wrap">
            <h4>견적문의</h4>
            <a href="" class="b_more">더보기 +</a>
        </div>
        <table class="need">
            <tr>
                <th>No</th>
                <th>제목</th>
                <th>분류</th>
                <th>이름</th>
                <th>전화번호</th>
                <th>등록일</th>
            </tr>
            <tr>
                <td>1234567</td>
                <td class="tal"><a href="">질문 있어요</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>9</td>
                <td class="tal"><a href="">아파트 30평 견적 문의 드립니다.</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            
            <tr>
                <td>6</td>
                <td class="tal"><a href="">용인시에 있는 단독주택 47평 견적의뢰 합니다.</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>5</td>
                <td class="tal"><a href="">아파트 30평 견적 문의 드립니다.</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>4</td>
                <td class="tal"><a href="">아파트 30평 견적 문의 드립니다.</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>3</td>
                <td class="tal"><a href="">아파트 30평 견적 문의 드립니다.</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>2</td>
                <td class="tal"><a href="">용인시에 있는 단독주택 47평 견적의뢰 합니다.</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
            <tr>
                <td>1</td>
                <td class="tal"><a href="">용인시에 있는 단독주택 47평 견적의뢰 합니다.</a></td>
                <td>주거공간</td>
                <td>홍길동</td>
                <td>010-1234-5678</td>
                <td>2018.10.20 &nbsp; 17:33</td>
            </tr>
        </table>
    </div>
    <!-- END 1:1 question //-->
</div>`
}

export default {
    components:{
        MainPage
    }
}