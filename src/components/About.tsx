import images from "@constants/images";
import Button from "./shared/Button";

const About = () => {
  return (
    <div className="bg-[url('./assets/bg.png')] bg-center bg-cover bg-fixed bg-repeat flex justify-center items-center py-16 px-20 max-sm:p-16 max-ss:px-8 relative">
        <div className="flex justify-center items-center absolute inset-0">
            <img src={images.G} alt="G" className="w-96 h-96 z-0 max-ss:w-4/5 max-ss:h-80" />
        </div>

        <div className="flex justify-center items-center w-full z-10 max-[900px]:flex-col">
            <div className="flex-1 flex justify-end items-end flex-col text-right">
                <h1 className="capitalize tracking-wider text-6xl text-golden font-cormorant">
                    about us
                </h1>
                <img src={images.spoon} alt="About Us Spoon Image" />
                <p className="my-8 text-[#aaa] font-openSans text-base capitalize tracking-wider font-normal xxl:my-16">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus dolor, esse magnam suscipit voluptatum fugiat consectetur nam. Animi repellendus cum ab doloremque, id illo nisi quasi ex iste voluptatum quaerat dolores, laboriosam ducimus molestiae aliquam officia eligendi nam.
                </p>

                <Button>
                    Know More
                </Button>
            </div>

            <div className="my-8 mx-16 flex justify-center items-center max-[900px]:my-16">
                <img src={images.knife} alt="" className="h-[900px] xxl:h-[1122px]" />
            </div>

            <div className="flex-1 flex justify-start items-start flex-col text-left">
                <h1 className="capitalize tracking-wider text-6xl text-golden font-cormorant">
                    Our History
                </h1>
                <img src={images.spoon} alt="Our History Spoon Image" />
                <p className="my-8 text-[#aaa] font-openSans text-base capitalize tracking-wider font-normal xxl:my-16">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus dolor, esse magnam suscipit voluptatum fugiat consectetur nam. Animi repellendus cum ab doloremque, id illo nisi quasi ex iste voluptatum quaerat dolores, laboriosam ducimus molestiae aliquam officia eligendi nam.
                </p>

                <Button>
                    Know More
                </Button>
            </div>
        </div>
    </div>
  )
}

export default About;