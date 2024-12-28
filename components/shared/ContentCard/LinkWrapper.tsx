"use client";

type LinkWrapperProps = {
  children: React.ReactNode;
  link: string;
};

const LinkWrapper = ({ children, link }: LinkWrapperProps) => {
  return (
    <div className="cursor-pointer" onClick={() => window.open(link, "_blank")}>
      {children}
    </div>
  );
};

export default LinkWrapper;
