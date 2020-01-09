var box;
var renderer;
var scene;
var camera;

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
	var boxGeometry = new THREE.BoxGeometry(1, 1, 1);
	var boxMaretial = new THREE.MeshPhongMaterial({color: 0xff0000});

	box = new THREE.Mesh(boxGeometry, boxMaretial);
	scene.add(box);

	var color = 0xffffff;
	var intencity = 1;
	var light = new THREE.DirectionalLight(color, intencity);
	light.position.set(-2, 2, 4);
	scene.add(light);
	
	renderer.render(scene, camera);
};

function frameUpdate(time){
	time *= 0.001;

	box.rotation.x = time/3;
	box.rotation.y = time/6;

	renderer.render(scene, camera);
	requestAnimationFrame(frameUpdate);
};
requestAnimationFrame(frameUpdate);