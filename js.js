function autosize() {

	  VK.callMethod("scrollWindow", 200, 500);
	  VK.callMethod("resizeWindow", 500, 500);

    }


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
	var t =sessionStorage.getItem("products");
	if (t=="{}") {
		return 		alert("Не выбрано ни одного товара :'(");
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
data.fnum=document.getElementsByName("fnum")[0].value;
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
		if (document.getElementsByName("vk")[0].value!="") {
data.vk=document.getElementsByName("vk")[0].value;
	}else{
		
		return alert("Ссылку на страницу VK или удобный способ связи");
	}




document.getElementById("thumbnails").style.display="none";
document.getElementById("frm").style.display="none";
	 document.getElementById("dwn").src ="img\\dwnA.gif";
	 //document.getElementById("main").style.display ="none";
	 for(var i in products) {
		 products[i][3].delete;
	 }
var ddd = JSON.stringify(data);
var pr = JSON.stringify(products);
var s=0;
var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', 'https://script.google.com/macros/s/AKfycbzM6i-Uj2DG6MumbdFR49k4pmg4nMioiN1AFKar5K4qXagDgh8/exec', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    xmlhttp.send("pr=" + encodeURIComponent(pr)+"&d=" + encodeURIComponent(ddd) ); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
			
			for(var i in products) {

          
           
          s=s+Number(products[i][1]);
        //if (s>4) s=10;

console.log(s)
          
        }
		
		
			document.getElementById("dwn").src ="img\\dwn.gif";
         if (s<5) {
			 
			 document.getElementById("wrapper").innerHTML = "<p class='asd' >"+xmlhttp.responseText+"</p><p class='asd' ><br><br>Оплатите стоимость заказа " +(Number(all)+Number(d))+ " рублей<br><br> на киви +7 778 312 89 70. <br> <br>ОБЯЗАТЕЛЬНО<br><br> в комментарии к оплате укажите свои ФИО!<br><br> Что бы мы знали кто оплатил.<br><br>Мы свяжемся с вами для подтверждения.<br><br><a href='' onclick='restart()'>Заказать еще?</a></p>"; // Выводим ответ сервера
		 } else{
			 
			 document.getElementById("wrapper").innerHTML = "<p class='asd' >"+xmlhttp.responseText+"</p><p class='asd' ><br><br>Оплатите стоимость заказа " +(Number(all)-((Number(all)*10)/100)+Number(d))+ " рублей<br><br> на киви +7 778 312 89 70. <br> <br>ОБЯЗАТЕЛЬНО<br><br> в комментарии к оплате укажите свои ФИО!<br><br> Что бы мы знали кто оплатил.<br><br>Мы свяжемся с вами для подтверждения.<br><br><a href='' onclick='restart()'>Заказать еще?</a></p>"; // Выводим ответ сервера
		 }  
				 
				// document.getElementById("wrapper").innerHTML = "cvb"; // Выводим ответ сервера
				  // document.getElementById("wrapper").style.display="none";
        }
     }
   };
}


function restart(){
	sessionStorage.clear();
	location.href = 'https://kdmkdm.github.io';

}

function Switch(dv){
	VK.callMethod('resizeWindow', 500, (document.body.scrollHeight > document.body.offsetHeight)?document.body.scrollHeight:document.body.offsetHeight));
	var at=dv.parentNode.parentNode.childNodes;
	for (var i = 0; i < at.length; i++) {
		if (at[i].nodeName=="LI" & at[i].id!=dv.parentNode.id){
			at[i].className = 'Tab';
			document.getElementById(at[i].id+"p").style.display = 'none';
			//alert(at[i].id+"p" ); 
		}
     // alert( at[i].id ); // Text, DIV, Text, UL, ..., SCRIPT
    }
	dv.parentNode.className = 'SelectedTab';
	window.location.hash=dv.hash;
	document.getElementById(dv.parentNode.id+"p").style.display = 'block';
}

function One()
{
  // Табы
  document.getElementById('OneTab').className = 'SelectedTab';
  document.getElementById('TwoTab').className = 'Tab';
 document.getElementById('ThreeTab').className = 'Tab';
  // Страницы
  document.getElementById('One').style.display = 'block';
  document.getElementById('OneTab').className = 'SelectedTab';
  document.getElementById('Three').style.display = 'none';
 
}

function Two()
{

  // Табы
  document.getElementById('OneTab').className = 'Tab';
  document.getElementById('TwoTab').className = 'SelectedTab';
   document.getElementById('ThreeTab').className = 'Tab';
 
  // Страницы
  document.getElementById('One').style.display = 'none';
  document.getElementById('Two').style.display = 'block';
   document.getElementById('Three').style.display = 'none';
}

function Three()
{

  // Табы
  document.getElementById('OneTab').className = 'Tab';
    document.getElementById('TwoTab').className = 'Tab';
  document.getElementById('ThreeTab').className = 'SelectedTab';
 
  // Страницы
  document.getElementById('One').style.display = 'none';
    document.getElementById('Two').style.display = 'none';
  document.getElementById('Three').style.display = 'block';
 
}


