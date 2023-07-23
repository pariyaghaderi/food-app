import Image from 'next/image'

import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import { Hero } from '@/components/Hero'
import Body from '@/components/Body'
import Body2 from '@/components/Body2'
import { Body3 } from '@/components/Body3'
import {Body4} from '@/components/Body4'
import {Body5} from '@/components/Body5'
import {Footer} from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
<div>
  <Header/>
  <Hero/>
  <Body/>
  <Body2/>
  <Body3/>
  <Body4/>
  <Body5/>
  <Footer/>
</div>
  )
}
