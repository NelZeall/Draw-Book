  function draw(){
                var canvas = document.getElementById("canvas");
                var ctx = canvas.getContext("2d");
                ctx.fillStyle = "rgba(125, 46, 138, 0.5)";
                ctx.fillRect(25,25,100,100);
                ctx.fillStyle = "rgba( 0, 146, 38, 0.5)";
                ctx.fillRect(58, 74, 125, 100);
            
            }

            function downloadImage()
            {
                var canvas = document.getElementById("canvas");
                var image = canvas.toDataURL();

                var aLink = document.createElement('a');
                var evt = document.createEvent("HTMLEvents");
                evt.initEvent("click");
                aLink.download = 'image.png';
                aLink.href = image;
                aLink.dispatchEvent(evt);
            }

