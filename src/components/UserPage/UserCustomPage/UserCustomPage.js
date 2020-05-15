import React, { Component } from "react";
import faker from "faker";

class UserCustomPage extends Component {
  render() {
    let post = [];
    for (let i = 0; i < Math.floor(Math.random() * 10) + 3; i++) {
      let fakeAvatar = faker.image.avatar();
      post.push(
        <div
          key={faker.random.uuid()}
          className="container border border-secondary mb-5"
        >
          <img
            className="rounded-circle mt-2 mr-3 float-left"
            src={fakeAvatar}
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
              <input type="checkbox" defaultChecked />
              <img
                className="mr-2"
                style={{ width: "25px", height: "25px" }}
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
              src={fakeAvatar}
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
          </div>
          <div className="btn-group float-right mt-2" role="group">
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
        <div className="row mt-3">
          <div className="col-8">
            <div className="container bg-white pt-3">
              <h4>Posts</h4>
              {post}
            </div>
          </div>
          <div className="col-4">
            <div className="container bg-white p-2 mb-4">
              <input
                className="form-control"
                style={{ border: "none" }}
                type="text"
                placeholder="&#x1f50d; Search for posts on this page"
                aria-label="Search"
              />
            </div>
            <div className="container bg-white p-3 mb-4">
              <h5>
                <strong>Community</strong>
              </h5>
              <br />
              <span>
                <img
                  style={{ width: "23px", height: "23px" }}
                  src="https://img.icons8.com/dotty/80/000000/groups.png"
                />{" "}
                <a href="invite">Invite your friends</a> to like this Page
              </span>
              <br />
              <br />
              <span>
                <img
                  style={{ width: "23px", height: "23px" }}
                  src="https://img.icons8.com/wired/64/000000/facebook-like.png"
                />{" "}
                {Math.floor(Math.random() * 10000)} people like this
              </span>
              <br />
              <br />
              <span>
                <img
                  style={{ width: "23px", height: "23px" }}
                  src="https://img.icons8.com/ios/50/000000/checked-user-male.png"
                />{" "}
                {Math.floor(Math.random() * 10000)} people follow this
              </span>
              <br />
              <br />
              <span>
                <img
                  style={{ width: "23px", height: "23px" }}
                  src="https://img.icons8.com/ios/50/000000/user-group-man-man.png"
                />{" "}
                <a href={faker.internet.userName()}>{faker.name.findName()}</a>{" "}
                likes this{" "}
              </span>
            </div>
            <div className="container bg-white p-3 mb-4">
              <h5>
                <strong>About</strong>
              </h5>
              <br />
              <span>
                <img
                  style={{ width: "23px", height: "23px" }}
                  src="https://img.icons8.com/dotty/50/000000/facebook-messenger.png"
                />{" "}
                <a href="contactUnblastMessenger">
                  <strong>Contact Unblast on Messenger</strong>
                </a>
              </span>
              <br />
              <br />
              <span>
                <img
                  style={{ width: "23px", height: "23px" }}
                  src="https://img.icons8.com/dotty/80/000000/saving-book.png"
                />{" "}
                <a href="education">Education</a>{" "}
              </span>
            </div>
            <div className="container bg-white p-3 mb-4">
              <h5>
                <strong>People</strong>
              </h5>
              <div className="container-expand">
                <hr />
              </div>
              <span className="text-center d-flex justify-content-center">
                <strong style={{ fontSize: "30px" }}>
                  {Math.floor(Math.random() * 150)}k <small>likes</small>
                </strong>
              </span>
            </div>
            <div className="container bg-white p-3 mb-4">
              <h5>
                <strong>Pages liked by this people</strong>
              </h5>
              <div className="container-expand">
                <hr />
              </div>
              <span>
                <img
                  className="rounded-circle mr-3"
                  src={faker.internet.avatar()}
                  style={{ width: "75px", height: "75px" }}
                />
                {faker.name.jobType()}s
              </span>
              <div className="container-expand">
                <hr />
              </div>
              <span>
                <img
                  className="rounded-circle mr-3"
                  src={faker.internet.avatar()}
                  style={{ width: "75px", height: "75px" }}
                />
                {faker.name.jobType()}s
              </span>
              <div className="container-expand">
                <hr />
              </div>
              <span>
                <img
                  className="rounded-circle mr-3"
                  src={faker.internet.avatar()}
                  style={{ width: "75px", height: "75px" }}
                />
                {faker.name.jobType()}s
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default UserCustomPage;
