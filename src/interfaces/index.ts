export interface Post {
	id: string
	title: string
	slug: string
	subtitle: string
	tags: {
		id: string
		name: string
	}
	url: string
	coverImage: {
		url: string
	}
	readTimeInMinutes: string
	publishedAt: Date | string
	brief: string
	content: {
		markdown: string
		html: string
	}
}
