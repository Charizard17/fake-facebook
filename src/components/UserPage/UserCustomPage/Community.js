import React, { Component } from 'react'

export default class Community extends Component {
    render() {
        return (
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
                <a href={this.props.username}>{this.props.name}</a>{" "}
                likes this{" "}
              </span>
            </div>
        )
    }
}
