import { data, images } from "@constants/index"
import { SubHeading } from "./Heading"

const AwardCard = ({
    award: { imgUrl: image, subtitle, title }
}: {
    award: typeof data.awards[0]
}) => (
    <div className="flex-1 flex items-start justify-start min-w-[200px] m-4 xxl:min-w-[400px] max-xs:min-w-full max-xs:my-4">
        <img src={image} alt="Award" className="w-12 h-12" />
        <div className="flex flex-col ml-4">
            <p className="text-[#dcca87] font-bold text-xl capitalize font-cormorant max-xs:text-lg tracking-wider max-ss:text-xl xxl:text-4xl xxl:leading-[60px]">{title}</p>
            <p className="text-white font-bold text-xl capitalize font-cormorant max-xs:text-lg tracking-wider max-ss:text-xl xxl:text-4xl xxl:leading-[60px]">{subtitle}</p>
        
        </div>
    </div>
);

const Awards = () => {
  return (
    <section className="bg-[url('./assets/bg.png')] bg-cover bg-fixed bg-center bg-repeat flex justify-between min-h-screen items-center py-16 px-20 max-sm:p-16 max-ss:px-8 max-sm:flex-col">
        <div className="flex-1 w-full sm:w-1/2 flex-col flex justify-center items-start">
            <SubHeading title="Awards & Recognition" />
            <h1 className="capitalize tracking-wider text-6xl text-golden font-cormorant xxl:text-9xl xxl:leading-[200px] max-xs:text-4xl max-xs:leading-[65px]">
                our laurels
            </h1>

            <div className="flex justify-start mt-12 items-center flex-wrap">
                {
                    data.awards.map(
                        (award, idx) => (
                            <AwardCard award={award} key={idx} />
                        )
                    )
                }
            </div>
        </div>

        <div className="flex-1 flex ml-8 justify-center items-start w-full max-lg:mt-20">
            <img src={images.laurels} alt="Laurels Image" className="w-4/5 max-lg:w-full" />

        </div>
    </section>
  )
}

export default Awards