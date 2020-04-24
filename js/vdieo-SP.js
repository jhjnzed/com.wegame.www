
        var vol = 0.1; //1代表100%音量，每次增减0.1

        var time = 10; //单位秒，每次增减10秒
        // document.getElementById("shipin").volume = 0;

        var videoElement = document.getElementById("shipin");
        // console.log(videoElement.paused);
        videoElement.volume = 0;
        document.onkeyup = function (event) { //键盘事件

            // console.log("keyCode:" + event.keyCode);

            var e = event || window.event || arguments.callee.caller.arguments[0];

            if (e && e.keyCode === 38) {
                videoElement.volume !== 1 ? videoElement.volume += vol : 1;
                return false;
            } else if (e && e.keyCode === 40) {
                videoElement.volume !== 0 ? videoElement.volume -= vol : 1;

                return false;

            } else if (e && e.keyCode === 37) {
                videoElement.currentTime !== 0 ? videoElement.currentTime -= time : 1;

                return false;
            } else if (e && e.keyCode === 39) {
                videoElement.volume !== videoElement.duration ? videoElement.currentTime += time : 1;

                return false;

            } else if (e && e.keyCode === 32) {

                videoElement.paused === true ? videoElement.play() : videoElement.pause();

                return false;

            }
        };