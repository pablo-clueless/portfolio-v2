import * as VFX from "react-vfx"

import { metal } from "shaders"

const Metal = () => {
	return (
		<VFX.VFXProvider>
			<VFX.VFXSpan shader={metal}>
				<div className="h-screen w-screen"></div>
			</VFX.VFXSpan>
		</VFX.VFXProvider>
	)
}

export default Metal
