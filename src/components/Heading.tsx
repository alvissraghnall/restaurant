import { images } from "../constants";
import Button from "./shared/Button";

export const SubHeading = ({
    title
}: {
    title: string
}) => (
    <div className="mb-4">
        <p className="text-white font-bold text-xl capitalize font-cormorant max-xs:text-lg tracking-wider max-ss:text-xl xxl:text-4xl xxl:leading-[60px]">{title}</p>
        <img src={images.spoon} alt="spoon" className="w-11 xxl:w-[75px] inline" />
    </div>
);

const Heading = () => {
  return (
    <div className="flex justify-between items-center min-h-screen py-16 p-20 max-lg:flex-col bg-blaque max-sm:p-16 max-ss:px-8">
        <div className="flex-1 flex flex-col justify-center items-start w-full">
            <SubHeading title="Chase the new flavor" />

            <h1 className="font-cormorant tracking-wider text-8xl uppercase text-golden max-ss:max-w-full max-ss:text-7xl max-ss:leading-[98px] max-xs:text-6xl max-xs:leading-[80px]">
                The key to a fine dining.
            </h1>

            <p className="font-openSans my-8 text-white">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur debitis nulla voluptates cupiditate id, dignissimos provident modi quos eaque mollitia dolorum magnam necessitatibus perspiciatis assumenda hic cumque eos! Nisi optio eos dolorem praesentium quaerat rerum suscipit molestiae sed unde. Earum voluptatibus culpa illum eligendi ad voluptas dolore debitis cupiditate sequi temporibus ducimus architecto sapiente deserunt harum, sint autem explicabo.
            </p>

            <Button className="bg-white">
                Explore Menu
            </Button>
        </div>

        <div className="flex-1 flex ml-8 justify-center items-start w-full max-lg:mt-20">
            <img src={images.welcome} alt="Welcome Image" className="w-4/5 max-lg:w-full" />

        </div>

    </div>
  )
}

export default Heading;