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
 var xmlhttp = getXmlHttp(); // ������ ������ XMLHTTP
    xmlhttp.open('POST', 'https://script.google.com/macros/s/AKfycbyMWF3JUIpDxZDazzneFRbGxcQpzQxVot1HKmqzNUWtIi2mL9Rn/dev', true); // ��������� ����������� ����������
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // ���������� ���������
    xmlhttp.send("pr=" + encodeURIComponent(pr)+"&d=" + encodeURIComponent(d) ); // ���������� POST-������
    xmlhttp.onreadystatechange = function() { // ��� ������ �� �������
      if (xmlhttp.readyState == 4) { // ����� ������
        if(xmlhttp.status == 200) { // ������ ������ ��� 200 (��� ������)
          document.getElementById("z").innerHTML = xmlhttp.responseText; // ������� ����� �������
        }
      }
    };
}








