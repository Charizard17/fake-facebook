import React, { Component } from "react";
import faker from "faker";
import Posts from "./Posts";
import UserBanner from "./UserBanner";

class UserCustomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPosts: [],
      initialPosts: [],
      color: faker.internet.color(),
    };
  }
 
  componentDidMount() {
    let initialPosts = this.getInitialPostsFromFaker();
    this.setState({ initialPosts });
  }

  getInitialPostsFromFaker() {
    let posts = [];
    for (let i = 0; i < Math.floor(Math.random() * 10) + 3; i++) {
      posts.push({
        uuid: faker.random.uuid(),
        avatar: faker.internet.avatar(),
        username: faker.internet.userName(),
        month: faker.date.month(),
        paragraph: faker.lorem.paragraph(),
        color: faker.internet.color(),
      });
    }
    return posts;
  }

  render() {
    return (
      <div>
        <UserBanner color={this.state.color} />
        <div className="row mt-3">
          <div className="col-8">
            <div className="container bg-white pt-3">
              <h4>Posts</h4>
              {this.state.initialPosts.map((element) => {
                return (
                  <Posts
                    key={faker.random.uuid()}
                    avatar={element.avatar}
                    username={element.username}
                    month={element.month}
                    paragraph={element.paragraph}
                    color={element.color}
                  />
                );
              })}
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
