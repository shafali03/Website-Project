
// hide preloader
// all the image script links have finished loading


eventListeners();
function eventListeners() {
    const ui = new UI()

    //preloader
    window.addEventListener('load', function () {
        ui.hidePreloader();
    })

    // nav btn
    document.querySelector('.navBtn').addEventListener('click', function () {
        ui.showNav()
    })
    // control the video
    document.querySelector('.video__switch').addEventListener('click', function () {
        ui.videoControls()
    })

}


//constructor function
function UI() {

}

// hide reloader
UI.prototype.hidePreloader = function () {
    document.querySelector('.preloader').style.display = "none";
}

// show nav
UI.prototype.showNav = function () {
    document.querySelector('.nav').classList.toggle('nav--show');
}

UI.prototype.videoControls = function () {
    document.querySelector(.)
}