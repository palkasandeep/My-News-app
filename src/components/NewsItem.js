import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card">
          <img src={imageUrl ? imageUrl : "https://c.ndtvimg.com/2024-05/khviu0qg_rafahcrossing_160x120_08_May_24.jpg"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title mx-3">{title}<span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: '90%', zindex: '1' }}>{source}</span>
            </h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {author ? author : "Unknown"} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
