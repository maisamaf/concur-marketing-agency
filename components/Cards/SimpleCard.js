import Image from "next/image";
const SimpleCard = ({image, alt, className}) => {
  return (
    <div className={`w-64 h-[22rem] overflow-hidden relative ${className}`}>
      <div className="w-full h-full absolute bg-black opacity-10 z-[1] rounded-3xl "/>
      <Image
        src={image}
        alt={alt}
        objectFit="cover"
        layout="fill"
        className="rounded-3xl"
      />
    </div>
  );
};

export default SimpleCard;
