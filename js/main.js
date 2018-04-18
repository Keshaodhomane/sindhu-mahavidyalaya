
    $(document).ready(function(){
    
    
        function switchStyleSheets(theme){
            $('link[title="theme"]').attr('href', theme);
            }
          
          $(document).ready(function(){
              
              
              $('#black').click(function(event){
                  event.preventDefault();
                  switchStyleSheets(
                      'css/black.css'
                  );
              });
              
                      
              $('#default').click(function(event){
                  event.preventDefault();
                  switchStyleSheets(
                      'css/default.css'        
                  );
              });
              
              
              
              $('#orange').click(function(event){
                  event.preventDefault();
                  switchStyleSheets(
                      'css/orange.css'        
                  );
              });
              
              
              
              
              $('#green').click(function(event){
                  event.preventDefault();
                  switchStyleSheets(
                      'css/green.css'
                  );
              });
              
          });
              
                            
              
              
              
              /* this changes font size of */
          
              var originalSize = $('div').css('font-size');
              // reset
              $(".resetMe").click(function(){
              $('div').css('font-size', originalSize); 
          
              });
          
              // Increase Font Size
              $(".increase").click(function(){
              var currentSize = $('div').css('font-size');
              var currentSize = parseFloat(currentSize)*1.2;
              $('div').css('font-size', currentSize);
          
              return false;
              });
          
              // Decrease Font Size
              $(".decrease").click(function(){
              var currentFontSize = $('div').css('font-size');
              var currentSize = $('div').css('font-size');
              var currentSize = parseFloat(currentSize)*0.8;
              $('div').css('font-size', currentSize);
          
              return false;
              });




              $(".owl-carousel").owlCarousel({

                loop:true,
            
                margin:10,
            
                autoplay:true,
            
                responsive:{
                    0:{
                        items:1
                    },
                    600:{
                        items:3
                    },
                    1000:{
                        items:3
                    }
                }
            })






          
            })