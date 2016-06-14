btr=0;
$(document).ready(function(){
    var controls = {
        video: $("#myvideo"),
        playpause: $("#playpause"),
        dynamic: $("#volume"), 
        blurb: $("#blurb")
        
      
                      
    };
                
    var video = controls.video[0];
    var blurb = controls.blurb[0];
    

    controls.playpause.click(function(){
        
        if (video.paused) {
            video.play();
            $(this).text("||");    
        } else {
            video.pause();
            $(this).text("►");
        }
                
        $(this).toggleClass("paused"); 

        });

//---------------------------------------

video.addEventListener("ended", function() {
    video.pause();
    controls.playpause.text("►");
    controls.playpause.toggleClass("||");
});


//-----------------------------------------------

controls.blurb.click(function() {
   //alert( 'hi low' );
link='http://google.com';
window.open(link, "text", '')

video.pause();
/*

*/
});


controls.dynamic.click(function() {
    var classes = this.getAttribute("class");

    if (new RegExp('\\boff\\b').test(classes)) {
        classes = classes.replace(" off", "");
    } else {
        classes = classes + " off";
    }

    this.setAttribute("class", classes);
                    
    video.muted = !video.muted;
});



//-----------------------------------------------


    
 if (btr==0) {
    $(' #playpause').click( function(event){ // лoвим клик пo ссылки с
        event.preventDefault(); // выключaем стaндaртную рoль элементa
         $('#gg').css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;



         video.pause();    
         blurb.play();
         $('#controls').css('display','none')

         
        });

    blurb.addEventListener("ended", function() {
    blurb.pause();
    $('#gg')
        .css('display', 'none')  
          video.play(); 

    $('#controls').css('display','inline-block')

   
        });

    btr+=1;
}

$('#modal_close').click( function(){
    $('#bphot') .css('opacity','0')



});

$('#FS').click(function(event){

if (video.requestFullscreen) {
  video.requestFullscreen();
} else if (video.mozRequestFullScreen) {
  video.mozRequestFullScreen();
} else if (video.webkitRequestFullscreen) {
  video.webkitRequestFullscreen();
}

});



/***/
}); 


