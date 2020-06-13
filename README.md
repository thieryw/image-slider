# image-slider
A verry simple and easy to use image slider.

## Features

1) fade and slide animations.

2) autoplay option.



## Usage

1) include the "slider.js" file at the bottom of your html file.

2) initialize slider object:

```javascript



let slider = new slider(document.getElementsByClassName("imageClassName"),
                        document.getElementById("prevArrow"),                       document.getElementById("nextArrow"));

```

Previous and next arrows are optional. you can have the slider runing automaticaly
with Autoplay.

3) Call the playSlider function:

```javascript

slider.playSlider(true, 3000, "slide");

```

first argument is for autoplay;

second argument is time between slides. set to null if autoplay is false;

third argument is the animation. you can choose beetween "fade" and "slide";


## html file example:

```html
<!DOCTYPE html>
<html>

    <head>
        <meta charset="utf-8">
        <title>slider</title>
        <link rel="stylesheet" href="./main.css">
    </head>

    <body>
        <h1>A verry simple image slider with autoplay</h1>
        <div class="sliderWrapper">
            <p id="prev">&lt</p>
            <p id="next">&gt</p>

            <div class="flex">

                <div class="imageWrapper" id="wrapper">
                    <img class="sliderImage" src="./media/1.jpg" alt="img">
                    <img class="sliderImage" src="./media/2.jpg" alt="img">
                    <img class="sliderImage" src="./media/3.jpg" alt="img">
                    <img class="sliderImage" src="./media/4.jpg" alt="img">
                    <img class="sliderImage" src="./media/5.jpg" alt="img">
                </div>

            </div>

        </div>




        <script src="./slider.js"></script>

        <script>
            let slider = new Slider(document.getElementsByClassName("sliderImage"),
            document.getElementById("prev"), document.getElementById("next"));

                    
            slider.playSlider(true, 3000, "slide");
                    
        </script>
        
    </body>
</html>
```


