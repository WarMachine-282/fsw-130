import React, {Component} from "react"
import { ThemeContextConsumer } from "./ThemeContext";

const Footer = () => {
    return (
        <ThemeContextConsumer>
            {(context) => ( 
        <footer className={`${context.theme}-theme`} id="Footer">
            <p>&copy; Christian Van Loon 2020</p>
        </footer>
        )}
        </ThemeContextConsumer>
    )
}
export default Footer