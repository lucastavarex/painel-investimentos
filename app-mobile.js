document.addEventListener("DOMContentLoaded", function () {
    var playButton = document.getElementById("play-button");
    var playButton2 = document.getElementById("play-button-2");
    var overlay = document.getElementById("overlay");
    var closeButton = document.getElementById("close-button");
    var player;
    var player2;
  
    function openVideo(videoId) {
      overlay.style.display = "flex";
  
      if (!player) {
        player = new YT.Player("player-container", {
          videoId: videoId,
          playerVars: {
            controls: 1,
            autoplay: 1
          },
          width: 1000,
          height: 700
        });
      } else {
        player.loadVideoById(videoId); // Carrega o vídeo pelo ID
      }
    }
  
    playButton.addEventListener("click", function () {
      openVideo("tXxTIJKBf30"); // ID do primeiro vídeo
    });
  
    playButton2.addEventListener("click", function () {
      openVideo("tXxTIJKBf30"); // ID do segundo vídeo
    });
  
    closeButton.addEventListener("click", function () {
      overlay.style.display = "none";
  
      if (player) {
        player.stopVideo();
      }
      if (player2) {
        player2.stopVideo();
      }
    });
  });
  