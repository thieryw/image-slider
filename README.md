# image-slider
image slider with fade animation and autoplay

## Usage

include the "slider.js" file at the bottom of your html file.

Call the folowing functions:

```javascript

let slider = new slider(document.getElementsByClassName("imageClassName"),
                        document.getElementById("prevArrow") 'optional; replace with null.'
                        document.getElementById("nextArrow") 'optional; replace with null.'
                        indexOfTheFirstImageYouWantToShow);

slider.basicSliderLayout();

slider.prevNextSlide(); 'optional; only if you have prev and next arrow.'

slider.autoPlay(timeBetweenSlides);


```
