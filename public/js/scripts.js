$(document).ready(function () {
    $('.materialboxed').materialbox();
    $('.modal').modal();

    // Add a click event listener to the "Click Me" button
    $('#clickMeButton').click(() => {
        openLoginModal();
    });

    // Handle login form submission
    $('#loginForm').submit(function (e) {
        e.preventDefault();
        submitLoginForm();
    });
});

const openLoginModal = () => {
    // Open the login modal
    $('#modal1').modal('open');
}

const clickMe = () => {
    openLoginModal();
    alert("Thanks for visiting the website! Have a nice day.");
}

const submitLoginForm = () => {
    let formData = {};
    formData.email = $('#login_email').val();
    formData.password = $('#login_password').val();
    console.log("Login Form Data Submitted: ", formData);
}




