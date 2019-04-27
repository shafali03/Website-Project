
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
    //submit the form
    document.querySelector('.drink-form').addEventListener('submit', function (event) {
        event.preventDefault();
        const name = document.querySelector('.input-name').value;
        const lastName = document.querySelector('.input-lastname').value;
        const email = document.querySelector('.input-email').value;

        let value = ui.checkEmpty(name, lastName, email)

        if (value) {
            ui.showFeedBack('Thanks you', 'success');
            ui.clearFields();
        }
        else {
            ui.showFeedBack('some form value are empty', 'error')
        }
    })
}











//constructor function ============================================
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

//control video play or pause
UI.prototype.videoControls = function () {
    let btn = document.querySelector('.video__switch-btn');
    if (!btn.classList.contains('btnSlide')) {
        btn.classList.add('btnSlide')
        document.querySelector('.video__item').pause()
    }
    else {
        btn.classList.remove('btnSlide')
        document.querySelector('.video__item').play()
    }
}

// check for empty value

UI.prototype.checkEmpty = function (name, lastname, email) {
    let result;
    if (name === '' || lastname === '' || email === '') {
        result = false;
    }
    else {
        result = true;
    }
    return result;
}

UI.prototype.showFeedBack = function (text, type) {
    const feedback = document.querySelector('.drink-form__feedback');

    if (type === 'success') {
        feedback.classList.add('success');
        feedback.innerText = text;
        this.removeAlert('success');

    }
    else if (type === 'error') {
        feedback.classList.add('error');
        feedback.innerText = text;
        this.removeAlert('error');
    }
}

// remove alert

UI.prototype.removeAlert = function (type) {
    setTimeout(function () {
        document.querySelector('.drink-form__feedback').classList.remove(type)
    }, 3000)
}

// clear fields

UI.prototype.clearFields = function () {
    document.querySelector('.input-name').value = '';
    document.querySelector('.input-lastname').value = '';
    document.querySelector('.input-email').value = '';

}