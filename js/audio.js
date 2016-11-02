function loadPlayer() {
    var audioPlayer = new Audio();
    audioPlayer.controls="controls";
    audioPlayer.addEventListener('ended',nextSong,false);
    audioPlayer.addEventListener('error',errorFallback,true);
    document.getElementById("player").appendChild(audioPlayer);
    nextSong();
  }
  function nextSong() {
    if(urls[next]!=undefined) {
      var audioPlayer = document.getElementsByTagName('audio')[0];
      if(audioPlayer!=undefined) {
        audioPlayer.src=urls[next];
        audioPlayer.load();
        audioPlayer.play();
        next++;
      } else {
        loadPlayer();
      }
    } else {
      console.log('Fin');
    }
  }
  function errorFallback() {
    nextSong();
  }
  function playPause() {
    var audioPlayer = document.getElementsByTagName('audio')[0];
    if(audioPlayer!=undefined) {
      if (audioPlayer.paused) {
        audioPlayer.play();
      } else {
        audioPlayer.pause();
      }
    } else {
      loadPlayer();
    }
  }
  function pickSong(num) {
    next = num;
    nextSong();
  }

  var urls = new Array();
  urls[0] = 'audio/chronique1.mp3';
  urls[1] = 'audio/chronique2.mp3';
  urls[2] = 'audio/chronique3.mp3';
  urls[3] = 'audio/chronique4.mp3';
  urls[4] = 'audio/chronique5.mp3';
  urls[5] = 'audio/chronique6.mp3';
  var next = 0;