import Header from "../components/header";
import Footer from "../components/footer";

export default function Stats() {
  return (
    <div className="w-full h-full bg-blue-600">
      <Header showAddress={true} />
      <div className="flex flex-col justify-center items-center relative py-24 lg:flex-row gap-8">
        {/* LEFT CARD */}
        <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-200 w-1/3">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="items-center w-full justify-center grid grid-cols-1 text-left">
              <div>
                <h2 className="text-black font-bold text-lg lg:text-3xl">
                  TOKEN BALANCE
                </h2>
                <p className="text-black tracking-tight xl:text-2xl mt-5">
                  The displayed balance is retrieved by connecting the frontend
                  with the Filecoin Blockchain through the token smart contract.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-between pb-8 px-6 sm:px-8 space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2"
              >
                2500000
              </a>
            </div>
          </div>
        </div>

        {/* RIGHT CARD  */}
        <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-200 w-1/3">
          <div className="px-6 py-8 sm:p-10 sm:pb-6">
            <div className="items-center w-full justify-center grid grid-cols-1 text-left">
              <div>
                <h2 className="text-black font-bold text-lg lg:text-3xl">
                  FIL BALANCE
                </h2>
                <p className="text-black tracking-tight xl:text-2xl mt-5">
                  The native crypto currency of Filecoin is FIL and its balance can be retrieved by connecting the frontend with the Filecoin Blockchain using ethers.js library.
                </p>
              </div>
              
            </div>
          </div>
          <div className="flex flex-col flex-1 justify-between pb-8 px-6 sm:px-8 space-y-6">
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2"
                href="#"
              >
                100
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
