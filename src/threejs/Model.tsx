import * as THREE from "three"

const Model = () => {
	return (
		<group>
			<mesh
				castShadow
				geometry={new THREE.BoxGeometry()}
				material={new THREE.MeshStandardMaterial()}
				dispose={null}></mesh>
		</group>
	)
}

export default Model
