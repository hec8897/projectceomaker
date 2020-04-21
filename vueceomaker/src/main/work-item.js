const workItem = {
    props:['workData'],
    template:`<div class='item'>
        <div class='img_area'>
            <img v-bind:src='workData.img'>
        </div>
        <div class='text_area'>
            <h3>{{workData.title}}</h3>
            <p>{{workData.sub_title}}</p>
            <div class='btn_area'>
                <div class='item_btn consult'>제작상담</div>
                <div class='item_btn zoom'>자세히보기</div>
            </div>
        </div>

    </div>`
}

export default workItem;