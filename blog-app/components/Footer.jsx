import { assets } from "@/Assets/assets";
import Image from "next/image";

function Footer() {
  return (
    <div className="flex flex-col justify-around items-center gap-2 sm:flex-row bg-black py-5">
      <Image src={assets.logo_light} alt="" width={120} />
      <p className="text-white text-sm">
        All right reserved.Copyright @blogger
      </p>
      <div className="flex items-center gap-2">
        <Image src={assets.facebook_icon} alt="facebook" width={50} />
        <Image src={assets.twitter_icon} alt="twitter" width={50} />
        <Image src={assets.googleplus_icon} alt="googleplus" width={50} />
      </div>
    </div>
  );
}

export default Footer;
