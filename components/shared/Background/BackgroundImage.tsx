import Image from "next/image";

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 z-[-10]">
      <Image
        fill
        sizes="100vw"
        src={"/assets/images/tree-bg-light.webp"}
        alt="bg-trees"
        className="blur-[500px] dark:hidden"
      />
      <Image
        fill
        sizes="100vw"
        src={"/assets/images/tree-bg.webp"}
        alt="bg-trees"
        className="blur-[500px] hidden dark:block"
      />
    </div>
  );
};

export default BackgroundImage;
