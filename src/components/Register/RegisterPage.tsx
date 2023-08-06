import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Eye, EyeSlash } from "iconsax-react";
import Previews from "./RegisterImageUploader";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import mask from "@/assets/images/MaskGroup.png";
import Logo from "@/assets/images/logo.png";
//import noImage from "@/assets/images/NoImage.png";

interface typeValue {
  name: string;
  email: string;
  password: string;
}

const RegisterPage = () => {
  const [showEye, setShowEye] = useState<Boolean>(false);
  const [swiper, setSwiper] = useState<any>(null);
  const [swiperPage, setSwiperPage] = useState<any>(0);
  const [getImage, setGetImage] = useState<any>([]);

  console.log(getImage);

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
                  <div className="relative z-0 w-[80vw] sm:w-[20vw] mb-8 mt-10 group mx-auto">
                    <Field
                      type="text"
                      name="name"
                      id="floating_name"
                      className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b borderColor1 focus:border-white appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_name"
                      className="absolute text-2xl peer-focus:text-3xl peer-focus:text-white peer-focus:font-semibold textColor1 duration-300 transform -translate-y-6 scale-75 -top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      name
                    </label>
                  </div>
                  <div className="relative z-0 w-[80vw] sm:w-[20vw] mb-8 mt-14 group mx-auto">
                    <Field
                      type="email"
                      name="email"
                      id="floating_email"
                      className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b borderColor1 focus:border-white appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <label
                      htmlFor="floating_email"
                      className="absolute text-2xl peer-focus:text-3xl peer-focus:text-white peer-focus:font-semibold textColor1 duration-300 transform -translate-y-6 scale-75 -top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Email
                    </label>
                  </div>
                  <div className="relative z-0 w-[80vw] sm:w-[20vw] mb-3 mt-14 group mx-auto">
                    <Field
                      type={showEye ? "text" : "password"}
                      name="password"
                      id="floating_password"
                      className="block py-2.5 px-0 w-full text-xl text-white bg-transparent border-0 border-b borderColor1 focus:border-white appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
                      placeholder=" "
                      required
                    />
                    <div
                      onClick={() => setShowEye(!showEye)}
                      className="absolute right-1 top-0 cursor-pointer"
                    >
                      {showEye ? (
                        <Eye size="22" className="textColor1" />
                      ) : (
                        <EyeSlash size="22" className="textColor1" />
                      )}
                    </div>
                    <label
                      htmlFor="floating_password"
                      className="absolute text-2xl peer-focus:text-3xl peer-focus:text-white peer-focus:font-semibold textColor1 duration-300 transform -translate-y-6 scale-75 -top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Password
                    </label>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="mx-8 mt-2">
                  <div className="text-white font-semibold text-2xl mb-4">
                    Photo Profile
                  </div>
                  <Previews setGetImage={setGetImage} />
                </div>
              </SwiperSlide>
            </Swiper>

            {swiperPage === 0 ? (
              <div
                onClick={() => swiper.slideNext()}
                className="text-white backgroundColor2 hover:backgroundColor7 focus:ring-0 block focus:outline-none rounded-2xl text-xl font-bold px-5 py-6 mt-24 text-center w-[80vw] sm:w-[20vw] mx-auto cursor-pointer"
              >
                Next
              </div>
            ) : (
              <button
                type="submit"
                className="text-white backgroundColor2 hover:backgroundColor7 focus:ring-0 block focus:outline-none rounded-2xl text-xl font-bold px-5 py-6 mt-24 text-center w-[80vw] sm:w-[20vw] mx-auto"
              >
                Register
              </button>
            )}
          </Form>
        </Formik>
      </div>

      <div className="mt-4 text-center">
        <span className="textColor1">Have an account?</span>
        <Link href="/Login" className="text-white/90 ml-1 font-semibold">
          Login
        </Link>
      </div>
      <div className="relative mt-[22vh] sm:mt-[12vh] sm:mb-2">
        <div className="mx-auto backgroundColor4 sm:w-[10vw] w-[35vw] h-1.5 rounded-full"></div>
      </div>
    </div>
  );
};

export default RegisterPage;
