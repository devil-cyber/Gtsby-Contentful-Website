import React from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import "../style/index.css"
import LayoutStyle from "./layout.module.css";

const Layout = props => {
    return (
        <div className={LayoutStyle.container}>
            <div className={LayoutStyle.content}>
                <Header />
                {props.children}
            </div>
            <Footer />

        </div>
    )
}

export default Layout
