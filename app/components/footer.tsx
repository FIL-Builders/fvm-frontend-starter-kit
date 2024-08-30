import Image from "next/image";

export default function Footer() {
  return (
    <div className="fixed bottom-0 w-full bg-blue-600 h-20 flex items-center">
      <div className="fixed right-10 flex flex-row gap-8">
        <a
          className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-full shadow-[5px_5px_black] text-center transform transition w-full px-2 py-2"
          href="www.google.com"
        >
          <Image
            src="/assets/logos/x-logo.png"
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </a>
        <a
          className="text-black items-center inline-flex bg-white border-2 border-black duration-200 ease-in-out focus:outline-none hover:bg-black hover:shadow-none hover:text-white justify-center rounded-full shadow-[5px_5px_black] text-center transform transition w-full px-2 py-2"
          href="www.google.com"
        >
          <Image
            src="/assets/logos/discord-logo.png"
            width={30}
            height={30}
            alt="Picture of the author"
          />
        </a>
      </div>
      <div className="fixed left-10">
        Made with Love 
      </div>
    </div>
  );
}
