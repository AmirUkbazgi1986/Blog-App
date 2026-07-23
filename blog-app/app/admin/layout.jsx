import { assets } from "@/Assets/assets";
import Sidebar from "@/components/AdminComponent/Sidebar";
import Image from "next/image";
import { ToastContainer, toast } from "react-toastify";

export default function Layout({ children }) {
  return (
    <>
      <div className="flex">
        <ToastContainer theme="dark" />
        <Sidebar />
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between w-full max-h-15 px-12 py-3 border-b border-black">
            <h3 className="font-medium">Admin Panel</h3>
            <Image src={assets.profile_icon} width={40} alt="profile image" />
          </div>

          {children}
        </div>
      </div>
    </>
  );
}
