import FooterAbout from "./FooterAbout";
import FooterMap from "./FooterMap";

function Footer() {
  return (
    <footer data-aos="fade-up" className="bg-grey-3 rounded-t-xl">
      <div
        className=" flex flex-col items-center sm:flex-row sm:justify-around
   xl:pb-5 xl:pt-5 mt-8 rounded-t-md"
      >
        <div
          className="flex flex-col justify-center max-w-80 mx-15 py-4 sm:flex-row
      sm:max-w-xl md:max-w-xl lg:max-w-4xl xl:max-w-7xl gap-14   "
        >
          <FooterAbout />
          <FooterMap />
          {/* <FooterEnamad /> */}
        </div>
      </div>
      <p className="flex justify-center text-gray-300 pb-3 text-sm ">
        کلیه حقوق این وبسایت متعلق به مجموعه اندیشمندان می باشد
      </p>
    </footer>
  );
}

export default Footer;
