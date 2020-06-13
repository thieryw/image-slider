function Slider(slides, prevArrow, nextArrow){
    this.slides = slides;
    this.prevArrow = prevArrow;
    this.nextArrow = nextArrow;
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



Slider.prototype.autoPlay = function autoPlay(time, animation){

    let self = this;
    const slides = self.slides;
    let _time = 0;

    let timer = setInterval(function(){

        if(_time >= time){

            _time = 0;

            self.nextSlide(true, animation);

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


Slider.prototype.slideToEndOrBegining = function slideToEndOrBegining(isEnd, wrapper, currentOffset){


    const offset = isEnd ? 0 : 100 * (this.slides.length - 1);

    let timer = setInterval(function(){

        if(currentOffset === offset){
            clearInterval(timer);
        }

        wrapper.style.right = isEnd ? `${currentOffset -= 2}%` : `${currentOffset += 2}%`;

    }, 1);

}


Slider.prototype.slideAnimation = function slideAnimation(isForwadds){

    const wrapper = document.getElementById("wrapper");
    let currentOffset = this.currentSlideIndex * 100;
    let persentatges = 0;

    if((this.currentSlideIndex === this.slides.length - 1) && isForwadds){

        this.slideToEndOrBegining(true, wrapper, currentOffset);

        return;
    }

    if((this.currentSlideIndex === 0) && !isForwadds){

        this.slideToEndOrBegining(false, wrapper, currentOffset);

        return;
    }

    let timer = setInterval(function(){
        if(persentatges === 100){
            clearInterval(timer);
            return;
        }

        wrapper.style.right = isForwadds ? `${currentOffset += 1}%` :
                            `${currentOffset -= 1}%`;

        persentatges += 1;

    }, 4);
}



Slider.prototype.nextSlide = function nextSlide(isForwadds, animation){

    const currentIndex = this.currentSlideIndex;

    if(animation === "slide"){
        this.slideAnimation(isForwadds);
    }

    let index = isForwadds ? (this.currentSlideIndex === this.slides.length - 1 ?
        0 : this.currentSlideIndex + 1) : (
            this.currentSlideIndex === 0 ?
            this.slides.length - 1 : this.currentSlideIndex - 1
        );

    this.currentSlideIndex = index;



    if(animation === "fade"){
        this.slides[currentIndex].style.display = "none";
        this.slides[currentIndex].style.opacity = `${0}`;   

        this.fadeInAnimation(this.slides[index]);
    }





}


Slider.prototype.playSlider = function prevNextSlide(isAutoplay, time, animation){

    if(isAutoplay){
        this.autoPlay(time, animation);
    }

    const prev = this.prevArrow;
    const next = this.nextArrow;

    for(const arrow of [prev, next]){

        arrow.addEventListener("click", ()=>{

            if(arrow === prev){
                this.nextSlide(false, animation);
                return;
            }

            this.nextSlide(true, animation);

        });
    }
}




