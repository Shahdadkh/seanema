import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Formik, Form, Field } from "formik";
import { Eye, EyeSlash } from "iconsax-react";

import mask from "@/assets/images/MaskGroup.png";
import Logo from "@/assets/images/logo.png";
import google from "@/assets/images/Group3567.png";
import facebook from "@/assets/images/Group3568.png";
import apple from "@/assets/images/Group3569.png";

interface typeValue {
  email: string;
  password: string;
  ckeckboxValue: boolean;
}

const LoginPage = () => {
  const [showEye, setShowEye] = useState<Boolean>(false);

  const initialValues: typeValue = {
    email: "",
    password: "",
    ckeckboxValue: false,
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
            <div className="relative z-0 w-[80vw] sm:w-[20vw] mb-8 group mx-auto">
              <Field
                type="email"
                name="email"
                id="floating_email"
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b borderColor1 focus:border-white appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
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
                className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b borderColor1 focus:border-white appearance-none dark:text-white focus:outline-none focus:ring-0 peer"
                placeholder=" "
                required
              />
              <div
                onClick={() => setShowEye(!showEye)}
                className="absolute right-1 top-2 cursor-pointer"
              >
                {showEye ? (
                  <Eye size="24" className="textColor1" />
                ) : (
                  <EyeSlash size="24" className="textColor1" />
                )}
              </div>
              <label
                htmlFor="floating_password"
                className="absolute text-xs peer-focus:text-lg textColor1 peer-focus:text-white peer-focus:font-semibold  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Password
              </label>
            </div>
            <div className="flex items-center justify-between mb-6 sm:mx-8 mx-10">
              <div className="flex items-center">
                <Field name="ckeckboxValue" id="blue-checkbox">
                  {({ form: { setFieldValue } }: any) => (
                    <input
                      id="blue-checkbox"
                      name="checkbox"
                      type="checkbox"
                      onChange={(e) =>
                        setFieldValue(
                          "ckeckboxValue",
                          e.target.checked ? true : false
                        )
                      }
                      value=""
                      className="w-4 h-4 textColor5 bg-transparent rounded dark:ring-offset-gray-800 focus:ring-0 dark:bg-gray-700 dark:border-gray-600"
                    />
                  )}
                </Field>

                <label
                  htmlFor="blue-checkbox"
                  className="ml-2 text-sm font-medium textColor1"
                >
                  Remember me
                </label>
              </div>
              <Link href="" className="text-white/90 text-sm">
                Forget Password
              </Link>
            </div>

            <button
              type="submit"
              className="text-white backgroundColor2 hover:backgroundColor7 focus:ring-0 block focus:outline-none rounded-2xl text-sm font-bold px-5 py-3.5 text-center w-[80vw] sm:w-[20vw] mx-auto"
            >
              Log in
            </button>
          </Form>
        </Formik>
      </div>
      <div>
        <div className="textColor1 text-center mt-6">or log in with</div>
        <div className="flex justify-around sm:mx-20 mx-28 mt-4">
          <Link href="">
            <Image src={facebook} alt="" width={45} height={45} />
          </Link>
          <Link href="">
            <Image src={google} alt="" width={45} height={45} />
          </Link>
          <Link href="">
            <Image src={apple} alt="" width={45} height={45} />
          </Link>
        </div>
        <div className="mt-6 text-center">
          <span className="textColor1">Don't have an account?</span>
          <Link href="" className="text-white/90 ml-1 font-semibold">
            Register
          </Link>
        </div>
      </div>
      <div className="relative mt-[22vh] sm:mt-[12vh] sm:mb-2">
        <div className="mx-auto backgroundColor4 sm:w-[10vw] w-[35vw] h-1.5 rounded-full"></div>
      </div>
    </div>
  );
};

export default LoginPage;
