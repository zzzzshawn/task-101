import Content from "@/components/Content";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
   <main className="w-full min-h-screen bg-primary text-text-primary">
    <Navbar/>
    <Content/>
   </main>
  );
}
