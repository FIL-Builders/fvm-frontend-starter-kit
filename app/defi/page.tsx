"use client"
import Header from "../components/header";
import Footer from "../components/footer";
import {
  useAccountModal
} from '@rainbow-me/rainbowkit';
import Connect from "./connect";
import ContractIntegration from "./contractIntegration";
import { useAccount,useBalance } from 'wagmi'


export default function Defi() {

  const { openAccountModal } = useAccountModal();
  const account = useAccount()

  const {data} = useBalance({
    address: account.address,
  })
  console.log(data)

  return (
    <div className="w-full min-h-screen bg-blue-600">
      <Header />
      <div className="flex flex-col justify-center items-center relative lg:flex-row gap-8 pt-48 pb-40">
        {openAccountModal && account.status === 'connected' ? <>
          <ContractIntegration account={account.address} balance={data?.formatted} />
        </> : <>
          <Connect /></>}

      </div>

      <Footer />
    </div>
  );
}
