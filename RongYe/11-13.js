function $(str)
{
    if(typeof str==="function")
    {
        window.onload=str;
    }
    else if(typeof str==="string")
    {
        return document.getElementById(str);
    }
    else if(typeof str==="object")
    {
        return str;
    }
}
function getStyle(obj,attr)
{
    if(obj.currentStyle)
    {
        return parseInt(obj.currentStyle[attr]);
    }
    else
    {
        return parseInt(getComputedStyle(obj)[attr]);
    }
}