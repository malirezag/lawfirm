import { GrLocation } from "react-icons/gr";
import { LiaPhoneAltSolid } from "react-icons/lia";
import { RiTelegram2Line, RiWhatsappLine } from "react-icons/ri";

function FooterAbout() {
  const telegramUsername = "@fl-tli";
  return (
    <div className="text-gray-100 flex flex-col gap-3 text-lg sm:w-96 ">
      <p className="border-b pb-2 border-grey-1">ارتباط با ما</p>
      <div className="flex flex-row gap-3 items-center ">
        <LiaPhoneAltSolid />
        <p>09123456789</p>
      </div>
      <div className="flex flex-row gap-3 items-center ">
        <RiTelegram2Line />
        <a href={`https://t.me/${telegramUsername}`}>تلگرام </a>
      </div>
      <div className="flex flex-row gap-3 items-center ">
        <span>
          <RiWhatsappLine />
        </span>
        <a href="#">واتساپ </a>
      </div>
      <div className="flex flex-row gap-3 text-base  ">
        <span className="pt-2 ">
          <GrLocation />
        </span>
        <p>قیطریه جنب بوستان قیطریه پلاک 125 واحد 18</p>
      </div>
    </div>
  );
}

export default FooterAbout;
