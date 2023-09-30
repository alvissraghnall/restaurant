import { BsInstagram, BsArrowLeftShort,
    BsArrowRightShort
} from "react-icons/bs";
import { SubHeading } from "./Heading";
import Button from "./shared/Button";
import { useRef } from "react";
import images from "@constants/images";

enum Direction {
    LEFT, RIGHT
}

const Gallery = () => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: Direction) => {
    if (scrollRef.current) {
        if (direction === Direction.LEFT) {
            scrollRef.current.scrollLeft -= 300;
        } else {
            scrollRef.current.scrollLeft += 300;
        }
    }
  }

  return (
    <section className="flex justify-center items-center py-16 pl-24 bg-blaque max-md:flex-col max-sm:pl-16 max-ss:pl-8">
        <div className="flex-1 items-start flex justify-center flex-col min-w-[500px] pr-8 xxl:min-w-[940px] xxl:pr-16 max-ss:min-w-full">
            <SubHeading title="Instagram" />    
            <h1 className="capitalize tracking-wider text-6xl text-golden font-cormorant xxl:text-9xl xxl:leading-[200px] max-xs:text-4xl max-xs:leading-[65px]">
                photo gallery
            </h1>

            <p className="my-8 text-[#aaa] font-openSans text-base capitalize tracking-wider font-normal xxl:my-16">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati doloribus dolor, esse magnam suscipit voluptatum fugiat consectetur nam. Animi repellendus cum ab doloremque, id illo nisi quasi ex iste voluptatum quaerat dolores, laboriosam ducimus molestiae aliquam officia eligendi nam.
            </p>

            <Button className="mt-4 capitalize">
                view more
            </Button>
        </div>    

        <div className="flex-1 flex max-w-[50%] relative max-md:max-w-full">
            <div className="flex w-max overflow-x-scroll max-md:max-w-full max-md:mt-20 max-sm:pt-16 max-sm:pl-16 max-ss:pl-8" ref={scrollRef} style={{ scrollbarWidth: "none" }}>
                {
                    [images.gallery01,images.gallery02,images.gallery03,images.gallery04].map(
                        (img, idx) => (
                            <div className="flex justify-center items-center relative min-w-[300px] h-[450px] mr-8 group xxl:min-w-[400px] xxl:h-[523px] max-ss:min-w-[250px] max-ss:h-80" key={idx}>
                                <img src={img} alt="Gallery image" className="w-full h-full object-cover opacity-100 duration-500 ease-out transition group-hover:opacity-30" />
                                <BsInstagram className="absolute opacity-50 text-3xl text-white transition ease-in-out duration-500 group-hover:opacity-100 cursor-pointer" />
                            </div>
                        )
                    )
                }
            </div>

            <div className="flex w-full justify-between items-center px-4 absolute bottom-[5%]">
                <BsArrowLeftShort className="text-golden text-3xl cursor-pointer bg-blaque rounded-md hover:text-white" onClick={() => scroll(Direction.LEFT)} />
                <BsArrowRightShort className="text-golden text-3xl cursor-pointer bg-blaque rounded-md hover:text-white" onClick={() => scroll(Direction.RIGHT)} />
            </div>
        </div>
    </section>
  )
}

export default Gallery;