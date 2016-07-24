 
//facebook
  var cors_api_url = 'http://localhost:8081/';
  urlField = 'https://www.facebook.com/lucaswillemen/posts/1318278691534458?pnref=story'


var xhr = new XMLHttpRequest();
xhr.open('GET', cors_api_url + urlField, true);
xhr.onload = function(result) {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText.split('feedbacktargets":[')[1].split('],"comments')[0]));
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();





//Instagram
  var cors_api_url = 'http://localhost:8081/';
urlField = 'https://www.instagram.com/p/BHQ23e5gNQi/'


var xhr = new XMLHttpRequest();
xhr.open('GET', cors_api_url + urlField, true);
xhr.onload = function(result) {
    if (xhr.status === 200) {
        console.log(JSON.parse(xhr.responseText.split('window._sharedData = ')[1].split(';</script>')[0]));
    }
    else {
        alert('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send();



