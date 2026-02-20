"use client";
import { useRouter } from 'next/navigation'
import HeroSection from '@/components/herosection';
import Navbar from '@/components/navbar';

export default function Home() {
  const router = useRouter()

  return (
    <><div>
      <Navbar/>

      <HeroSection />
      
      </div></>
      
    
  );
}
