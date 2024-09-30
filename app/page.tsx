import demo from "@/assets/demo.gif";
import { ConnectButton } from "@particle-network/connectkit";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container min-h-screen flex justify-center items-center mx-auto flex-col gap-4">
      <div className="flex items-center">
        <ConnectButton />
      </div>
    </div>
  );
}
