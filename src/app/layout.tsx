import React, { Suspense } from 'react';
import '@/styles/globals.scss';
import styled from './index.module.scss';
import { Inter } from 'next/font/google';

import Header from '@/app/_common/Header/index';
import Footer from '@/app/_common/Footer/index';

import Circular from '@/components/Loading/Circular';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'chimsil',
  description: 'chimsil first next.js single project',
}

interface Props {
  children: React.ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styled.global_container}>
          <Suspense fallback={null}>
            <Header />
          </Suspense>
          <Suspense fallback={<Circular />}>
            <div className={styled.container}>
              {children}
            </div>
          </Suspense>
          <Suspense fallback={null}>
            <Footer />
          </Suspense>
        </div>
      </body>
    </html>
  )
}
