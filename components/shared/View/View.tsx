import { Toaster } from "@/components/ui/toaster";
import BackgroundAura from "../Background/BackgroundImage";
import Footer from "./Footer";
import Header from "./Header";

const View: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <>
      <BackgroundAura />
      <Header />
      <main className="wrapper flex-center flex-col content-z-index">
        {children}
      </main>
      <Footer />
      <Toaster />
    </>
  );
};

export default View;
