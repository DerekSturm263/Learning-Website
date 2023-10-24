document.addEventListener('DOMContentLoaded', function () {
    switchTab('learn-tab', 'math');
}, false);

function sendEmail(subjectInput, bodyInput) {
    let subjectText = document.getElementById(subjectInput).value;
    let bodyText = document.getElementById(bodyInput).value;

    window.open("mailto:herrerasturmdl@mukilteo.wednet.edu?subject=" + subjectText + "&body=" + bodyText);
}

function switchTab(contentId, tabId) {
    document.getElementById('math').style.display = 'none';
    document.getElementById('art-design').style.display = 'none';
    document.getElementById('c-sharp').style.display = 'none';
    document.getElementById('unity').style.display = 'none';
    document.getElementById('soft-skills').style.display = 'none';

    document.getElementById(tabId).style.display = 'block';
}