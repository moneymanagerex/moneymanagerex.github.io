var OSName = 'Unknown OS';
if (navigator.userAgent.indexOf('Win') != -1) {
    if (navigator.userAgent.indexOf('x64') != -1) {
        OSName = 'Windows64';
    } else {
        OSName = 'Windows32';
    }
}
if (navigator.userAgent.indexOf('Mac') != -1) OSName = 'MacOS';
if (navigator.userAgent.indexOf('Linux') != -1) OSName = 'Linux';
if (navigator.userAgent.indexOf('Android') != -1) OSName = 'Android';
if (navigator.userAgent.indexOf('like Mac') != -1) OSName = 'iOS';
console.log('Your OS: ' + OSName);

if ((OSName != 'Unknown OS') && (OSName != 'iOS')) {
    document.getElementById(OSName).className = 'current';
    document.getElementById('show-advanced').className = 'show';
    document.getElementById('list-all').className = '';
} else {
    document.getElementById('list-all').className = 'show';
}