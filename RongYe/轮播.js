window.onload=function()
{
    banner_cl();
    banner_zy();
}
/* banner的侧栏 */
function banner_cl()
{
    var oB_List = document.getElementById('b_list');
    var oQR_code = document.getElementById('QR_code');
    var oQR_img = oQR_code.getElementsByTagName('img')[0];
    var oQR_box = document.getElementById('QR_box');
    var B_list_aLi = oB_List.getElementsByTagName('li');
    var B_list_Arra = oB_List.getElementsByTagName('a');
    var B_list_ArrImg = oB_List.getElementsByTagName('img');
    var aBImg = ["image/9.png","image/10.png","image/11.png"];
    var aBImg2 = ["image/6.png","image/7.png","image/8.png"];
    /* 初始化侧栏的背景色和图片 */
    B_list_Arra[0].className="b_list_bg";
    B_list_ArrImg[0].src = aBImg[0];
    oQR_code.onOff=true;
    oQR_code.onclick = function()
    {
        if(oQR_code.onOff)
        {
           oQR_box.style.display = "block";
           oQR_code.onOff=false;
           oQR_code.style.zIndex = "10";
           oQR_img.src = "image/16.png";
        }
        else
        {
            oQR_box.style.display = "none";
            oQR_code.onOff=true;
            oQR_img.src = "image/14.png";
        }
    }
    function changLiBg()
    {
        for(var i=0; i<B_list_Arra.length-1; i++)
        {
            B_list_aLi[i].index = i;

            B_list_aLi[i].onmouseenter = function()
            {
                ClearBg();
                ChangBimg();
                B_list_Arra[this.index].className ="b_list_bg";
                B_list_ArrImg[this.index].src = aBImg[this.index];
            }
            B_list_aLi[i].onmouseleave = function()
            {
                B_list_Arra[this.index].className="";
                B_list_Arra[0].className="b_list_bg";
                ChangBimg();
                B_list_ArrImg[0].src = aBImg[0];
            }
        }
    }
    function ChangBimg()
    {
        for(var m=0; m<aBImg2.length; m++)
        {
            B_list_ArrImg[m].src = aBImg2[m];
        }
    }
    function ClearBg()
    {
        for(var n=0; n<B_list_Arra.length-1; n++)
        {
            B_list_Arra[n].className="";
        }
    }
    changLiBg();
}
/* banner的轮播 */
function banner_zy()
{
    /* 轮播 */
    var oB_img = document.getElementById('banner_img');
    var oB_btn = document.getElementById('banner_btn');
    var aBtn = oB_btn.getElementsByTagName('p');
    var aBtn_img = oB_btn.getElementsByTagName('img');
    var time = "";
    var arrImg = ["image/banner1.jpg","image/banner2.jpg","image/banner3.jpg","image/banner4.jpg","image/banner5.jpg","image/banner6.jpg"];
    var i=0;
    var sum=0.9;
    oB_img.src = arrImg[i];
    /* 初始化所有的小圆圈 */
    Change_BanImg();
    /* 给第一个换成有颜色的 */
    aBtn_img[i].src = "image/18.png";
    /* 定时器改变图片和小圆圈的图片 */
    function banner_lunbo()
    {
        time = setInterval(function(){
            i += 1;
            Change_BanImg();
            if(i>=arrImg.length){i = 0;}
                oB_img.src = arrImg[i];
                oB_img.style.transition = "0.5";
                
                aBtn_img[i].src = "image/18.png";
        },3000)
    }
    banner_lunbo();
    oB_img.onmouseenter=function()
    {
        clearTimeout(time);
    }
    oB_img.onmouseleave=function()
    {
        banner_lunbo();
    }
    function aBtn_click()
    {
        for(var j=0; j<aBtn.length; j++)
        {
            aBtn[j].index = j;
            aBtn[j].onclick = function()
            {
                Change_BanImg();
                aBtn_img[this.index].src = "image/18.png";
                oB_img.src = arrImg[this.index];
                i=this.index;
            }
        }
    }
    aBtn_click();
    /* 给所有的圆圈都换成白色图片 */
    function Change_BanImg()
    {
        for(var n=0; n<aBtn.length; n++)
        {
            aBtn_img[n].src ="image/17.png";
        }
    }
}