

 // var dat1=document.getElementById('dat1')
 //    var oay=document.getElementById('ay')
 //    var dat2=document.getElementById('dat2')
 //    oay.onclick=function(){
 //      dat1.style.display="none"
 //      dat2.style.display="block"
 //    }


  var zhang=document.getElementById('zhang');
  var li=zhang.getElementsByTagName('li');
  var xin=document.getElementById('d1');
  var span=xin.getElementsByTagName('span');
   for(var i=0;i<li.length;i++){
     li[i].index=i;
     li[i].onmouseover=function(){
       for(var i=0;i<span.length;i++){
         span[i].style.display="none"
       }
       span[this.index].style.display="block"
   }
}   
   zhang.onmouseover=function(){
     xin.style.display="block";
   } 
   xin.onmouseover=function(){
     xin.style.display="block";
   }
   xin.onmouseout=function(){
     xin.style.display="none";
   }
   zhang.onmouseout=function(){
     xin.style.display="none";
   }
 

//nav部分




          var jie=document.getElementById('jie');
          var a=jie.getElementsByTagName('a');
          var em=jie.getElementsByTagName('em')
          for (var j = 0; j < a.length; j++) {
            a[j].cc=j;
            a[j].onmouseover=function(){
              for (var j = 0; j < a.length; j++) {
                em[j].style.display="none";
            
              }
              em[this.cc].style.display="block"
 
            }
          }



        var ochan = document.getElementById('chan')
        var oli = chan.getElementsByTagName('a')
        var ospan = chan.getElementsByTagName('span')
        for (var z = 0; z < oli.length; z++) {
            oli[z].bb=z;
            oli[z].onmouseover=function(){
              for (var z = 0; z < oli.length; z++) {
                oli[z].className="bai"
                ospan[z].style.display="none";  
              }
              ospan[this.bb].style.display="block";
              this.className="hei"
 
            }
          }




        var lun2=document.getElementById('lun2')
        var ali=lun2.getElementsByTagName('li')
        var aspan=lun2.getElementsByTagName('span')
        for (var n = 0; n < span.length; n++) {
          aspan[n].index=n;
          aspan[n].onmouseover=function(){
            for (var n = 0; n < aspan.length; n++) {
              ali[n].style.display="none";
            }
            ali[this.index].style.display="block";
          }
        }

  var dat1=document.getElementById('dat1')
  var img=dat1.getElementsByTagName('img')
  var as=dat1.getElementsByTagName('a')
 for (var i = 0; i < a.length; i++) {
   as[i].oo=i
   i.onclick=function () {
     for (var i = 0; i < as.length; i++) {
       img[i].style.display="none"
     }
     img[this.oo].style.display="block"
   }
 }
 var dat2=document.getElementById('dat2')
 var az=document.getElementById('az')
 az.onclick=function() {
   dat1.style.display="none"
   dat2.style.display="block"
 }
    

 