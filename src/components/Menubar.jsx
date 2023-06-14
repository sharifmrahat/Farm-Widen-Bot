/* eslint-disable @next/next/no-img-element */
import { Fredoka } from "next/font/google";
import { Montserrat } from "next/font/google";
const freedoka = Fredoka({ subsets: ["latin"] });
const montserrat = Montserrat({ subsets: ["latin"] });
function Menubar() {
  return (
    <div className="m-4 lg:m-8">
      <div className="w-full flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-2 mb-12">
          <img
            src="https://lh3.googleusercontent.com/Y8A3Jj39UTGlnYiLztQa_-nZYeTwcGZ2LLubsOSDcBrhMKAa60rE2tK-g_F1-UeG1My1UBJ8CJ3rkCRh_hfPyJw=w16383"
            alt="Farm Widen"
            className="w-28 h-28 lg:w-40 lg:h-40"
          />
          <h1
            className={`text-3xl lg:text-4xl text-[#cc4331] font-semibold ${freedoka.className}`}
          >
            Farm Widen AI Assistant
          </h1>
          <p className={`text-xl lg:text-2xl ${montserrat.className}`}>
            Your Farming Assistant
          </p>
        </div>
        <div className="mb-12 flex flex-col justify-center items-center gap-2">
          <p className={`text-xl lg:text-2xl ${montserrat.className}`}>
            Developed By
          </p>
          <h1 className="text-2xl text-blue-800 font-semibold">
            FGC Science Club
          </h1>
        </div>

        <div className="">Important Links</div>
      </div>
    </div>
  );
}

export default Menubar;
