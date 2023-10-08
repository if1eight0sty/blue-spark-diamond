import React from "react";
import Image from "next/image";
import { getCldImageUrl } from "next-cloudinary";
const LogoConcept = () => {
  // get image url from cloudinary based on the image name/public id
  const getImageURL = (height: number, width: number, src: string) => {
    return getCldImageUrl({
      width,
      height,
      src,
    });
  };
  return (
    <>
      <section className="flex flex-col items-center justify-center bg-indigo-50 @container">
        <div className="flex flex-col item-center justify-center py-20 px-10">
          <div className="@[1150px]:flex items-center justify-center gap-x-5">
            <div className="flex flex-col max-w-[750px] @[1150px]:max-w-[700px]  items-start justify-center">
              <h6 className="uppercase font-base text-sm text-start mb-2">
                CONCEPT BEHIND BLUE SPARK DIAMOND COMPANY&apos;S LOGO
              </h6>
              <h3 className="text-5xl lg:text-6xl font-serif font-bold mb-5">
                The Wings Of The Hawk
              </h3>
              <p className="text-gray-500 font-normal text-start" data-aos="fade-up"
                data-aos-duration="2000"
              >
                A bird with an understanding capacity like no other, which believes
                in the power of teamwork — The Hawk. The Hawk is not only a symbol
                of power but also a globally attached to freedom, liberty, power,
                and grandeur.
              </p>
              <div className="flex justify-center @[1150px]:hidden">
                <Image
                  width={1080}
                  height={900}
                  src={getImageURL(300, 600, "blue-spark/logos/logo-concept")}
                  sizes="100vw"
                  alt="team - an image for Blue Spark Diamond logo concept"
                  className="object-cover rounded mt-5"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                />
              </div>
              <p className="text-gray-500 font-normal mt-3 text-start" data-aos="fade-up"
                data-aos-duration="2000"
              >
                The Hawk is known as one of the most fore-sighted birds. To give
                flight to its vision and move with graceful speed, Blue Spark
                Diamond Company has used the Hawk&apos;s wings in its logo. The
                crown of this kingbird is also included in the logo, which adds
                to its greatness. The circular shape in the middle is a
                representation of the earth&apos;s circumference and the
                separated lines denote a destination that ends beyond the earth.
                Blue Spark Diamond Company&apos;s main area of expertise is the
                business of diamonds, therefore, the logo has a diagram of a
                diamond at its center.
              </p>
            </div>
            <div className="@[1150px]:flex justify-center @[1150px]:w-[40%] hidden">
              <Image
                width={700}
                height={500}
                src={getImageURL(300, 600, "blue-spark/logos/logo-concept")}
                sizes="(max-width: 768px) 100vw,
                            (max-width: 100px) 20vw,
                            30vw"
                alt="team - an image for Blue Spark Diamond logo concept"
                className="object-cover rounded mt-5"
                data-aos="fade-up"
                data-aos-duration="2000"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LogoConcept;
