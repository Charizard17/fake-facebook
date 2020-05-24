import React, { Component } from 'react'

class UserBanner extends Component {
    render() {
        return (
            <div className="container bg-white">
          <div
            style={{
              backgroundColor: `${this.props.color}`,
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
        )
    }
}

export default UserBanner;