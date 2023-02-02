var i = 0;

$(document).on('click', '.slider-next', function(){
    var next = i + 10;
    if (i === 70) {
      $('div.scroll-wrapper ul.row li').removeAttr('style');
      $('div.scroll-wrapper ul.row li').attr('style', 'left:0%;-webkit-transition:left 1s;transition:left 1s;');
      i = 0;
    } else {
      $('div.scroll-wrapper ul.row li').removeAttr('style');
      $('div.scroll-wrapper ul.row li').attr('style', 'left:-'+ next +'.1%;-webkit-transition:left 1s;transition:left 1s;');
      i = next;
    }   
});

$(document).on('click', '.slider-previous', function(){
    var previous = i - 10;
    if (i === 0) {
        $('div.scroll-wrapper ul.row li').removeAttr('style');
        $('div.scroll-wrapper ul.row li').attr('style', 'left:-70%;-webkit-transition:left 1s;transition:left 1s;');
        i = 70;
      } else {
        $('div.scroll-wrapper ul.row li').removeAttr('style');
        $('div.scroll-wrapper ul.row li').attr('style', 'left:-'+ previous +'.1%;-webkit-transition:left 1s;transition:left 1s;');
        i = previous;
      }
});














/*if(document.querySelector('#container-slider')){
    setInterval('fntExecuteSlide("next")',5000);
 }
 //------------------------------ LIST SLIDER -------------------------
 if(document.querySelector('.listslider')){
    let link = document.querySelectorAll(".listslider li a");
    link.forEach(function(link) {
       link.addEventListener('click', function(e){
          e.preventDefault();
          let item = this.getAttribute('itlist');
          let arrItem = item.split("_");
          fntExecuteSlide(arrItem[1]);
          return false;
       });
     });
 }
 
 function fntExecuteSlide(side){
     let parentTarget = document.getElementById('slider');
     let elements = parentTarget.getElementsByTagName('li');
     let curElement, nextElement;
 
     for(var i=0; i<elements.length;i++){
 
         if(elements[i].style.opacity==1){
             curElement = i;
             break;
         }
     }
     if(side == 'prev' || side == 'next'){
 
         if(side=="prev"){
             nextElement = (curElement == 0)?elements.length -1:curElement -1;
         }else{
             nextElement = (curElement == elements.length -1)?0:curElement +1;
         }
     }else{
         nextElement = side;
         side = (curElement > nextElement)?'prev':'next';
 
     }
     //RESALTA LOS PUNTOS
     let elementSel = document.getElementsByClassName("listslider")[0].getElementsByTagName("a");
     elementSel[curElement].classList.remove("item-select-slid");
     elementSel[nextElement].classList.add("item-select-slid");
     elements[curElement].style.opacity=0;
     elements[curElement].style.zIndex =0;
     elements[nextElement].style.opacity=1;
     elements[nextElement].style.zIndex =1;
 }*/