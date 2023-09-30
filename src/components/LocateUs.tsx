import { images } from "@constants/index";
import { SubHeading } from "./Heading";
import Button from "./shared/Button";

const LocateUs = () => {
  return (
    <section className="bg-[url('./assets/bg.png')] bg-cover bg-fixed bg-center bg-repeat flex justify-between min-h-screen items-center py-16 px-20 max-sm:p-16 max-ss:px-8 max-sm:flex-col">
        <div className="flex w-full flex-1 flex-col items-start justify-center">
            <SubHeading title="Contact" />
            <h1 className="capitalize tracking-wider text-6xl mb-12 text-golden font-cormorant xxl:text-9xl xxl:leading-[200px] max-xs:text-4xl max-xs:leading-[65px] max-ss:mb-6">
                locate us
            </h1>

            <div className="">
                <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                    Dossimus officiis necessitatibus, Fuga expedita unde ut ea, ratione at itaque.
                </p>
                <p className="text-[#dcca87] font-bold text-xl my-8 capitalize font-cormorant max-xs:text-lg tracking-wider max-ss:text-xl xxl:text-4xl xxl:leading-[60px]">
                    Opening Hours
                </p>
                <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                    Mon - Fri: 7AM - 11PM
                </p>
                <p className="text-white font-openSans text-base capitalize tracking-wider font-normal max-xs:text-xs max-ss:text-sm xxl:text-3xl xxl:leading-[50px] max-sm:leading-6 max-xs:leading-5 leading-7">
                    Sat - Sun: 7AM - 8PM
                </p>
            </div>

            <Button className="mt-8 capitalize">
                visit us
            </Button>
        </div>

        <div className="flex justify-center items-center ml-8 w-full flex-1 max-md:my-20">
            <img src={images.findus} alt="locate us" />
        </div>

    </section>
  );
}

export default LocateUs;;