import React from "react"

const About = React.lazy(() => import("./About"))
const All = React.lazy(() => import("./All"))
const Contact = React.lazy(() => import("./Contact"))
const Gallery = React.lazy(() => import("./Gallery"))
const Home = React.lazy(() => import("./Home"))
const Works = React.lazy(() => import("./Works"))

export { About, All, Contact, Gallery, Home, Works }
