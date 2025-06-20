import Image from "next/image";
import { Outfit } from "next/font/google";

const outfitTitle = Outfit({
  weight: "700"
});

const outfitBody = Outfit({
  weight: "400"
});

export default function Home() {
  return (
    <>
      <div className="bg-white rounded-xl w-64 flex items-center m-30 drop-shadow-xl flex-col p-3">
        <Image
          src="/image-qr-code.png"
          width={256}
          height={256}
          alt="Qr Code image"
          className="rounded-lg mb-3"
        />
        <h1 className={`${outfitTitle.className} font-bold text-lg text-center mb-3`}>Improve your front-end skills by building projects</h1>
        <p className={`${outfitBody.className} text-sm text-center mb-3`}>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
      </div>
    </>
  );
}
