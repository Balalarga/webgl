var vShaderText = [
"precision mediup float;",
"attribute vec2 vPosition;",
"attribute vec3 vColor;",
"varying vec3 fColor;",
"void main(){",
"	fColor = vColor;",
"	glPosition = vec4(vPosition, 0.0, 1.0);",
"}"].join('\n');
var fShaderText = [
"precision mediump float;",
"varying vec3 fColor;",
"void main(){",
"	fColor = vec4(fColor, 1.0);",
"}"].join('\n');


var init = function(){
	var canvas = document.getElementById("canvas");
	canvas.width = window.innerWidth();
	canvas.height = window.innerHeight();
	
	var gl = canvas.getContext("webgl");
	if(!gl){
		gl = canvas.getContext("experimental-webgl"); 
	}
	if(!gl){
		alert("Your browser does not support WebGL");
		return;
	}
	gl.clearColor(0.7, 0.7, 0.7, 1.0);
	gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);

}

function vShader(vPosition, vColor){
	return {
		fColor: vColor,
		glPosition: [vPosition.x, vPosition.y, 0.0, 1.0];
	};
}