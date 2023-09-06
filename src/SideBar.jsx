import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-gray-900 text-white shadow-lg bg-primary text-secondary">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsFillLightningFill size="28" />} />
      <SideBarIcon icon={<FaPoo size="20" />} />
    </div>
  );
}

function SideBarIcon({ icon, text = "tooltip 💡" }) {
  // group allows changes to the child class when hovering over the parent class
  return (
    <div className="sidebar-icon group">
      {icon}{" "}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
}

export default SideBar;
