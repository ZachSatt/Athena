$(document).ready(function(){
  
    let mousePos = {};
  
   function getRandomInt(min, max) {
     return Math.round(Math.random() * (max - min + 1)) + min;
   }
    
    $(window).mousemove(function(e) {
      mousePos.x = e.pageX;
      mousePos.y = e.pageY;
    });
    
    $(window).mouseleave(function(e) {
      mousePos.x = -1;
      mousePos.y = -1;
    });
    
    let draw = setInterval(function(){
      if(mousePos.x > 0 && mousePos.y > 0){
        
        let range = 20;
        
        let color = "background: rgb("+getRandomInt(0,300)+","+getRandomInt(0,300)+","+getRandomInt(0,300)+");";
        
        let sizeInt = getRandomInt(10, 30);
        let size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
        
        let left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
        
        let top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 
  
        let style = left+top+color+size;
        $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
      }
    }, 1);
});
