import * as THREE from 'three';

const scene = new THREE.Scene();
scene.background = new THREE.Color();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const canvas = document.getElementById("first-canvas-bg");
const renderer = new THREE.WebGLRenderer({ canvas: canvas });
const light = new THREE.PointLight(0xffffff, 2);
light.position.set(10, 10, 10);
scene.add(light);

renderer.setSize( window.innerWidth, window.innerHeight );
// renderer.domElement.style.position = "absolute";
document.body.appendChild( renderer.domElement );

const geometry = new THREE.SphereGeometry(1, 15, 32);
const material = new THREE.MeshNormalMaterial();
const sphere = new THREE.Mesh( geometry, material );
scene.add( sphere );

camera.position.z = 5;

function animate() {
		requestAnimationFrame( animate );

		// sphere.rotation.x += 0.45;
		// sphere.rotation.y += -0.25;
		// sphere.rotation.z += 0.01;

		renderer.render( scene, camera );
}

animate();
