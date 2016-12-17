/*vk {
overflow-y: scroll;
height: 800px;
}

VK.init(function() {});
function init_vk() {
	console.log("ASDASDASD");
VK.callMethod('resizeWindow', 807, $('body').height() + 80);
VK.callMethod('scrollWindow', 0);
}
setInterval('init_vk()', 200);*/
VK.init(
  function(){
	  console.log("ASDASDASD");
	  VK.callMethod("scrollWindow", 200, 500);
	  VK.callMethod("resizeWindow", 500, 500);
});
