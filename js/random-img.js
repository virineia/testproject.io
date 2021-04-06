
var itemImageSnacks;
var itemImageResults;
var listLogo = [];
var listSnacks = [];
var listResults = [];
var pathFolder = window.location.pathname
var dirLogos = pathFolder + "images/logos/";
var dirResults = pathFolder + "images/results/";
var dirSnacks = pathFolder + "images/snacks/";
var fileExtension = ".svg"



  
  
  function setCookie(name,value,minutes) {
    var expires = "";
    if (minutes) {
        var date = new Date();
        date.setTime(date.getTime() + (minutes*60*1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "")  + expires + "; path=/";
  }
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }  
    return null;  
  }
  function eraseCookie(name) {   
    
    document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
  }
  

if(getCookie('cookieListLogo', 'cookieListSnacks', 'cookieListResults') !== null){
  listLogo = JSON.parse(getCookie('cookieListLogo'));
  listSnacks = JSON.parse(getCookie('cookieListSnacks'));
  listResults = JSON.parse(getCookie('cookieListResults'));  
  
}else{
  for (let i = 1; i <= 16; i++){
    listLogo.push(dirLogos + i + fileExtension);
    listSnacks.push(dirSnacks + i + fileExtension);
    listResults.push(dirResults + i + fileExtension);
  }
  listLogo.forEach((url) => {
    $.ajax({
      url: url,
      type: 'HEAD',
      error: function() {			
        listLogo.splice($.inArray(url, listLogo), 1);
        setCookie("cookieListLogo", JSON.stringify(listLogo), 7)
      },
      success: function() {
              
      }
    });
  });
  
  

  listSnacks.forEach((url) => {
    $.ajax({
      url: url,
      type: 'HEAD',
      error: function() {			
        listSnacks.splice($.inArray(url, listSnacks), 1);
        setCookie("cookieListSnacks", JSON.stringify(listSnacks), 7)
      },
      success: function() {
              
      }
    });

  });


  listResults.forEach((url) => {
    $.ajax({
      url: url,
      type: 'HEAD',
      error: function() {			
        listResults.splice($.inArray(url, listResults), 1);
        setCookie("cookieListResults", JSON.stringify(listResults), 7)
      },
      success: function() {
              
      }
    });
  
  });
  
    
}

