var i =1;
var p=100;
var data = {};
var products = {};
function addRow(){
    var div = document.createElement('div');

    div.className = 'row';

    div.innerHTML = '<input type="text" name="name" value="" />\
        <input type="text" name="value" value="" />\
        <label> <input type="checkbox" name="check" value="1" /> Checked? </label>\
        <input type="button" value="-" onclick="removeRow(this)">';

     document.getElementById('content').appendChild(div);
}

function bas(elem) {
	
	if(typeof(Storage)!=="undefined")
  {
	  //products = JSON.parse(sessionStorage.getItem("products"));;
	  //sessionStorage.clear
	//sessionStorage.clear
    //console.log(products[elem.name]);

var sel=document.getElementById("s-"+elem.name)

      if (products[elem.name]){
		  sessionStorage.clear
		 delete products[elem.name];
		 sessionStorage.setItem("products", JSON.stringify(products));
		 sel.disabled=false;
		 sel.style.backgroundColor='#4cd273';
		 elem.style.backgroundColor='#4cd273';
		 elem.value='В корзинку';
		 //products[elem.name]=0;
	 }else{
		 //delete products[elem.name];
		 var arr= [];
		 arr=[elem.name,sel.value, 250, sel.name];
		 products[elem.name]=arr;
		 sessionStorage.setItem("products", JSON.stringify(products));
		 sel.style.backgroundColor=	'#468499';
		 sel.disabled=true;
		 elem.style.backgroundColor='#468499';
		 elem.value='Из корзинки';
		
	  }
	  rsh();
	 console.log(products[elem.name]);
	 
  }
else
  {
  alert("Опаньки! Старый браузер...");
  }

 
}

function og(elem, path){
	modalWindow.show(1000, path)
}
	//var asd=elem.title;
	//alert(asd);
	//elem.innerHTML='<div id="openModal" class="modalDialog"><div><a href="#close" title="Закрыть" class="close">X</a><img src = "img/M.jpg" width = "1024" height = "768"  id = "img" > </img> <br /><img src = "img/left_arrow.jpg" id="lef"  onClick = "javascript: left_arrow()" /> <img src = "img/right_arrow.jpg" id="rig"  onClick = "javascript: right_arrow()" /></div></div>';
 var modalWindow = {
    _block: null,
    _win: null,
	initBlock: function() {
        _block = document.getElementById('blockscreen'); //Получаем наш блокирующий фон по ID

        //Если он не определен, то создадим его
        if (!_block) {
            var parent = document.getElementsByTagName('body')[0]; //Получим первый элемент тега body
            var obj = parent.firstChild; //Для того, чтобы вставить наш блокирующий фон в самое начало тега body
            _block = document.createElement('div'); //Создаем элемент div
            _block.id = 'blockscreen'; //Присваиваем ему наш ID
            parent.insertBefore(_block, obj); //Вставляем в начало
            _block.onclick = function() { modalWindow.close(); } //Добавим обработчик события по нажатию на блокирующий экран - закрыть модальное окно.
        }
        _block.style.display = 'inline'; //Установим CSS-свойство        
    },
	 initWin: function(width, html) {
        _win = document.getElementById('modalwindow'); //Получаем наше диалоговое окно по ID
        //Если оно не определено, то также создадим его по аналогии
        if (!_win) {
            var parent = document.getElementsByTagName('body')[0];
            var obj = parent.firstChild;
            _win = document.createElement('div');
            _win.id = 'modalwindow';
            _win.style.padding = '0 0 0px 0';
			_win.style.backgroundColor = 'teal';
			_win.style.borderRadius = '10px';
            parent.insertBefore(_win, obj);
        }
       // _win.style.width = 800 + 'px'; //Установим ширину окна
		//_win.style.height = 531+'px';
        _win.style.display = 'inline'; //Зададим CSS-свойство
        
        _win.innerHTML = html; //Добавим нужный HTML-текст в наше диалоговое окно
        
        //Установим позицию по центру экрана

        _win.style.left = '50%'; //Позиция по горизонтали
        _win.style.top = '50%'; //Позиция по вертикали

        //Выравнивание по центру путем задания отрицательных отступов
        _win.style.marginTop = -(_win.offsetHeight / 2) + 'px'; 
        _win.style.marginLeft = -(width / 2) + 'px';
    },
	close: function() {
		document.getElementById('modalwindow').style.display = 'none';
        document.getElementById('blockscreen').style.display = 'none';
		i=1;
                
    },
	show: function(width, path) {

		html='<img name='+path.id+' id="mi" src = img/'+path.id+'/'+path.id+'1.jpg'+' width = "800" height = "531"  id = "img" onClick=nim(this) > </img><p id="pn" >1 из 3</p>';
        modalWindow.initBlock();
        modalWindow.initWin(width, html);
    }
}
	

function nim(elem){
	i++;
	if (i>3) { i=1;}
	elem.src='img/'+elem.name+'/'+elem.name+i+'.jpg';
	document.getElementById("pn").innerHTML =i+' из 3';
}

function ico (elem, t) {
	if (elem.value=="В корзинку"){
		if(t){
		   elem.style.backgroundColor='#71da8f';			
		}else{
			   elem.style.backgroundColor='#4cd273';		
		}

	} else{
		if(t){
		   elem.style.backgroundColor='#90b5c1';			
		}else{
			   elem.style.backgroundColor='#468499';		
		}
	}
	
};





function rsh(){
	var t="";
	var c=0;
	var all = 0;
	var s=0;
	var d =280;
	for(var i in products) {

    if (!products.hasOwnProperty(i)) continue;
t=t+products[i][3]+" "+products[i][1]+"шт. = "+products[i][1]*products[i][2]+"руб."+"<br>";
c=c+Number(products[i][1]);
if (c>5) s=250;


all+=products[i][1]*products[i][2];

}
if(t!=""){
if (s>0){
	document.getElementById('z').innerHTML = t+ "<br>Всего:"+c+" штук, скидка "+s+"рублей. Цена со скидкой " + (all-s)+"руб. + "+d+"руб. доставка = "+(all-s+280)+"руб.";
}else{
	document.getElementById('z').innerHTML = t+ "<br>Всего:"+c+" штук, " + all+"руб. + "+d+".р доставка = "+(all+d)+"руб.";
}
}else{
	document.getElementById('z').innerHTML = "";
}
document.getElementById('aside1').innerHTML = "Сумма заказа "+ (all-s+d)+"руб.";
}