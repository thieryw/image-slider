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

            self.currentSlideIndex = self.currentSlideIndex === slides.length - 1 ?
                                     0 : self.currentSlideIndex + 1;

            self.fadeInAnimation(slides[self.currentSlideIndex]);

            return;
        }

        _time += 100;

        if(self.nextArrow && self.prevArrow){
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
    let index;

    for(const arrow of [prev, next]){

        arrow.addEventListener("click", ()=>{

            index = this.currentSlideIndex;

            slides[index].style.display = "none";
            slides[index].style.opacity = `${0}`;

            arrow === next ? (index = index === slides.length - 1 ?
                              0 : index + 1) : 
                              (index = index === 0 ?
                              slides.length - 1 : index - 1);

            this.fadeInAnimation(slides[index]);

            this.currentSlideIndex = index;

        });
    }
}




