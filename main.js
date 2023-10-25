document.addEventListener('DOMContentLoaded', function () {
    switchTab('learn-tab', 'math');
    switchTab('home-tabs', 'daily-slides');
}, false);

function sendEmail(subjectInput, bodyInput) {
    let subjectText = document.getElementById(subjectInput).value;
    let bodyText = document.getElementById(bodyInput).value;

    window.open("mailto:herrerasturmdl@mukilteo.wednet.edu?subject=" + subjectText + "&body=" + bodyText);
}

function switchTab(contentId, tabId) {
    if (contentId == 'learn-tab')
    {
        document.getElementById('math').style.display = 'none';
        document.getElementById('art-design').style.display = 'none';
        document.getElementById('c-sharp').style.display = 'none';
        document.getElementById('unity').style.display = 'none';
        document.getElementById('soft-skills').style.display = 'none';
    }
    else
    {
        document.getElementById('daily-slides').style.display = 'none';
        document.getElementById('links').style.display = 'none';
        document.getElementById('calendar').style.display = 'none';
        document.getElementById('learn').style.display = 'none';
        document.getElementById('syllabus').style.display = 'none';
        document.getElementById('contact-me').style.display = 'none';
    }

    document.getElementById(tabId).style.display = 'block';
}