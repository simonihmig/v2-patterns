import {
  BoxGeometry,
  MeshStandardMaterial,
  Mesh,
  Scene,
  PerspectiveCamera,
  WebGLRenderer,
  DirectionalLight,
  AmbientLight,
} from 'three';

export function setupScene(canvas) {
  const scene = new Scene();

  const geometry = new BoxGeometry(1, 1, 1);
  const material = new MeshStandardMaterial({ color: 0x00ff00 });
  const cube = new Mesh(geometry, material);
  scene.add(cube);

  const light1 = new DirectionalLight();
  light1.position.x = -3;
  light1.position.z = 5;
  scene.add(light1);

  const light2 = new AmbientLight(0x404040);
  scene.add(light2);

  const camera = new PerspectiveCamera(40);
  camera.position.y = 2;
  camera.position.z = 5;
  camera.rotation.x = -0.4;

  const renderer = new WebGLRenderer({ canvas });
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

  let raf;

  function animate() {
    raf = requestAnimationFrame(animate);

    cube.rotation.y += 0.01;

    renderer.render(scene, camera);
  }
  animate();

  return () => {
    if (raf) {
      cancelAnimationFrame(raf);
    }

    geometry.dispose();
    material.dispose();
  };
}
