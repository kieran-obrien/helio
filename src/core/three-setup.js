import * as THREE from "three";

const initThreeJsAssets = () => {
  // Set up the scene, camera, and renderer
  const scene = new THREE.Scene();
  const previewScene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    5000
  ); // field of view, aspect ratio, near, far

  const renderer = new THREE.WebGLRenderer({
    // Create the renderer
    canvas: document.querySelector("#bg"),
  });

  const previewRenderer = new THREE.WebGLRenderer({
    // Create the little renderer
    canvas: document.querySelector("#planet-preview-canvas"),
  });
  // Set the renderer size to match the canvas size
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);

  // Set the renderer size to match the canvas size
  const canvas = document.querySelector("#planet-preview-canvas");
  const camera2 = new THREE.PerspectiveCamera(
    75,
    canvas.clientWidth / canvas.clientHeight,
    0.1,
    1000
  ); // field of view, aspect ratio, near, far

  previewRenderer.setSize(canvas.clientWidth, canvas.clientHeight);
  previewRenderer.setPixelRatio(window.devicePixelRatio);

  // Set the renderer size and camera position
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  camera.position.setX(0);
  camera.position.setY(280);
  camera.position.setZ(350);
  camera2.position.setZ(10);

  // Init THREE imgloader/textureloader
  const imgLoader = new THREE.ImageLoader();
  const textureLoader = new THREE.TextureLoader();

  // Make app dynamically resizable
  window.addEventListener("resize", onWindowResize);
  window.addEventListener("orientationchange", onWindowResize);
  function onWindowResize() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize(window.innerWidth, window.innerHeight);
  }

  return [
    scene,
    previewScene,
    camera,
    camera2,
    renderer,
    previewRenderer,
    imgLoader,
    textureLoader,
  ];
};


// Init threejs assets
const [
  scene,
  previewScene,
  camera,
  camera2,
  renderer,
  previewRenderer,
  imgLoader,
  textureLoader,
] = initThreeJsAssets();

export {
  scene,
  previewScene,
  camera,
  camera2,
  renderer,
  previewRenderer,
  imgLoader,
  textureLoader,
};
