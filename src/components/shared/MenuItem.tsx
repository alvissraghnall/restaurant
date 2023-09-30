
const MenuItem = ({
    title, price, tags
}: {
    title: string, price: number, tags: string[]
}) => {
  return (
    <div className="w-full my-4 flex flex-col">
        <div className="flex justify-between items-center">
            <div className="flex-1">
                <p className="text-[#dcca87] font-bold text-xl capitalize font-cormorant max-xs:text-lg tracking-wider max-ss:text-xl xxl:text-4xl xxl:leading-[60px]">
                    {title}
                </p>
            </div>

            <div className="mx-4 w-24 h-0.5 bg-golden" />

            <div className="flex justify-end items-end">
                <p className="text-white font-bold text-xl capitalize font-cormorant max-xs:text-lg tracking-wider max-ss:text-xl xxl:text-4xl xxl:leading-[60px]">
                    ${price}
                </p>
            </div>
        </div>

        <div className="w-full mt-2">
            <p className="text-[#aaa] font-normal text-base capitalize font-playfair max-xs:text-xs tracking-wider max-ss:text-sm xxl:text-3xl xxl:leading-[50px]">
                {tags.map((tag, idx) => (
                    idx !== tags.length - 1 ? tag + " | " : tag
                ))}
            </p>
        </div>
    </div>
  )
}

export default MenuItem;