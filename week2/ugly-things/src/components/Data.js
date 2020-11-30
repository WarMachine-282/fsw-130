import React, {Component} from "react"
import {ContextConsumer} from "./uglyContext"

class Data extends Component {
    state ={
        listUpdate: [],
        titleUpdate: "",
        imageUpdate: "",
        descripUpdate: "",
        newComment: ""
    }
    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        this.setState({
          [name]: value,
        });
      };
    uglyUpdate = (e) => {
        e.preventDefault()
        this.setState({
            titleUpdate: "",
            imageUpdate: "",
            descripUpdate: ""
        })
    }
}
export default Data