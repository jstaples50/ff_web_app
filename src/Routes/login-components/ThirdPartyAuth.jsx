import React from "react";
import ThirdPartyBadge from "./section-components/ThirdPartyBadge";

const ThirdPartyAuth = () => {
  const socialPlatformArray = ["Sleeper", "Google", "Facebook"];

  return (
    <div>
      {socialPlatformArray.map((badge) => (
        <ThirdPartyBadge socialPlatform={badge} />
      ))}
    </div>
  );
};

export default ThirdPartyAuth;
