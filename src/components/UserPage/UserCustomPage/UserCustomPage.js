import React, { Component } from "react";
import faker from "faker";
import Posts from "./Posts";
import UserBanner from "./UserBanner";
import Community from "./Community";
import About from "./About";
import People from "./People";
import LikedByPeople from "./LikedByPeople";

class UserCustomPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      initialPosts: [],
      peopleLiked: [],
      color: faker.internet.color(),
      name: faker.name.findName(),
      username: faker.internet.userName(),
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
            <Community username={this.state.username} name={this.state.name} />
            <About />
            <People />
            {/* {this.state.peopleLiked.map((elem) => {
              return <LikedByPeople job={elem.job} avatar={elem.avatar} />;
            })} */}
            <LikedByPeople />
          </div>
        </div>
      </div>
    );
  }
}

export default UserCustomPage;
