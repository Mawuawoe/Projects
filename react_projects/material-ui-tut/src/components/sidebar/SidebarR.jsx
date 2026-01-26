import React from "react";
import MobileSidebar from "./MobileSidebar";
import DesktopSidebar from "./DesktopSidebar";

const SidebarR = ({ mobileOpen, onClose }) => {
  return (
    <>
      <MobileSidebar open={mobileOpen} onClose={onClose} />
      <DesktopSidebar />
    </>
  );
};

export default SidebarR;
