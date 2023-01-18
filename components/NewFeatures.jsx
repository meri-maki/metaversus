import Image from 'next/image'

const NewFeatures = ({ imgUrl, imgWidth, imgHeight, title, subtitle }) => (
  <div className="flex flex-1 flex-col sm:max-w-[250px] min-w-[210px]">
    <div className="center-flex w-[70px] h-[70px] rounded-[24px] bg-[#323f5d]">
      <Image
        src={imgUrl}
        width={imgWidth}
        height={imgHeight}
        alt={title}
        className="w-1/2 h-1/2 object-contain"
      />
    </div>
    <h2 className=" mt-[26px] font-bold text-[24px] text-white leading-[30px]">
      {title}
    </h2>
    <p className=" flex-1 mt-[16px] font-normal text-[18px] text-[#B0B0B0] leading-[32px]">
      {subtitle}
    </p>
  </div>
)

export default NewFeatures
