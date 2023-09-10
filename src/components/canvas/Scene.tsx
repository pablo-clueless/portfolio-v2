import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import * as THREE from "three"

const Model = () => {
	const model = useGLTF("./flying-plane.glb")

	const mixer = new THREE.AnimationMixer(model.scene)
	model.animations.forEach((clip) => {
		mixer.clipAction(clip).play()
	})

	useFrame((_state, delta) => {
		mixer.update(delta)
	})

	return (
		<mesh>
			<pointLight color="white" intensity={1} />
			<ambientLight color="white" intensity={1} />
			<primitive object={model.scene} scale={0.1} />
		</mesh>
	)
}

const Scene = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ position: [25, 5, 0], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}>
			<OrbitControls enableZoom enablePan enableRotate />
			<Model />
			<Preload all />
		</Canvas>
	)
}

export default Scene
useGLTF.preload("./flying-plane.glb")
