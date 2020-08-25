setInterval(setClock,1000);
var hour=document.getElementById("data-hour");
var minute=document.getElementById("data-minute");
var second=document.getElementById("data-second");
function setClock(){
    var newDate=new Date();
    var sR=newDate.getSeconds()/60;
    var mR=(sR+newDate.getMinutes())/60;
    var hR=(mR+newDate.getHours())/12;
    setRotation(hour,hR);
    setRotation(minute,mR);
    setRotation(second,sR);
}
function setRotation(element,rR)
{
    element.style.setProperty('--r',(rR*360));
}
setClock();