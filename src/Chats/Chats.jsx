import PropTypes from "prop-types";
import React from "react";
import "./chats.css";

export const Chats = ({ property, className }) => {
  return (
    <div className={`chats ${className}`}>
      <div className="supporting-text">New Chat</div>
    </div>
  );
};

Chats.propTypes = {
  property: PropTypes.oneOf(["select"]),
};
