import { usePageTitle, useScrollToTop } from "hooks"
import styles from "utils/styles"
import { archive } from "archive"

const Gallery = () => {
	usePageTitle("Gallery")
	useScrollToTop()

	return (
		<main className="flex w-full flex-col px-5 lg:px-40">
			<div className="flex w-full flex-col py-10">
				<p className={styles.heading}>Archive</p>
				<div className="mt-10 grid w-full grid-cols-1 gap-5 border p-5 sm:grid-cols-2 lg:grid-cols-4">
					{archive.map((item, index) => (
						<div key={item.id} className="aspect-square w-full cursor-pointer border">
							{index + 1}
						</div>
					))}
				</div>
			</div>
		</main>
	)
}

export default Gallery
