import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Karla } from "next/font/google";
import Link from "next/link";
// import heroimage from "./assets/hero image.jpg";
import hero from "../assets/hero2.jpg";
import { SignIn } from "@/components/SignIn";

const karla = Karla({ subsets: ["latin"], weight: "800" });

export default function Home() {
  return (
    <section className="min-h-[90vh] w-full flex flex-col justify-center bg-background ">
      <div className="mx-auto max-w-3xl justify-center px-4 md:flex md:max-w-4xl md:items-center md:gap-4 lg:gap-6 lg:max-w-[90vw]">
        <div className="text-center md:text-start space-y-10">
          <h1 className="mb-4 max-w-2xl text-4xl font-bold leading-none tracking-tight md:text-5xl xl:text-6xl">
            Register Your Team
            <span
              className={`primary block text-4xl lg:max-w-5xl font-extrabold tracking-tighter text-primary ${karla.className}`}
            >
              Dayo Anifowose League
            </span>
          </h1>
          <p className="text-muted-background lg:text-md mb-6 max-w-2xl font-light md:text-lg lg:mb-8">
            Dive into the heart of football action with the{" "}
            <span className="italic text-primary">Dayo Anifowose</span> League,
            where passion meets the pitch in an electrifying showcase of skill,
            strategy, and sportsmanship. Join us as we embark on a season of
            unforgettable moments, where every match is more than just a game—
            it&apos;s a battle for glory!
          </p>
          <Button asChild className="px-16 py-7 focus:ring-ring">
            <Link href="/team/register" className="text-lg">
              Register Now
            </Link>
          </Button>
        </div>

        <div className="hidden md:flex border ">
          <Image
            src={hero}
            alt="Hero Image"
            priority
            width={600}
            height={400}
          />
        </div>
      </div>

    </section>
  );
}
