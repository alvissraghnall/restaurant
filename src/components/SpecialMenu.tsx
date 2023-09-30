import data from "@constants/data";
import { SubHeading } from "./Heading";
import images from "@constants/images";
import Button from "./shared/Button";
import MenuItem from "./shared/MenuItem";

const SpecialMenu = () => {
  return (
    <section className="flex justify-center items-center py-16 px-20 max-sm:p-16 max-ss:px-8 flex-col bg-blaque">
        <div className="mb-8 text-center">
            <SubHeading title="Menu that suits you perfectly" />
            <h1 className="capitalize tracking-wider text-6xl text-golden font-cormorant max-xs:text-5xl xxl:text-9xl xxl:leading-[200px]">
                today's special
            </h1>
        </div>

        <div className="w-full my-8 flex justify-center items-start flex-row max-md:flex-col max-md:items-center max-md:w-full">
            <div className="flex-1 w-full flex-col flex justify-center items-center">
                <p className="max-ss:text-4xl max-xs:text-2xl max-ss:leading-10 font-playfair font-semibold text-5xl leading-[60px] tracking-wider text-white capitalize">wine & beer</p>
                <div className="flex-col flex my-8 w-full">
                    {
                        data.wines.map((wine, idx) => (
                            <MenuItem key={idx} title={ wine.title } price={wine.price} tags={wine.tags}  />
                        ))
                    }
                </div>
            </div>

            <div className="w-96 mx-8 max-ss:w-full max-md:my-12 max-md:mx-0 max-xxl:max-w-[650px]">
                <img src={images.menu} alt="today's speziale!" className="h-auto w-full max-xxl:h-[900px]" />
            </div>

            <div className="flex-1 w-full flex-col flex justify-center items-center">
                <p className="max-ss:text-4xl max-xs:text-2xl max-ss:leading-10 font-playfair font-semibold text-5xl leading-[60px] tracking-wider text-white capitalize max">cocktails</p>
                <div className="flex-col flex my-8 w-full">
                    {
                        data.cocktails.map((coxktail , idx) => (
                            <MenuItem key={idx} title={ coxktail.title } price={coxktail.price} tags={coxktail.tags}  />
                        ))
                    }
                </div>
            </div>

        </div>
        
        <div className="mt-4">
            <Button className="capitalize">view more</Button>
        </div>
    </section>
  )
}

export default SpecialMenu;
