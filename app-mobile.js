document.addEventListener("DOMContentLoaded", function () {
    var playButton = document.getElementById("play-button");
    var overlay = document.getElementById("overlay");
    var closeButton = document.getElementById("close-button");
    var player;
  
    playButton.addEventListener("click", function () {
      overlay.style.display = "flex";
  
      // Criar o player do YouTube quando o botão é clicado
      if (!player) {
        player = new YT.Player("player-container", {
          videoId: "tXxTIJKBf30",  // ID do vídeo do YouTube
          playerVars: {
            controls: 1,  // Esconder os controles padrão do YouTube
            autoplay: 1   // Iniciar a reprodução automaticamente
          },
          width: 1000,      // Largura do vídeo em pixels
          height: 700      // Altura do vídeo em pixels
        });
      }
    });
  
    closeButton.addEventListener("click", function () {
        overlay.style.display = "none";
      
        // Pausar o vídeo quando o modal é fechado
        if (player) {
          player.stopVideo();
        }
      });
      
  });
 