   var zxm1=document.getElementById('zxm1');
    var zxm2=document.getElementById('zxm2');
    var zxm3=document.getElementById('zxm3');

zxm1.onclick=function(){
  zxm2.style.display="block";
  zxm1.style.display="none";
  zxm3.style.display="none";
}
zxm2.onclick=function(){
  zxm3.style.display="block";
  zxm1.style.display="none";
  zxm2.style.display="none";
}
zxm3.onclick=function(){
  zxm1.style.display="block";
  zxm3.style.display="none";
  zxm2.style.display="none";
}