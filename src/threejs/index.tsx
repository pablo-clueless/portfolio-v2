import { CameraControls } from "@react-three/drei"
import { Canvas } from "@react-three/fiber"

import CameraRig from "./CameraRig"
import Model from "./Model"

const Scene = () => {
	return (
		<Canvas
			shadows
			camera={{ position: [0, 0, 1], fov: 25 }}
			gl={{ preserveDrawingBuffer: true }}
			className="h-screen w-screen">
			<CameraRig>
				<Model />
			</CameraRig>
			<CameraControls />
		</Canvas>
	)
}

export default Scene
