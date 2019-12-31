precision mediup float;
attribute vec2 vPosition;
attribute vec3 vColor;
varying vec3 fColor;

void main(){
	fColor = vColor;
	glPosition = vec4(vPosition, 0.0, 1.0);
}