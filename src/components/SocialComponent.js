import React from "react";
export default class SocialMediaComponent extends React.Component {
  render() {
    return (
      <li className="list-inline-item">
        <a target="_blank" rel="noopener noreferrer"  href={this.props.link}>
          <i className={this.props.icons}></i>
        </a>
      </li>
    );
  }
}
