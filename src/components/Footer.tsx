
import {
    FiFacebook,
    FiTwitter,
    FiInstagram
} from "react-icons/fi";
import { SubHeading } from "./Heading";
import Button from "./shared/Button";
import images from "@constants/images";

const Footer = () => {
  return (
    <div className="w-full relative z-[1] flex justify-start bg-blaque items-center flex-col py-16 px-20 max-sm:p-16 max-ss:px-8 max-ss:pb-8">
        <Overlay />
        <Newsletter />

        <div className="w-full justify-between flex items-start px-8 mt-20 max-md:flex-col max-md:items-center">
            <div className="flex-1 text-center m-4 max-md:my-8 max-md:w-full max-ss:space-y-2">
                <h1 className="capitalize font-cormorant text-white font-normal tracking-wider leading-10 mb-4 text-3xl xxl:text-5xl xxl:leading-[60px]">
                    contact us
                </h1>
                <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                    9W 35rd St, New York, NY 10019, USA
                </p>
                <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                    +37889373
                </p>
                <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                    +1212738029
                </p>
            </div>

            <div className="flex-1 text-center m-4 max-md:my-8 max-md:w-full">
                <p className='text-white leading-9 font-extrabold font-cormorant text-3xl mb-3 max-[333px]:w-4/5 w-full'>
                    DRACULA
                </p>

                <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                    Here to serve you amicably; and in swift, professional fashion.
                </p>

                <img src={images.spoon} alt="" className="mt-4 w-[42px] inline-block" />

                <div className="mt-2 flex justify-center">
                    <FiFacebook className="text-white m-2 cursor-pointer text-2xl hover:text-golden" />
                    <FiInstagram className="text-white m-2 cursor-pointer text-2xl hover:text-golden" />
                    <FiTwitter className="text-white m-2 cursor-pointer text-2xl hover:text-golden" />
                </div>
            </div>

            <div className="flex-1 text-center m-4 max-md:my-8 max-md:w-full">
                <h1 className="capitalize font-cormorant text-white font-normal tracking-wider leading-10 mb-4 text-3xl xxl:text-5xl xxl:leading-[60px]">
                    working hours
                </h1>
                <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                    Monday - Friday:
                </p>
                <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7 mb-4">
                    07:00AM - 11:00 PM
                </p>
                <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                    Saturday - Sunday:
                </p>
                <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                    07:00AM - 08:00PM
                </p>
            </div>

        </div>

        <div className="flex-1 text-center m-4 mt-12">
            <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                &copy; Dracula Inc., 2023
            </p>
        </div>
    </div>
  )
}

const Newsletter = () => (
    <div className="py-8 px-16 border-solid border border-golden bg-blaque max-ss:py-8 max-ss:border-none">
        <div className="text-center">
            <SubHeading title="newsletter" />

            <h1 className="capitalize tracking-wider text-6xl mb-6 text-golden font-cormorant xxl:text-9xl xxl:leading-[200px] max-xs:text-4xl max-xs:leading-[65px] max-[333px]:leading-[52px] max-[333px]:text-3xl">
                subscribe to our newsletter
            </h1>

            <p className="text-white font-openSans text-base tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                ...and never miss any updates!
            </p>
        </div>

        <div className="flex justify-center items-center flex-row mt-12 max-md:flex-col max-md:w-full">
            <input type="email" name="email" id="email" placeholder="Enter your email" className="w-[600px] border border-solid border-golden rounded-md font-cormorant text-white md:mr-8 py-3 px-4 bg-blaque text-base max-md:mb-8 max-md:w-full xxl:text-3xl focus:outline-none " />

            <Button className="w-max capitalize">subscribe</Button>
        </div>
    </div>
);

const Overlay = () => (
    <div className="w-full h-full -z-[1] flex flex-col absolute">
        <div className="h-1/4 bg-blaque" />
        <div className="bg-[url('./assets/bg.png')] bg-cover bg-fixed bg-center bg-repeat h-3/4" />
    </div>
);

export default Footer;