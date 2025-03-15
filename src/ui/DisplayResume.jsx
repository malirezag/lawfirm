function DisplayResume() {
  return (
    <div>
      <p
        className="text-center text-2xl mb-17 md:mb-0 sm:text-4xl text-grey-3 font-semibold mt-15
      "
      >
        سابقه موسسه اندیشمندان
      </p>
      <div className="px-2 md:-translate-y-36">
        <div
          className="flex flex-col gap-7 md:gap-5 lg:gap-8 xl:gap-16
       md:flex-row justify-center md:translate-y-55 items-center my-"
        >
          <div
            data-aos="fade-down"
            className="md:h-80 md:w-58 h-80 w-80 lg:w-70 px-7 xl:w-80 xl:h-85 shadow-2xl
         bg-gray-100 rounded-2xl flex justify-center flex-col space-y-19 items-center text-grey-3"
          >
            <h3 className="text-6xl font-bold ">
              25 <span className="text-3xl">سال تجربه</span>
            </h3>
            <p className="text-base font font-semibold">
              افتخار 25 سال همراهی شما در موسسه حقوقی اندیشمندان
            </p>
          </div>

          <div
            data-aos="fade-down"
            className="md:h-80 md:w-58 h-80 w-80 lg:w-70 px-7 xl:w-80 xl:h-85 shadow-2xl
         bg-gray-100 rounded-2xl flex justify-center flex-col space-y-19 items-center text-grey-3"
          >
            <h3 className="text-5xl font-bold ">
              +700 <span className="text-2xl">پرونده موفق</span>
            </h3>
            <p className="text-base font font-semibold">
              با افتخار در طی 25 سال توانستیم در بیش از 700 پرونده از سراسر
              ایران موفقیت کسب کنیم.
            </p>
          </div>

          <div
            data-aos="fade-down"
            className="md:h-80 md:w-58 h-80 w-80 lg:w-70 px-7 xl:w-80 xl:h-85 shadow-2xl 
         bg-gray-100 rounded-2xl flex justify-center flex-col space-y-19 items-center text-grey-3"
          >
            <h3 className="text-5xl font-bold ">
              32 <span className="text-xl">شعبه در سراسر کشور</span>
            </h3>
            <p className="text-base font font-semibold">
              برای دسترسی آسان شما در 32 شعبه میزبان شما عزیزان هستیم.
            </p>
          </div>
        </div>
        <div className=" bg-grey-3 h-70 xl:h-75 max-w-330 mx-auto rounded-2xl hidden md:block "></div>
      </div>
    </div>
  );
}

export default DisplayResume;
