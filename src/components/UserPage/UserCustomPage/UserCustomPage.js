import React, { Component } from "react";
import faker from "faker";

class UserCustomPage extends Component {
  render() {
    let post = [];
    for (let i = 0; i < 10; i++) {
      post.push(
        <div className="container border border-secondary mb-5">
          <img
            className="rounded-circle mt-2 mr-3 float-left"
            src={faker.image.avatar()}
            style={{ width: "50px", height: "50px" }}
            alt=""
          />
          <span className="text-primary row font-weight-bold mt-2">
            @{faker.internet.userName()}
          </span>
          <span className="text-muted row">
            {" "}
            {Math.floor(Math.random() * 31)} {faker.date.month()} at{" "}
            {Math.floor(Math.random() * 23)}:{Math.floor(Math.random() * 59)}
          </span>
          <br />
          <div>{faker.lorem.paragraph()}</div>
          <div
            className="mb-3"
            style={{
              width: "100%",
              height: "300px",
              backgroundColor: `${faker.internet.color()}`,
            }}
          ></div>
          <div
            className="btn-group-toggle d-flex justify-content-around mb-2"
            data-toggle="buttons"
          >
            <label className="btn active">
              <input type="checkbox" checked />
              <img
                className="mr-2"
                style={{ width: "25px", height: "25px" }}
                src="https://img.icons8.com/ios/50/000000/facebook-like.png"
              />{" "}
              Like
            </label>
            <label className="btn active">
              <input type="checkbox" checked />
              <img
                className="mr-2"
                style={{ width: "25px", height: "25px" }}
                src="https://img.icons8.com/ios/50/000000/comments.png"
              />
              Comment
            </label>
            <label className="btn active">
              <input type="checkbox" checked />
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
        </div>
      );
    }
    return (
      <div>
        <div className="container bg-white">
          <div
            style={{
              backgroundColor: `${faker.internet.color()}`,
              width: "100%",
              height: "400px",
            }}
          ></div>
          <div>
            <div className="btn-group mt-2 mb-2" role="group">
              <button
                type="button"
                className="btn btn-light border border-dark text-muted font-weight-bolder"
              >
                Liked
              </button>
              <button
                type="button"
                className="btn btn-light border border-dark text-muted font-weight-bolder"
              >
                Following
              </button>
              <button
                type="button"
                className="btn btn-light border border-dark text-muted font-weight-bolder"
              >
                Share
              </button>
              <button
                type="button"
                className="btn btn-light rounded-right border border-dark text-muted font-weight-bolder"
              >
                ...
              </button>
              <div
                className="btn-group"
                style={{ marginLeft: "255px" }}
                role="group"
              >
                <button
                  type="button"
                  className="btn btn-primary text-white border border-dark rounded font-weight-bolder mr-3"
                >
                  Learn More
                </button>
                <button
                  type="button"
                  className="btn btn-light border border-dark text-muted rounded font-weight-bolder"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-3">
          <div className="col-8">
            <div className="container bg-white">
              <h3>Posts</h3>
              {post}
            </div>
          </div>
          <div className="col-4">
            <div className="container bg-white pt-2 pb-2">
              <input
                className="form-control"
                type="text"
                placeholder="&#x1f50d; Search for posts on this page"
                aria-label="Search"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCustomPage;
