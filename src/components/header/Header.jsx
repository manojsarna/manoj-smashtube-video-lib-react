// import { useLocation } from "react-router-dom";
import { useState } from "react";

import {
  AuthIcon,
  BarsIcon,
  HistoryIcon,
  LightDarkIcon,
  LikeHeaderIcon,
  PlaylistsIcon,
  WatchLaterIcon,
} from "./icons";
import { Logo } from "./logo/Logo";
import { Search } from "./search/Search";

export function Header() {
  const [showMobileIcons, setShowMobileIcons] = useState(false);
  return (
    <header className="sm-header">
      <nav className="sm-nav-new">
        <Logo />

        {true ? (
          <Search searchMob={false} />
        ) : (
          <div className="sm-extra-div"></div>
        )}
        {/* <!-- ICONS BUTTONS FOR CTA --> */}

        <div className="sm-nav-icon-mobile-icons">
          <BarsIcon setShowMobileIcons={setShowMobileIcons} />
        </div>
        <div
          className={`sm-action-icon-btn-wrapper ${
            showMobileIcons && "sm-icons-show"
          }`}
        >
          <LightDarkIcon />
          <WatchLaterIcon />
          <LikeHeaderIcon />
          <HistoryIcon />
          <PlaylistsIcon />
          <AuthIcon />
        </div>
      </nav>
      {true && <Search searchMob={true} />}
    </header>
  );
}
