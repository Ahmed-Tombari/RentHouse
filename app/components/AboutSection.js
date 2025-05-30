import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="overflow-hidden py-20 lg:py-25 xl:py-30 2xl:py-35">
      <div className="mx-auto max-w-1390 px-4 md:px-8 xl:px-9">
        <div className="flex items-center gap-8 xl:gap-30">

          <div className="animate_left relative hidden gap-8 md:flex md:w-1/2">
            <div>
              <img
                alt="Shape"
                loading="lazy"
                width={36}
                height={66}
                decoding="async"
                data-nimg="1"
                className="absolute -left-5 top-5"
                style={{ color: 'transparent' }}
                src="/images/H1.avif"
              />
              <img
                alt="About"
                role="presentation"
                loading="lazy"
                width={274}
                height={323}
                decoding="async"
                data-nimg="1"
                className="mb-8 aspect-274/323 rounded-lg object-cover"
                style={{ color: 'transparent' }}
                srcSet="/images/H1.avif"
                src="/images/H1.avif"
              />
              <img
                alt="About"
                loading="lazy"
                width={290}
                height={343}
                decoding="async"
                data-nimg="1"
                className="aspect-290/343 rounded-lg object-cover"
                style={{ color: 'transparent' }}
                srcSet="/images/H1.avif"
                src="/images/H1.avif"
              />
            </div>

            <div>
              <img
                alt="Shape"
                loading="lazy"
                width={43}
                height={86}
                decoding="async"
                data-nimg="1"
                style={{ color: 'transparent' }}
                src="/images/H1.avif"
              />
              <img
                alt="About"
                loading="lazy"
                width={290}
                height={485}
                decoding="async"
                data-nimg="1"
                className="mb-5 mt-7.5 aspect-273/457 rounded-lg object-cover"
                style={{ color: 'transparent' }}
                srcSet="/images/H1.avif"
                src="/images/H1.avif"
              />
              <img
                alt="Shape"
                loading="lazy"
                width={198}
                height={99}
                decoding="async"
                data-nimg="1"
                className="mx-auto"
                style={{ color: 'transparent' }}
                src="/images/H1.avif"
              />
            </div>
          </div>

          <div className="animate_right md:w-1/2">
            <h4 className="mb-5 text-xl font-medium text-primary">Why Choose Us</h4>
            <h2 className="mb-7.5 text-3xl font-semibold text-black dark:text-white lg:text-4xl xl:text-title-xl">
              Next.js Template with Powerful Integrations
            </h2>
            <p className="lg:w-[95%]">
              It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
            </p>
            <a className="mt-10 inline-flex items-center gap-6.5" href="#">
              <span className="relative z-1 flex h-12.5 w-12.5 items-center justify-center rounded-full bg-primary">
                <span className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
                <img
                  alt="Play"
                  loading="lazy"
                  width={24}
                  height={24}
                  decoding="async"
                  data-nimg="1"
                  style={{ color: 'transparent' }}
                  src="/images/H1.avif"
                />
              </span>
              <span className="text-black dark:text-white">SEE HOW WE WORK</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
