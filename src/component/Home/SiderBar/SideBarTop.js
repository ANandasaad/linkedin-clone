import React from "react";
import { RxAvatar } from "react-icons/rx";

const SideBarTop = () => {
  return (
    <div className=" rounded-lg border border-gray-200  h-fit bg-white my-5 sticky top-0">
      <div className="flex flex-col items-center border-b-[1px]">
        <img alt="backgound rounded-lg h-fit"  src="https://media.licdn.com/dms/image/C4E16AQFbh_xiE78wBA/profile-displaybackgroundimage-shrink_350_1400/0/1660159718031?e=1687392000&v=beta&t=9KiXYMje3cqGjNcw6YbjD4cYhmtfcDjFLT1PuF9aVpg" />
        <RxAvatar className="text-[40px] mt-[-17px] text-gray-500 bg-gray-50 rounded-full " />
        <h2 className="mt-1 font-bold">Anand Kushwaha</h2>
        <h4 className=" text-gray-400">anandkushwaha70@gmail.com</h4>
      </div>

      <div className="my-2 border-b-[1px]">
        <div className="my-2">
          <p className="hover:bg-gray-100 text-center text-[15px] ">Who's viewed your profile <span className=" px-1 text-blue-600 font-bold text-[12px]">1042</span></p>
        </div>
        <div className="my-2">
          <p className="hover:bg-gray-100  text-center text-[15px] ">Impresssion of Your Post <span className=" px-1  text-blue-600 font-bold text-[12px]">513</span></p>
        </div>
      </div>

      <div className=" hover:bg-gray-100 border-b-[1px]">
        <p className="hover:bg-gray-100 px-2 py-2 text-center "> See Your Permium features</p>
      </div>
      <div className="  ">
        <p className="px-2 py-2 text-center hover:bg-gray-100">My items</p>
      </div>
    </div>
  );
};

export default SideBarTop;
