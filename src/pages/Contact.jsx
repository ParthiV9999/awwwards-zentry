import AnimatedTitle from "../components/AnimatedTitle";
import Button from "../components/Button";
import ImageClipBox from "../components/ImageClipBox";

function Contact() {
  return (
    <section id="contact" className="relative w-full px-10 py-20">
      <div className="relative rounded-lg py-24 text-blue-50 bg-black">
        <div className="absolute -left-5 top-0 hidden h-full overflow-hidden w-72 sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 translate-y-65 lg:translate-y-12"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:-top-30 md:w-70 sm:left-auto sm:right-5 md:right-10 lg:top-18 sm:w-80">
          <ImageClipBox
            src="/img/swordman-partial.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <AnimatedTitle
          title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> g<b>a</b>ming t<b>o</b>gether."
          className="special-font w-full !text-5xl !font-black !leading-[0.9] !md:text-8xl"
        />

        <Button
          title="Contact us"
          containerClass="mt-10 !mx-auto cursor-pointer"
        />
      </div>
    </section>
  );
}

export default Contact;
