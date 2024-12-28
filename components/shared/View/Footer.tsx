import { myName, socials } from "@/constants/about";
import { GetIcons } from "./IconProvider";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 wrapper text-center">
      <p className="pb-4 font-bold">Socials & Contact</p>
      <div className="inline-flex	flex-wrap	justify-center gap-x-7">
        {socials.map((social, index) => (
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className="rounded-full	border-current border-2 w-10 h-10 flex-center fill-current hover-invert-colors"
          >
            <GetIcons iconName={social.name} />
          </a>
        ))}
      </div>

      <div className="col-span-2 pt-10">
        <h3 className="my-2">Designed & Built by {myName}.</h3>
        <p className="mb-2">Licensed under MIT.</p>
        <p className="mb-6">&copy; {currentYear}</p>
      </div>
    </footer>
  );
};

export default Footer;
