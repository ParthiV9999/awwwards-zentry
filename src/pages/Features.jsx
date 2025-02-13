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
        <BentoTilt className="border-hsla relative mb-7 h-130 w-full overflow-hidden rounded-md md:h-[65vh]">
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
      </div>
    </section>
  );
}

export default Features;
