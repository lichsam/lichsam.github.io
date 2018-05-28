function view_project(project_name){
	var window = document.getElementById('project_window');
	var iframe = document.getElementById('project_iframe');
	window.style.display = 'block';
	iframe.src = "../projects/"+project_name;
}
function exit_project(){
	var window = document.getElementById('project_window');
	window.style.display = 'none';
}