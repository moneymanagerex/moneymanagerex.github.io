if(localStorage.getItem('cookieSeen') != 'shown')
  {
    document.getElementById("cookieconsent").style.display = 'block';
  }

  document.getElementById("cookieclose").onclick = function() 
  {
    document.getElementById("cookieconsent").style.display = 'none';
    localStorage.setItem('cookieSeen','shown')
  };