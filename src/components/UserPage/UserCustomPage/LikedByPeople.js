import React, { Component } from 'react';
import faker from "faker";

class LikedByPeople extends Component {
    render() {
        return (
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
        )
    }
}

export default LikedByPeople;