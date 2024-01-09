import { ReactNode, MutableRefObject, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import * as THREE from "three"

interface Props {
	children: ReactNode
}

const CameraRig = ({ children }: Props) => {
	const group = useRef<THREE.Group>() as MutableRefObject<THREE.Group>

	useFrame((state, delta) => {
		const isMobile = window.innerWidth <= 600

		let target = new THREE.Vector3(-0.4, 0, 2)
		if (isMobile) target = new THREE.Vector3(0, 0, 2.5)
		else target = new THREE.Vector3(0, 0, 2)

		easing.damp3(state.camera.position, target, 0.25, delta)

		easing.dampE(group.current.rotation, [state.pointer.y / 10, -state.pointer.x / 5, 0], 0.25, delta)
	})

	return <group ref={group}>{children}</group>
}

export default CameraRig
