import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Eye, EyeSlash, Camera } from "iconsax-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import mask from "@/assets/images/MaskGroup.png";
import Logo from "@/assets/images/logo.png";
import Previews from "./RegisterImageUploader";

interface typeValue {
  name: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const [showEye, setShowEye] = useState<Boolean>(false);
  const [swiper, setSwiper] = useState<any>(null);
  const [swiperPage, setSwiperPage] = useState<any>(0);

  const initialValues: typeValue = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (value: any) => {
    console.log(value);
  };

  return (
    <div className="w-full h-screen sm:w-3/12 mx-auto overflow-x-hidden backgroundColor1">
      <div className="relative">
        <Image src={mask} alt="Header-Mask" width={500} />
        <Image
          className="absolute top-[12vh] sm:right-[6vw] right-[27vw]"
          src={Logo}
          alt="SeaNema-Logo"
          width={180}
          height={37}
        />
      </div>

      <div className="mt-2">
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          <Form>
            <Swiper
              onSwiper={setSwiper}
              onSlideChange={(e) => setSwiperPage(e.activeIndex)}
              pagination={true}
              modules={[Pagination]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div>
                  <div className="relative z-0 w-[80vw] sm:w-[20vw] mb-8 group mx-auto">
                    <Field
                      type="text"
                      name="name"
                      id="floating_name"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-[#7A7B95] focus:border-white appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_name"
                      className="absolute text-xs peer-focus:text-lg textColor1 peer-focus:text-white peer-focus:font-semibold  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      name
                    </label>
                  </div>
                  <div className="relative z-0 w-[80vw] sm:w-[20vw] mb-8 group mx-auto">
                    <Field
                      type="email"
                      name="email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-[#7A7B95] focus:border-white appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="absolute text-xs peer-focus:text-lg textColor1 peer-focus:text-white peer-focus:font-semibold  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative z-0 w-[80vw] sm:w-[20vw] mb-3 group mx-auto">
                    <Field
                      type={showEye ? "text" : "password"}
                      name="password"
                      id="floating_password"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-[#7A7B95] focus:border-white appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <div
                      onClick={() => setShowEye(!showEye)}
                      className="absolute right-1 top-2 cursor-pointer"
                    >
                      {showEye ? (
                        <Eye size="24" color="#AAAAAA" />
                      ) : (
                        <EyeSlash size="24" color="#AAAAAA" />
                      )}
                    </div>
                    <label
                      htmlFor="floating_password"
                      className="absolute text-xs peer-focus:text-lg textColor1 peer-focus:text-white peer-focus:font-semibold  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mx-8 mt-2">
                  <div className="text-white font-semibold text-base">
                    Photo Profile
                  </div>
                  <Previews />
                </div>
              </SwiperSlide>
            </Swiper>

            {swiperPage === 0 ? (
              <div
                onClick={() => swiper.slideNext()}
                className="text-white cursor-pointer bg-[#475AEA] hover:bg-[#3447db] mt-24 focus:ring-0 block focus:outline-none rounded-2xl text-sm font-bold px-5 py-3.5 text-center w-[80vw] sm:w-[20vw] mx-auto"
              >
                Next
              </div>
            ) : (
              <button
                type="submit"
                className="text-white bg-[#475AEA] hover:bg-[#3447db] mt-24 focus:ring-0 block focus:outline-none rounded-2xl text-sm font-bold px-5 py-3.5 text-center w-[80vw] sm:w-[20vw] mx-auto"
              >
                Register
              </button>
            )}
          </Form>
        </Formik>
      </div>

      <div className="mt-2 text-center">
        <span className="textColor1">Have an account?</span>
        <Link href="" className="text-white/90 ml-1 font-semibold">
          Login
        </Link>
      </div>
      <div className="relative mt-[22vh] sm:mt-[12vh] sm:mb-2">
        <div className="mx-auto bg-[#AAAAAA] sm:w-[10vw] w-[35vw] h-1.5 rounded-full"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
