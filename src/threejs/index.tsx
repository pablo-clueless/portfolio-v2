import { Environment } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import CameraRig from "./CameraRig"
import Model from "./Model"

const Scene = () => {
	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 0], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
			className="h-full w-full max-w-full transition-all ease-in">
			<Environment preset="city" />
			<CameraRig>
				<Model />
			</CameraRig>
		</Canvas>
	)
}

export default Scene
