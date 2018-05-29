function view_project(project_name){
	var window = document.getElementById('project_window');
	var iframe = document.getElementById('project_iframe');
	window.style.display = 'block';
	iframe.src = "https://lichsam.github.io/projects/"+project_name;
}
function exit_project(){
	var window = document.getElementById('project_window');
	var iframe = document.getElementById('project_iframe');
	iframe.src = "";
	window.style.display = 'none';
}
function copyMail(){
	document.querySelector('#email').select();
	document.execCommand('copy');
	document.getElementById('copytext').innerHTML = "Copied";
}