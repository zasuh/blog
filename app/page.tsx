import { Noto_Sans } from "next/font/google";
import { cn } from "./utils/cn";

const noto = Noto_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function Page() {
  return (
    <section className="bg-white border-2 border-black rounded-md shadow-sm shadow-black p-4">
      <h1
        className={cn(
          "mb-8 text-4xl font-semibold tracking-tighter",
          noto.className
        )}
      >
        Žane's Digital Garden
      </h1>
      <p className="mb-4">
        {`I'm a web developer with 5+ YOE from Ljubljana, Slovenia with a focus on the frontend.`}
      </p>
      <p className="mb-4">{`contact: suhadolnik@proton.me`}</p>
    </section>
  );
}
