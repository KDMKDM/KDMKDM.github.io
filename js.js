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
if ( /\s/.test("строка") ) {
alert("ASD");
}
	if (document.getElementsByName("nname")[0].value!="") {
		data.name=document.getElementsByName("nname")[0].value;
	}else{
		
		return alert("Введите имя");
	}
	if (document.getElementsByName("fname")[0].value!="") {
		data.fname=document.getElementsByName("fname")[0].value;
	}else{
		
		return alert("Введите фамилию");
	}

	if (document.getElementsByName("oname")[0].value!="") {
data.oname=document.getElementsByName("oname")[0].value;
	}else{
		
		return alert("Введите отчество");
	}
	if (document.getElementsByName("num")[0].value!="") {
data.num=document.getElementsByName("num")[0].value;
	}else{
		
		return alert("Введите адрес доставки");
	}
	if (document.getElementsByName("fnum")[0].value!="") {
data.num=document.getElementsByName("fnum")[0].value;
	}else{
		
		return alert("Введите почтовый индекс");
	}

	if (document.getElementsByName("email")[0].value!="") {
		if ( /^[-\w.]+@([A-z0-9][-A-z0-9]+\.)+[A-z]{2,4}$/.test(document.getElementsByName("email")[0].value) ) {
data.email=document.getElementsByName("email")[0].value;
}else{
	return alert("Введен не верный Email адрес");
}
		
//
	}else{
		
		return alert("Введите Email");
	}

	 document.getElementById("dwn").src ="img\\dwnA.gif";
	 document.getElementById("main").style.display ="none";
var d = JSON.stringify(data);
var pr = JSON.stringify(products);
 var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'https://script.google.com/macros/s/AKfycbyMWF3JUIpDxZDazzneFRbGxcQpzQxVot1HKmqzNUWtIi2mL9Rn/dev', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("pr=" + encodeURIComponent(pr)+"&d=" + encodeURIComponent(d) ); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
			document.getElementById("dwn").src ="img\\dwn.gif";
          document.getElementById("z").innerHTML = "<p class='asd' >"+xmlhttp.responseText+"</p><p class='asd' ><a href='' onclick='restart()'>Заказать еще?</a></p>"; // Выводим ответ сервера
        }
      }
    };
}


function restart(){
	sessionStorage.clear();
	location.href = 'https://kdmkdm.github.io';

}





