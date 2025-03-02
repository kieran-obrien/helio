import * as THREE from "three";

export default function lightingSetup(scene, previewScene) {
    // Add lighting to the scene
    const pointLight = new THREE.PointLight(0xffffff, 1000, 1000);
    pointLight.position.set(5, 20, 5);
    const ambientLight = new THREE.AmbientLight(0xffffff);
    const ambientLight2 = new THREE.AmbientLight(0xffffff);
    scene.add(ambientLight);
    previewScene.add(ambientLight2);
    const lightHelper = new THREE.PointLightHelper(pointLight);
    const gridHelper = new THREE.GridHelper(200, 50);
    previewScene.add(lightHelper, gridHelper);
    return [ambientLight, ambientLight2, lightHelper, gridHelper];
}
