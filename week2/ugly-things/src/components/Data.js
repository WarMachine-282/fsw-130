import React, { Component } from "react";
import { ContextConsumer } from "./uglyContext";

class Data extends Component {
  state = {
    listUpdate: [],
    uglyTitle: "",
    uglyImage: "",
    uglydescription: "",
    comments: [],
    comment: "",
  };
  handleChange = (e) => {
    // e.preventDefault();
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };
  uglyUpdate = (e, context) => {
    e.preventDefault();
    this.setState({
      listUpdate: [
        ...context.uglyLists,
        {
          uglyTitle: this.state.uglyTitle,
          uglydescription: this.state.uglydescription,
          uglyImage: this.state.uglyImage,
          comments: this.state.comments,
        },
      ],
      uglyTitle: "",
      uglydescription: "",
      uglyImage: "",
      comments: [],
    });
    context.updateItems([
      ...context.uglyLists,
      {
        uglyTitle: this.state.uglyTitle,
        uglydescription: this.state.uglydescription,
        uglyImage: this.state.uglyImage,
        comments: this.state.comments,
      },
    ]);

  };
  updateComments = (e, context, index) => {
    this.setState({
      comments: [...context.uglyLists[index].comments, e.target.value],
      comment: "",
    });
    var array = context.uglyLists;
    Object.assign(array[index], {
      comments: [...context.uglyLists[index].comments, e.target.value],
    });
    context.updateItems(array);
  };
  render() {
    return (
      <ContextConsumer>
        {(context) => (
          <div>
            <form>
              <input
                className="inputs"
                type="text"
                name="uglyTitle"
                value={this.state.uglyTitle}
                placeholder="Ugly Title"
                onChange={this.handleChange}
              />
              <input
                className="inputs"
                type="text"
                name="uglydescription"
                value={this.state.uglydescription}
                placeholder="Ugly Description"
                onChange={this.handleChange}
              />
              <input
                className="inputs"
                type="text"
                name="uglyImage"
                value={this.state.uglyImage}
                placeholder="Ugly Image"
                onChange={this.handleChange}
              />

              <input
                type="submit"
                onClick={(e) => {
                  this.uglyUpdate(e, context);
                }}
                value="Submit"
              />
            </form>
            <div className="items">
              {context.uglyLists.map((uglyInfo, index) => (
                <div id={index} key={index}>
                  <div className="title">
                    <h3>Title: {uglyInfo.uglyTitle}</h3>
                  </div>
                  <div className="description">
                    <h4>Description: {uglyInfo.uglydescription}</h4>
                  </div>
                  <div className="image">
                    <img src={uglyInfo.uglyImage} alt="" />
                  </div>
                  <div className="comment">
                    <input
                      name="comment"
                      type="text"
                      onChange={this.handleChange}
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          this.updateComments(e, context, index);
                        }
                      }}
                      placeholder="Comment"
                    />
                    {uglyInfo.comments.map((comment) => (
                      <div>
                        <p>{comment}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </ContextConsumer>
    );
  }
}
export default Data;
