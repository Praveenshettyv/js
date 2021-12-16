var imagePlace = 0;
        var images = ["1", "2", "3", "4", "5", "6", "7"];
        var imagesC = ["111", "222", "FF0000", "00FF00", "0000FF", "000", "333"];

        function startImg() {
            myImage.src = "http://via.placeholder.com/350x150/" + imagesC[imagePlace] + "/fff?text=Image" + images[imagePlace];
            setInterval(swapImage, 3000);
        }

        function swapImage() {
            imagePlace++;
            if (imagePlace >= images.length) {
                imagePlace = 0;
            }
            var myImage = document.getElementById('myImage');
            myImage.src = "http://via.placeholder.com/350x150/" + imagesC[imagePlace] + "/fff?text=Image" + images[imagePlace];
        }