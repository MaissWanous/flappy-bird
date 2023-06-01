
$(".container").hide();
$(".game-over").hide();
$(document).keypress(function play(event) {
   if (event.keyCode === 13) //enter

   {
      $(".message").hide();
      $(".container").show();

      $(document).on("keydown", function (e) {

         var x = document.getElementById("ele");

         switch (e.keyCode) {

            case 38: //top arrow

               $("#ele").css("top", x.offsetTop - x.offsetTop * 0.3 + "px");
               var audio = new Audio("yellow.mp3");
               audio.play();
            case 40: //down arrow

               $("#ele").css("top", x.offsetTop + x.offsetTop * 0.2 + "px");
               var audio = new Audio("yellow.mp3");
               audio.play();
         }
      });
      var hole = document.getElementById("hole");
      var block = document.querySelector(".pipe_sprite");
      var score = 0 ;
      hole.addEventListener("animationiteration", () => {
         var random = Math.random() * 3;
         var top = (random * 100) + 50;
         hole.style.top = top + "px";
         score++;
         $(".score_val").text(score);
         
      });
       var gameOver =  setInterval(() => {
         var bird = document.getElementById("ele");
         var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
         bird.style.top = (birdTop + 3) + "px";
         var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));  
          var holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
         if (birdTop > 550 || ((blockLeft<200)&&(blockLeft>-53)&&((birdTop<holeTop)||(birdTop>holeTop+110)))) {
            var audio = new Audio("wrong.mp3");
            audio.play();
            $(".container").hide();
            $(".game-over span").text(score);
            $(".game-over").show();
            $(document).keypress(function (event) {
               if (event.keyCode === 13) //enter
            {
               score=0;
               birdTop.style.top = 100;
               $(".game-over").hide();
               $(".container").show();
               $(".message").hide();            
            }})
            clearInterval(gameOver);
         }
      }, 100);
   }
});