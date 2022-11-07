import React from "react";
import { useHistory } from "react-router-dom";
import TitlePages from "../components/TitlePages/TitlePages";
import { useTheme } from "../contexts/theme";

function NotFound(props) {
  const history = useHistory();
  const { theme } = useTheme();
  const themeClass =
    theme.mode === "DARK"
      ? "bg-darkModeLightBlack text-white"
      : "bg-white text-darkGray";

  function handleHome() {
    history.push("/home");
  }
  return (
    <div>
      <TitlePages title="404" />
      <div
        className={`px-total py-[50px] flex flex-col gap-[10px] items-center justify-center ${themeClass}`}
      >
        <h2 className="font-bold sm:text-[140px] smmin:text-[200px] text-center">
          404
        </h2>
        <h3 className="sm:text-[26px] smmin:text-[32px] text-center">
          PAGE NOT FOUND
        </h3>
        <button
          type="button"
          onClick={handleHome}
          className="h-[50px] min-w-fit p-[10px] rounded-none bg-red text-white font-bold text-[14px] hover:bg-white hover:border-red hover:border-[2px] hover:border-solid hover:text-black"
        >
          BACK TO HOME
        </button>
      </div>
    </div>
  );
}

export default NotFound;
