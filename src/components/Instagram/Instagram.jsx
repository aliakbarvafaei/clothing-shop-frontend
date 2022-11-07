import React from "react";
import { useTheme } from "../../contexts/theme";
import instagram from "../../assets/images/instagram.png";
import image1 from "../../assets/images/insta/1.jpg";
import image2 from "../../assets/images/insta/2.jpg";
import image3 from "../../assets/images/insta/3.jpg";
import image4 from "../../assets/images/insta/4.jpg";
import image5 from "../../assets/images/insta/5.jpg";
import image6 from "../../assets/images/insta/6.jpg";

function Instagram(props) {
  const { theme } = useTheme();
  const themeClass =
    theme.mode === "DARK" ? "bg-darkModeLightBlack text-white" : "bg-white";

  return (
    <div className={`${themeClass} pb-[40px]`}>
      <h2 className="text-[32px] font-bold text-center"># INSTAGRAM</h2>
      <div className="flex flex-row pt-[20px] mm:h-[70px] sm:h-[100px] md:h-[140px] lg:h-[170px] xl:h-[200px] xlmin:h-[250px]">
        <div className="relative group w-1/6">
          <img className="absolute w-[100%] h-[100%]" src={image1} alt="1" />
          <div className="hidden group-hover:flex absolute w-[100%] h-[100%] bg-red opacity-50 justify-center items-center">
            <img className="w-[50%]" src={instagram} alt="instagram" />
          </div>
        </div>
        <div className="relative group w-1/6">
          <img className="absolute w-[100%] h-[100%]" src={image2} alt="2" />
          <div className="hidden group-hover:flex absolute w-[100%] h-[100%] bg-red opacity-50 justify-center items-center">
            <img className="w-[50%]" src={instagram} alt="instagram" />
          </div>
        </div>
        <div className="relative group w-1/6">
          <img className="absolute w-[100%] h-[100%]" src={image3} alt="3" />
          <div className="hidden group-hover:flex absolute w-[100%] h-[100%] bg-red opacity-50 justify-center items-center">
            <img className="w-[50%]" src={instagram} alt="instagram" />
          </div>
        </div>
        <div className="relative group w-1/6">
          <img className="absolute w-[100%] h-[100%]" src={image4} alt="4" />
          <div className="hidden group-hover:flex absolute w-[100%] h-[100%] bg-red opacity-50 justify-center items-center">
            <img className="w-[50%]" src={instagram} alt="instagram" />
          </div>
        </div>
        <div className="relative group w-1/6">
          <img className="absolute w-[100%] h-[100%]" src={image5} alt="5" />
          <div className="hidden group-hover:flex absolute w-[100%] h-[100%] bg-red opacity-50 justify-center items-center">
            <img className="w-[50%]" src={instagram} alt="instagram" />
          </div>
        </div>
        <div className="relative group w-1/6">
          <img className="absolute w-[100%] h-[100%]" src={image6} alt="6" />
          <div className="hidden group-hover:flex absolute w-[100%] h-[100%] bg-red opacity-50 justify-center items-center">
            <img className="w-[50%]" src={instagram} alt="instagram" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Instagram;
