import Overlay from "@/components/ui/overlay/Overlay";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-[95%] mx-auto max-w-[1450px]">
      <div className="relative h-[500px] w-full">
        <Image
          src="/assets/about.jpg"
          fill
          alt="About image"
          className="object-cover"
        />
        <Overlay />
        <h1 className="flex absolute w-full h-full justify-center items-center text-4xl font-extrabold uppercase text-white">
          About us
        </h1>
      </div>
      <div className="leading-8 text-lg bg-white mt-[-80px]w-[90%] m-auto rounded-lg p-5 shadow-xl text-center max-md:mt-0 max-md:w-full max-md:bg-transparent max-md:shadow-none">
        <p>
          Welcome to Travel N' Export - Where Innovation Meets Excellence! At
          Travel N' Export we are more than just a business; we are a collective
          of passionate individuals driven by a shared commitment to innovation,
          excellence, and the pursuit of extraordinary outcomes. Established
          2024, we have been on an exhilarating journey of growth and
          transformation, constantly pushing the boundaries of what is possible.
          Our Vision: At the heart ofTravel N' Export beats a vision that
          transcends the ordinary. We aspire to be pioneers in Blogs, setting
          new standards and redefining the way Technology operates. Our vision
          is not just about achieving success; it's about leaving an indelible
          mark on the world through our contributions and innovations.
        </p>
        <div className="w-full items-center flex justify-center">
          <Image
            src={"/assets/signature.png"}
            width={500}
            height={500}
            alt="signature"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
