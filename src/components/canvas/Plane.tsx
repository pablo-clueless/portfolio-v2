import { OrbitControls, Preload, useGLTF } from "@react-three/drei"
import { Canvas, useFrame } from "@react-three/fiber"
import { Suspense } from "react"
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
			<primitive object={model.scene} scale={0.075} position-y={0} rotation-y={0} />
		</mesh>
	)
}

const Plane = () => {
	return (
		<Canvas
			frameloop="demand"
			shadows
			camera={{ fov: 25, near: 0.1, far: 200, position: [25, 5, 0] }}
			gl={{ preserveDrawingBuffer: true }}>
			<Suspense fallback={null}>
				<Model />
			</Suspense>
			<OrbitControls autoRotate enableZoom enablePan enableRotate rotateSpeed={0.0001} />
			<Preload all />
		</Canvas>
	)
}

export default Plane
useGLTF.preload("./flying-plane.glb")
