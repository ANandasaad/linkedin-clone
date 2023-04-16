import React from "react";

const LoginContainer = () => {
  return (
    <div className="flex justify-around items-center mt-9 max-mobile:block ">
      <div className="basis-2/4  mx-10 max-mobile:mx-1 max-mobile:px-4 ">
        <h1 className="text-[60px] font-light text-amber-700 max-mobile:text-[30px] max-mobile:w-80 max-mobile:my-5">
          Welcome to your professional community
        </h1>
        <label>Email or phone</label> <br />
        <input className="w-96 py-3 px-2 my-2 border border-black rounded-md max-mobile:w-80" />{" "}
        <br />
        <label>Password</label> <br />
        <input className="w-96 py-3 px-2 my-2 border border-black rounded-md  max-mobile:w-80" />
        <p className="my-3 font-bold text-blue-600">Forgot password?</p>
        <button className="w-96  py-3 rounded-full font-bold bg-blue-600 text-white my-5 max-mobile:w-80">Sign in</button>
        <div className="flex items-center">
        <span className=" mx-2 w-1/4 border font-thin max-mobile:ml-12 border-black h-0"></span> <p className="px-2">or</p> <span className=" w-1/4 h-[-1px] border border-black"></span>
        </div>
        <button className="w-96  py-1 rounded-full border border-gray-400 mt-3 max-mobile:w-80"> Continue with Google</button>
        <button className="w-96  py-3 rounded-full text-gray-600 font-bold border border-gray-600 my-5 max-mobile:w-80">New to Linkedin? Join Now</button>
        
      </div>


      <div className="basis-2/4  mr-10">
        <img
          className="h-full w-full mt-20 max-mobile:mx-4"
          src="https://media.licdn.com/media//AAYQAgSrAAgAAQAAAAAAAF28luld64NDRCi0l6N4Bki57w.png"
          alt="poster"
        />
      </div>
    </div>
  );
};

export default LoginContainer;
