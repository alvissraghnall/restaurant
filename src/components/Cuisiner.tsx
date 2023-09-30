import { images } from "@constants/index";
import { BiSolidQuoteAltLeft } from "react-icons/bi";
import { SubHeading } from "./Heading";

const Cuisiner = () => {
  return (
    <section className="bg-[url('./assets/bg.png')] bg-cover bg-fixed bg-center bg-repeat flex justify-center items-center py-16 px-20 max-sm:p-16 max-ss:px-8 max-md:flex-col">
        <div className="flex justify-start mr-8 items-center ml-8 w-full flex-1 max-md:my-20">
            <img src={images.chef} alt="chef" className="w-96 h-96 z-0 max-ss:w-4/5 max-ss:h-80 max-md:w-full" />
        </div>

        <div className="flex w-full flex-1 flex-col items-start justify-center">
            <SubHeading title="Chef's Word" />
            <h1 className="capitalize tracking-wider text-6xl text-golden font-cormorant xxl:text-9xl xxl:leading-[200px] max-xs:text-4xl max-xs:leading-[65px]">
                what we believe in
            </h1>

            <div className="flex flex-col w-full mt-10">
                <div className="flex justify-start items-end">
                    <BiSolidQuoteAltLeft className="mr-2 text-white w-24 my-auto h-[3.9rem]" />
                    <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                        Animi repellendus cum ab doloremque, laboriosam ducimus molestiae aliquam officia eligendi nam.
                    </p>
                </div>

                <p className="text-white leading-7 font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-sm:leading-6 max-xs:leading-5 max-ss:text-sm xxl:text-3xl xxl:leading-[50px]">
                    Eum praesentium quos sequi pariatur quasi commodi, qui fuga facere placeat sunt porro natus neque vel reiciendis aliquam, tempore nemo. Officia blanditiis, veritatis consequatur est labore sequi odio praesentium pariatur ut? Molestiae cum quam, facilis amet dolorum ad, nostrum culpa suscipit maxime numquam possimus officiis necessitatibus fuga expedita unde ut ea, ratione at itaque! 
                </p>
            </div>

            <div className="w-full mt-12">
                <h5 className="text-golden font-playfair text-3xl capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-5xl xxl:leading-[50px] ">Kevin Luo</h5>
                <p className="my-8 text-[#aaa] font-openSans text-base capitalize tracking-wider font-normal xxl:my-16 max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px]">
                    Chef && Founder
                </p>

                <img src={images.sign} alt="Founder's signature" className="w-64 mt-12 max-xxl:w-96 max-xs:w-4/5" />
            </div>
        </div>
        
    </section>
  )
}

export default Cuisiner;


