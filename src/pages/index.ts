import React from "react"

const About = React.lazy(() => import("./About"))
const Contact = React.lazy(() => import("./Contact"))
const History = React.lazy(() => import("./History"))
const Home = React.lazy(() => import("./Home"))
const Work = React.lazy(() => import("./Work"))
const Works = React.lazy(() => import("./Works"))

export { About, Contact, History, Home, Work, Works }
