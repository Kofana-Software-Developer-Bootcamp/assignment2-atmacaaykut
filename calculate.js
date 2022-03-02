/* var http = new XMLHttpRequest();
var url = 'http://www.dneonline.com/calculator.asmx?wsdl';
var params = 'orem=ipsum&name=binny';
http.open('POST', url, true);

//Send the proper header information along with the request
http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

http.onreadystatechange = function() {//Call a function when the state changes.
    if(http.readyState == 4 && http.status == 200) {
        alert(http.responseText);
    }
}
http.send(params); */

variable = new XMLHttpRequest();

xhttp.onload = function() {
    // What to do when the response is ready
  }

  xhttp.open("GET", "ajax_info.txt");
xhttp.send();

// Create an XMLHttpRequest object
const xhttp = new XMLHttpRequest();

// Define a callback function
xhttp.onload = function() {
  // Here you can use the Data
}

// Send a request
xhttp.open("GET", "ajax_info.txt");
xhttp.send();

