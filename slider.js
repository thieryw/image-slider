function Slider(slides, prevArrow, nextArrow, currentSlideIndex){
    this.slides = slides;
    this.prevArrow = prevArrow;
    this.nextArrow = nextArrow;
    this.currentSlideIndex = currentSlideIndex;

}

Slider.prototype.basicSliderLayout = function basicSlider(){
    for(const slide of this.slides){
        if(slide === this.slides[this.currentSlideIndex]){
            continue;
        }

        slide.style.display = "none";
        slide.style.opacity = `${0}`;
    }

    this.currentSlideIndex = 0;

}

Slider.prototype.fadeInAnimation = function fadeInAnimation(slide){
    let currentOpacity = 0;
    slide.style.display = "inline";

    let timer = setInterval(function(){

        if(currentOpacity >= 1){
            clearInterval(timer);
            return;
        }

        slide.style.opacity = `${currentOpacity += 0.1}`;

    }, 20);
        
}

Slider.prototype.autoPlay = function autoPlay(time){

    let self = this;
    const slides = self.slides;
    let _time = 0;


    let timer = setInterval(function(){

        if(_time >= time){

            _time = 0;
            slides[self.currentSlideIndex].style.display = "none";
            slides[self.currentSlideIndex].style.opacity = `${0}`;

            if(self.currentSlideIndex === slides.length - 1){

                self.currentSlideIndex = 0;
                self.fadeInAnimation(slides[self.currentSlideIndex]);
                return;
            }

            self.currentSlideIndex++;
            self.fadeInAnimation(slides[self.currentSlideIndex]);

            return;
        }

        _time += 100;

        if(self.nextArrow && self.prevArrow){
            console.log("ok");
            for(const arrow of [self.nextArrow, self.prevArrow]){
                arrow.addEventListener("click", ()=>{
                    _time = 0;
                });
            }
        }






    }, 100);
    
}

Slider.prototype.prevNextSlide = function prevNextSlide(){

    const prev = this.prevArrow;
    const next = this.nextArrow;
    const slides = this.slides;

    for(const arrow of [prev, next]){
        arrow.addEventListener("click", ()=>{

            slides[this.currentSlideIndex].style.display = "none";
            slides[this.currentSlideIndex].style.opacity = `${0}`;

            if(arrow === next){
                if(this.currentSlideIndex === slides.length - 1){
                    this.currentSlideIndex = 0;
                    this.fadeInAnimation(slides[this.currentSlideIndex]);
                    return;
                }

                this.currentSlideIndex++;
                this.fadeInAnimation(slides[this.currentSlideIndex]);
                return;
            }

            if(this.currentSlideIndex === 0){
                this.currentSlideIndex = slides.length - 1;
                this.fadeInAnimation(slides[this.currentSlideIndex]);
                return;
            }

            this.currentSlideIndex--;
            this.fadeInAnimation(slides[this.currentSlideIndex]);

        });

    }

}




