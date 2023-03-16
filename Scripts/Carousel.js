$(document).ready(function () {
    const slides = document.querySelectorAll(".slide");

    // loop through slides and set each slides translateX property to index * 100% 
    slides.forEach((slide, indx) => {
        slide.style.transform = `translateX(${indx * 100}%)`;
    });

    // select next slide button
    const nextSlide = document.querySelector(".btn-next");

    // current slide counter
    var curSlide = 0;
    // maximum number of slides
    let maxSlide = slides.length - 1;

    // add event listener and navigation functionality
    nextSlide.addEventListener("click", function () {
        // check if current slide is the last and reset current slide
        if (curSlide === maxSlide) {
            curSlide = 0;
        } else {
            curSlide++;
        }

        //   move slide by -100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });


    // select prev slide button
    const prevSlide = document.querySelector(".btn-prev");

    // add event listener and navigation functionality
    prevSlide.addEventListener("click", function () {
        // check if current slide is the first and reset current slide to last
        if (curSlide === 0) {
            curSlide = maxSlide;
        } else {
            curSlide--;
        }

        //   move slide by 100%
        slides.forEach((slide, indx) => {
            slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
        });
    });



    // var DogsData = [
    //     {
    //         "DogId": 1,
    //         "Name": "Hunter",
    //         "Description": "Perrito jugeton y amigable",
    //         "Age": 6
    //     },
    //     {
    //         "DogId": 2,
    //         "Name": "Firulais",
    //         "Description": "Perrito Feroz",
    //         "Age": 8
    //     },
    //     {
    //         "DogId": 3,
    //         "Name": "Solovino",
    //         "Description": "Perrito Militar",
    //         "Age": 10
    //     }
    // ];



    // function setName() {
    //     var dog = DogsData.find(e => e.DogId == curSlide + 1);
    //     $(".DogName").html(dog.Name);
    //     $(".DogContent").html(dog.Description);
    //     $(".DogAge").html("Age:  "+ dog.Age);
    // };

    // setName();

    function switchContent() {
        if (curSlide == 0){
            $(".dogInfo1").css("display", "block");
            $(".dogInfo2").css("display", "none");
            $(".dogInfo3").css("display", "none");
        } 

        if (curSlide == 1) {
            $(".dogInfo1").css("display", "none");
            $(".dogInfo2").css("display", "block");
            $(".dogInfo3").css("display", "none");
        }

        if (curSlide == 2) {
            $(".dogInfo1").css("display", "none");
            $(".dogInfo2").css("display", "none");
            $(".dogInfo3").css("display", "block");
        }      
    }

    $(".btn-next").on("click", function () {
        switchContent();
        // setName();
    });

    $(".btn-prev").on("click", function () {
        switchContent();
        // setName();
    });

})
