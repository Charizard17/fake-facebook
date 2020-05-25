import React, { Component } from "react";

class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLiked: false,
      likeBorder: "",
    };
  }

  isLiked = () => {
    if (!this.state.isliked) {
      this.setState({ isliked: this.isLiked, likeBorder: "3px solid red" });
      console.log(!this.state.isLiked);
    } else {
      this.setState({ isLiked: this.isLiked, likeBorder: "" });
      console.log(this.state.isLiked);
    }
  };

  render() {
    return (
      <div className="container border border-secondary mb-5">
        <img
          className="rounded-circle mt-2 mr-3 float-left"
          src={this.props.avatar}
          style={{ width: "50px", height: "50px" }}
          alt=""
        />
        <span className="text-primary row font-weight-bold mt-2">
          @{this.props.username}
        </span>
        <span className="text-muted row">
          {" "}
          {Math.floor(Math.random() * 31)} {this.props.month} at{" "}
          {Math.floor(Math.random() * 23)}:{Math.floor(Math.random() * 59)}
        </span>
        <br />
        <div>{this.props.paragraph}</div>
        <div
          className="mb-3"
          style={{
            width: "100%",
            height: "300px",
            backgroundColor: `${this.props.color}`,
          }}
        ></div>
        <div
          className="btn-group-toggle d-flex justify-content-around mb-2"
          data-toggle="buttons"
        >
          <label onClick={this.isLiked} className="btn active">
            <input type="checkbox" defaultChecked />
            <img
              className="mr-2"
              style={{
                width: "25px",
                height: "25px",
                border: `${this.state.likeBorder}`,
              }}
              src="https://img.icons8.com/ios/50/000000/facebook-like.png"
            />{" "}
            Like
          </label>
          <label className="btn active">
            <input type="checkbox" defaultChecked />
            <img
              className="mr-2"
              style={{ width: "25px", height: "25px" }}
              src="https://img.icons8.com/ios/50/000000/comments.png"
            />
            Comment
          </label>
          <label className="btn active">
            <input type="checkbox" defaultChecked />
            <img
              className="mr-2"
              style={{ width: "25px", height: "25px" }}
              src="https://img.icons8.com/ios/50/000000/forward-arrow.png"
            />
            Share
          </label>
        </div>
        <div className="container-expand">
          <hr />
        </div>
        <img
          style={{ width: "25px", height: "25px" }}
          src="https://img.icons8.com/ultraviolet/40/000000/good-quality.png"
        />{" "}
        {Math.floor(Math.random() * 99) + 1}
        <div className="container-expand">
          <hr />
        </div>
        <div className="input-group mb-3">
          <img
            className="rounded-circle mr-3"
            style={{ width: "40px", height: "40px" }}
            src={this.props.avatar}
            alt=""
          />
          <input
            type="text"
            style={{ fontSize: "18px" }}
            className="form-control rounded-pill"
            placeholder="Write a comment.."
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </div>
      </div>
    );
  }
}

export default Posts;
