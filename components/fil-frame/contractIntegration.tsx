"use client"

import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./contractDetails";
import { useReadContract } from 'wagmi'

interface ContractProps {
    account: `0x${string}`;
    balance: string | undefined;
}

const ContractIntegration: React.FC<ContractProps> = ({ account, balance }) => {

    const { data } = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'balanceOf',
        args: [account],
    })

    const tokenName  = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'name'
    })

    const decimals  = useReadContract({
        address: CONTRACT_ADDRESS,
        abi: CONTRACT_ABI,
        functionName: 'decimals'
    })

    console.log(decimals.data)

    return (
        <>
            {/* LEFT CARD */}
            <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-300 w-2/3 lg:w-1/3">
                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                    <div className="items-center w-full justify-center grid grid-cols-1 text-center">
                        <div>
                            <h2 className="text-black font-bold text-lg lg:text-3xl">
                                TOKEN BALANCE
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 cursor-pointer justify-between pb-8 space-y-6">
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <a
                            className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2"
                        >
                            {(Number(data)/ 10 ** Number(decimals.data))?.toString()} {tokenName.data?.toString()}
                        </a>
                    </div>
                </div>
            </div>

            {/* RIGHT CARD  */}
            <div className="flex flex-col border-2 border-black overflow-hidden p-8 rounded-xl shadow-large bg-yellow-300 w-2/3 lg:w-1/3">
                <div className="px-6 py-8 sm:p-10 sm:pb-6">
                    <div className="items-center w-full justify-center grid grid-cols-1 text-center">
                        <div>
                            <h2 className="text-black font-bold text-lg lg:text-3xl">
                                FIL BALANCE
                            </h2>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col flex-1 justify-between pb-8 px-6 sm:px-8 space-y-6">
                    <div className="flex flex-col gap-3 sm:flex-row">
                        <a
                            className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-xl shadow-[5px_5px_black] text-center transform transition w-full lg:px-8 lg:py-4 lg:text-4xl px-4 py-2"
                            href="#"
                        >
                            {balance?.slice(0,10)} FIL
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ContractIntegration;