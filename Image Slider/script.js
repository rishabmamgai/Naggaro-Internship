const slides = document.getElementsByClassName('slide');

var currSlide = 1;
var minSlide = 1;
var maxSlide = slides.length;
 
slides[0].style.display = 'block';
document.getElementById('mark' + currSlide).style.color = 'mediumblue';


document.getElementById('left').addEventListener('click', function() {    
    var slideTo = currSlide - 1;
    if(slideTo < minSlide)
        slideTo = maxSlide;
    
    document.getElementById(currSlide).style.display = 'none';
    document.getElementById('mark' + currSlide).style.color = 'darkturquoise';
    document.getElementById(slideTo).style.display = 'block';
    document.getElementById('mark' + slideTo).style.color = 'mediumblue';
    currSlide = slideTo;
})

document.getElementById('right').addEventListener('click', function() {    
    var slideTo = currSlide + 1;
    if(slideTo > maxSlide)
        slideTo = minSlide;
        
    document.getElementById(currSlide).style.display = 'none';
    document.getElementById('mark' + currSlide).style.color = 'darkturquoise';
    document.getElementById(slideTo).style.display = 'block';
    document.getElementById('mark' + slideTo).style.color = 'mediumblue';
    currSlide = slideTo;
})
