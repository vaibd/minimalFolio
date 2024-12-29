import Image from "next/image";

const baseImageProps = {
  fill: true,
  sizes: "100vw",
  priority: true,
};

const BackgroundImage = () => {
  return (
    <div className="absolute inset-0 z-[-10]">
      <Image
        {...baseImageProps}
        src={"/assets/images/tree-bg-light.webp"}
        alt="bg-trees-light"
        className="blur-[500px] dark:hidden"
      />
      <Image
        {...baseImageProps}
        src={"/assets/images/tree-bg.webp"}
        alt="bg-trees"
        className="blur-[500px] hidden dark:block"
      />
    </div>
  );
};

export default BackgroundImage;
