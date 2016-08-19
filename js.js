function getXmlHttp() {
    var xmlhttp;
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
      xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
  }


function page(){
data.name=document.getElementsByName("nname")[0].value;
data.fname=document.getElementsByName("fname")[0].value;
data.oname=document.getElementsByName("oname")[0].value;
data.num=document.getElementsByName("num")[0].value;
data.email=document.getElementsByName("email")[0].value;
var d = JSON.stringify(data);
var pr = JSON.stringify(products);
 var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'https://script.google.com/macros/s/AKfycbyMWF3JUIpDxZDazzneFRbGxcQpzQxVot1HKmqzNUWtIi2mL9Rn/dev', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("pr=" + encodeURIComponent(pr)+"&d=" + encodeURIComponent(d) ); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
          document.getElementById("z").innerHTML = xmlhttp.responseText; // Выводим ответ сервера
        }
      }
    };
}








