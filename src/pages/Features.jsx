import BentoTilt from "../components/BentoTilt";
import BentoCard from "../components/BentoCard";

function Features() {
  return (
    <section id="features" className="relative bg-black pb-52">
      <div className="container perspective-distant transform-3d mx-auto px-3 md:px-8">
        <div className="px-3 py-32">
          <p className="font-circular-web text-lg sm:text-2xl md:text-lg text-blue-50">
            Explore the Zentry Universe
          </p>
          <p className="font-circular-web max-w-md text-lg sm:text-2xl md:text-lg text-blue-50 opacity-50">
            Immerse yourself in an IP-rich product universe where AI-driven
            gamification and hyper-personalization lead the human-agentic
            economy.
          </p>
        </div>
        <BentoTilt className="border-hsla relative mb-7 h-[70vh] w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title={
              <>
                radia<b>n</b>t
              </>
            }
            desc="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
            isComingSoon
          />
        </BentoTilt>

        <div className="relative perspective-distant transform-3d w-full h-[200vh] md:h-[135vh] grid grid-cols-2 grid-rows-5 md:grid-rows-3 gap-7">
          <BentoTilt className="relative overflow-hidden rounded-md border-hsla col-span-2 row-span-2 md:col-span-1 md:row-span-2 ml-26 md:ml-0">
            <BentoCard
              src="videos/feature-2.mp4"
              title={
                <>
                  zig<b>m</b>a
                </>
              }
              desc="An anime and gaming-inspired NFT collection - the IP primed for expansion."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="relative overflow-hidden rounded-md border-hsla col-span-2 row-span-1 md:col-span-1 md:row-span-1 mr-50 md:mr-0">
            <BentoCard
              src="videos/feature-3.mp4"
              title={
                <>
                  n<b>e</b>xus
                </>
              }
              desc="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
              isComingSoon
              isLaunchSite
            />
          </BentoTilt>

          <BentoTilt className="relative overflow-hidden rounded-md border-hsla col-span-2 row-span-1 md:col-span-1 md:row-span-1 ml-26 md:ml-0">
            <BentoCard
              src="videos/feature-4.mp4"
              title={
                <>
                  az<b>u</b>l
                </>
              }
              desc="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
              isComingSoon
            />
          </BentoTilt>

          <BentoTilt className="relative overflow-hidden rounded-md col-span-1 row-span-1 ">
            <div className="grid size-full bg-violet-300 p-6">
              <h1 className="special-font bento-title">
                m<b>o</b>re
              </h1>
              <h1 className="special-font bento-title leading-0">
                co<b>m</b>ing
              </h1>
              <h1 className="special-font bento-title">
                s<b>o</b>on.
              </h1>
              <div className="relavite w-16 md:w-22 place-self-end">
                <img
                  loading="lazy"
                  src="img/play.svg"
                  alt="play-icon"
                  className="w-1/2 ml-auto object-cover bg-no-repeat"
                />
                <img
                  loading="lazy"
                  src="img/play.svg"
                  alt="play-icon"
                  className="w-1/2 ml-auto rotate-180 object-cover bg-no-repeat -translate-y-3"
                />
              </div>
            </div>
          </BentoTilt>

          <BentoTilt className="relative overflow-hidden rounded-md border-hsla col-span-1 row-span-1">
            <video
              src="videos/feature-5.mp4"
              autoPlay
              loop
              muted
              className="size-full object-cover object-center"
            />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
}

export default Features;
