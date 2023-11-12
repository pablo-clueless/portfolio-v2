import React from "react"

const Blog = React.lazy(() => import("./Blog"))
const Blogs = React.lazy(() => import("./Blogs"))
const Home = React.lazy(() => import("./Home"))
const Projects = React.lazy(() => import("./Projects"))

export { Blog, Blogs, Home, Projects }
