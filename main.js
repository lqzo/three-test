import * as THREE from "three";

// 获取画布容器
const containerDom = document.querySelector(".canvas-container");
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  50,
  containerDom.offsetWidth / containerDom.offsetHeight
);
// 创建渲染器, 并添加到容器 Dom 中
const renderer = new THREE.WebGLRenderer();
renderer.setSize(containerDom.offsetWidth, containerDom.offsetHeight);
renderer.setClearColor(0xffffff);
containerDom.appendChild(renderer.domElement);
// 构建几何体 14, 11.2, 1.25
const geometry = new THREE.BoxGeometry(14, 11.2, 1.25);
const vertices = new Float32Array([
  0.9118,
  0.8944,
  0.9853,
  0.8944,
  0.9118,
  0.1056,
  0.9853,
  0.1056, // px
  0.0147,
  0.8944,
  0.0882,
  0.8944,
  0.0147,
  0.1056,
  0.0882,
  0.1056, // nx
  0.0882,
  0.9853,
  0.9118,
  0.9853,
  0.0882,
  0.8944,
  0.9118,
  0.8944, // py
  0.0882,
  0.1056,
  0.9118,
  0.1056,
  0.0882,
  0.0176,
  0.9118,
  0.0176, // ny
  0.0882,
  0.8944,
  0.9118,
  0.8944,
  0.0882,
  0.1056,
  0.9118,
  0.1056, // pz
  0.0882,
  0.8944,
  0.9118,
  0.8944,
  0.0882,
  0.1056,
  0.9118,
  0.1056, // nz
]);
geometry.setAttribute("uv", new THREE.Float32BufferAttribute(vertices, 2));
// 创建贴图纹理
const loader = new THREE.TextureLoader();
const texture = loader.load("./public/exam-test.jpg", () => {
  renderer.render(scene, camera);
});
texture.colorSpace = "srgb";
const material = new THREE.MeshBasicMaterial({
  map: texture,
});
// 构建 Mesh 类
const cube = new THREE.Mesh(geometry, material);
// 旋转一定角度
cube.rotation.y += 0.15;
scene.add(cube);
// 调整相机位置
camera.position.x -= 7;
camera.position.z = 18;
camera.rotation.y -= 0.3;
// function animate() {
//   requestAnimationFrame(animate);
//   cube.rotation.y += 0.005;
//   renderer.render(scene, camera);
// }
// animate();
