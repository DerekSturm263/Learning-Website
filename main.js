function sendEmail(subjectInput, bodyInput) {
    let subjectText = document.getElementById(subjectInput).value;
    let bodyText = document.getElementById(bodyInput).value;

    window.open("mailto:herrerasturmdl@mukilteo.wednet.edu?subject=" + subjectText + "&body=" + bodyText);
}
