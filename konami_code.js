const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

function init() {
  // Write your JavaScript code inside the init() function
var body = document.querySelector('body');
  body.addEventListener('keydown',function(e){
  
    var key = parseInt(e.detail || e.which);
    var index = 0; 
    if (key===code[index]){
      index ++;
      
      if (index===code.length+1){
           alert ("YAY!"); 
        
        index =0;
      }
    }
    
    else {
      index =0;
    }
   
    
  });
}



