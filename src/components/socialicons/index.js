import React from "react";
import "./style.css";
import {
  FaGithub,
  FaLinkedin,
  FaMedium,
  FaCircle
} from "react-icons/fa";
import { socialprofiles } from "../../content_option";

const ICON_MAPPING = {
  default: FaCircle,
  github: FaGithub,
  linkedin: FaLinkedin,
  medium: FaMedium,
};

export const Socialicons = (params) => {
  return (
    <div className="stick_follow_icon">
      <ul>
        {Object.entries(socialprofiles).map(([platform, url]) => {
          const IconComponent = ICON_MAPPING[platform] || ICON_MAPPING.default;
          return (
            <li key={platform}>
              <a href={url}>
                <IconComponent />
              </a>
            </li>
          );
        })}
      </ul>
      <p>Follow Me</p>
    </div>
  );
};
