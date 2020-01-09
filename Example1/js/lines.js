var scene;
var camera;
var objects = [];

function createXYZ(){
	var yMat = new THREE.LineBasicMaterial({color: 0x00ff00});
	var xMat = new THREE.LineBasicMaterial({color: 0xff0000});
	var zMat = new THREE.LineBasicMaterial({color: 0x0000ff});
	var xGeom = new THREE.Geometry();
	xGeom.vertices.push(new THREE.Vector3(0, 0, 0));
	xGeom.vertices.push(new THREE.Vector3(1, 0, 0));
	var yGeom = new THREE.Geometry();
	yGeom.vertices.push(new THREE.Vector3(0, 0, 0));
	yGeom.vertices.push(new THREE.Vector3(0, 1, 0));
	var zGeom = new THREE.Geometry();
	zGeom.vertices.push(new THREE.Vector3(0, 0, 0));
	zGeom.vertices.push(new THREE.Vector3(0, 0, 1));
	var xAxis = new THREE.Line(xGeom, xMat);
	var yAxis = new THREE.Line(yGeom, yMat);
	var zAxis = new THREE.Line(zGeom, zMat);
	objects.push(xAxis);
	objects.push(yAxis);
	objects.push(zAxis);
	scene.add(xAxis);
	scene.add(yAxis);
	scene.add(zAxis);
}

function initGL(){
	var canvas = document.getElementById("canvas");
	renderer = new THREE.WebGLRenderer({canvas});
	const fov = 75;
	const aspect = canvas.width/canvas.height;
	const near = 0.1;
	const far = 5;
	camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
	camera.position.z = 3;
	scene = new THREE.Scene();

	//Write code after here

	createXYZ();
	
	// Before here
	renderer.render(scene, camera);
};

function frameUpdate(time){
	time *= 0.001;

	objects.forEach(function(obj){
		obj.rotation.x = time/3;
		obj.rotation.y = time/3;
		obj.rotation.z = time/3;
	});


	renderer.render(scene, camera);
	requestAnimationFrame(frameUpdate);
};
requestAnimationFrame(frameUpdate);
