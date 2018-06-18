function view_project(project_name){
	$('#project_window').css("display","block");
	// $('#project_iframe').attr('src', "//lichsam.github.io/projects/"+project_name);
}
function exit_project(){
	$('#project_window').css("display","none");
	$('#project_iframe').attr('src','');
}

function copyMail(){
	document.querySelector('#email').select();
	document.execCommand('copy');
	$('#copytext').fadeToggle(100,function(){
		$('#copytext').text('Copied');
		$('#copybtn').css('border', '3px solid #FF8224');
		$('#copybtn').css('color', '#FF8224');
	});
	$('#copytext').fadeToggle(200);
}

function scroll(menuid){
	var offset = $("#" + menuid).offset();
	$('html, body').animate({scrollTop : offset.top}, 700);
}

function mini_view(project_name){
	$('.mini_view').css("display","block");
	$('.mini_view img').attr("src","../images/mini_" + project_name + ".png");
}
function mini_exit(){
	$('.mini_view').css("display","none");
}