import Image from "next/image";
import { Inter } from "next/font/google";
import VideoList from "@/components/VideoList";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <div>
    <VideoList />
    
   </div>
  );
}
