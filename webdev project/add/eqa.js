$( ".equalizer-btn" ).click(function() {
    $('ul').children().toggleClass('playEqualizer');
    $('.equalizer-btn').toggleClass('active');
  });




   function move(){
          const center=document.getElementById('center12');
          const ch=document.getElementById('ch1');
          const rectangle=document.getElementById('rect');
          const rectangle2=document.getElementById('rect2');
          const v13=document.getElementById('v13a');
          const sm4=document.getElementById('sm4w');
          const vector=document.getElementById('vec');
          const text=document.getElementById('tex');
          const hb=document.getElementById('t');
          const sp=document.getElementById('ssp');
          const reverse=document.getElementById('rev');
          const v1=document.getElementById('line1');
         
         

          
          center.style.width="100px";
          center.style.height="100px";
          center.style.cursor="pointer";
          center.style.transform="translate(560px,160px)";
          ch.style.opacity='0';
          rectangle.style.opacity='1';
          rectangle.style.width="50%";
          v13.style.display="inline";
          sm4.style.display= "inline";
          rectangle2.style.height="300px";
          rectangle2.style.width="600px";
          rectangle2.style.display="inline";
          rectangle2.style.border="3px solid gray";
          vector.style.opacity='1';
          text.style.opacity='1'; 
          hb.style.opacity='1';
          reverse.style.opacity='1';
          v1.style.opacity='0';
         
         
      }

      var track=document.getElementById('track');
      var controlbtn=document.getElementById('playpause');
     function playpause(){
         if(track.paused){
             track.play();
             controlbtn.className="pause";
         }
         else{
             track.pause();
             controlbtn.className="play";
         }
     }
     controlbtn.addEventListener("click", playpause);
     track.addEventListener("ended", function()
     {
         controlbtn.className="play";
     });


function reverse(){

    const center=document.getElementById('center12');
          const ch=document.getElementById('ch1');
          const rectangle=document.getElementById('rect');
          const rectangle2=document.getElementById('rect2');
          const v13=document.getElementById('v13a');
          const sm4=document.getElementById('sm4w');
          const vector=document.getElementById('vec');
          const text=document.getElementById('tex');
          const hb=document.getElementById('t');
          const sp=document.getElementById('ssp');
        //   const reverse=document.getElementById('rev');
          const v1=document.getElementById('line1');
        
         
         

          
          center.style.width="200px";
          center.style.height="200px";
        //   center.style.cursor="pointer";
          center.style.transform="translate(-50%, -50%)";
          ch.style.opacity='1';
          rectangle.style.opacity='0';
          rectangle.style.width="0%";
        //   v13.style.display="hidden";
          sm4.style.display= "hidden";
          rectangle2.style.height="0";
          rectangle2.style.width="0";
          rectangle2.style.display="hidden";
          rectangle2.style.border="3px solid white";
          vector.style.opacity='0';
          text.style.opacity='0'; 
          hb.style.opacity='0';
        //   reverse.style.opacity='1';
        v1.style.opacity='1';
        v13.style.opacity='0';
         






}
