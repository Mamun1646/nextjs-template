import Image from "next/image"

export const FacebookLogin = () => {
  return (
    <div className="bg-gray-100 flex flex-col items-center h-screen space-y-3-2">
      <div className="flex flex-col justify-between ">
        {/* <Image src="/facebook-text.svg" fill className="w-40 h-4" alt="Facebook Text Image" /> */}
        <span className="text-blue-500 font-bold text-3xl py-4 mt-10 cursor-pointer">facebook</span>
        <p className="text-xl text-black hidden">Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className="bg-white shadow-lg rounded-md flex space-y-3 flex-col p-8 w-72">
        <input
          type={"text"}
          className="p-2 shadow-sm bg-slate-100 text-xs"
          placeholder="Email address or phone number"
        />
        <input type={"password"} className="p-2 shadow-sm bg-slate-100  text-xs" placeholder="Password" />
        <button className="bg-blue-500 py-2 text-white text-xl fond-bold text-center">Log In</button>
        <p className="text-blue-500 text-sm text-center cursor-pointer">Forgotten password?</p>
      </div>
    </div>
  )
}
