// Determine build details

let osDetails = {
    icon: 'fa-question-circle',
    name: 'Unknown OS'
};

if (navigator.userAgent.indexOf('Win') != -1) {
    osDetails.icon = 'fa-windows';
    if (navigator.userAgent.indexOf('x64') != -1) 
    {
        osDetails.name ='Windows 64'
    } else {
        osDetails.name = 'Windows 32'
    }
}

if (navigator.userAgent.indexOf('Mac') != -1)
{
    osDetails.icon = 'fa-apple';
    osDetails.name = 'MacOS'
}

if (navigator.userAgent.indexOf('like Mac') != -1)
{
    osDetails.icon = 'fa-question-circle';
    osDetails.name = 'Unknown OS'    
}

updateOsDownloadButton(osDetails);


function updateOsDownloadButton(osDetails) {
  let iconHtml = '<i class="fa-brands ' + osDetails.icon + '"></i>'
  document.querySelector('.btn-download-os').innerHTML =  iconHtml + '&nbsp;Download for ' + osDetails.name
}

