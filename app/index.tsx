"use client";

import React, { ReactNode } from 'react'
// Wallet Integration Imports

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import {State,  WagmiProvider } from 'wagmi';
import {
  filecoin,
  filecoinCalibration
} from 'wagmi/chains';
import {
  QueryClientProvider,
  QueryClient,
} from "@tanstack/react-query";
//  Chain Configuration

const projectId = `${process.env.NEXT_PUBLIC_WALLET_CONNECT_PROJECT_ID}`;

const config = getDefaultConfig({
    appName: 'FVM Frontend Starter Kit',
    projectId: projectId, // Replace with your Id
    chains: [filecoin, filecoinCalibration],
    ssr: true, // If your dApp uses server side rendering (SSR)
  });
  
// Setup queryClient
const queryClient = new QueryClient()

export function ContextProvider({
  children
}: {
  children: ReactNode
}) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  )
}