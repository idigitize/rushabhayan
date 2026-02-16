{
  /* --- ROTATING TEXT & ARROW CONNECTOR --- */
}
{
  /* Positioned intersecting the two sections */
}
<div className="absolute bottom-[-60px] right-[8%] z-20 flex items-center justify-center md:bottom-[-80px] md:right-[15%]">
  {/* Container for the Badge */}
  <div className="relative flex items-center justify-center w-36 h-36 md:w-48 md:h-48 rounded-full shadow-2xl bg-[#5e2a16] overflow-hidden">
    {/* Background: Arrow in Circle Image (Static) */}
    <div className="absolute inset-0 w-full h-full">
      <Image
        src="/assets/icons/Arrow%20in%20Circle.svg"
        alt="Arrow"
        fill
        className="object-cover"
      />
    </div>

    {/* Rotating Text Ring (Overlay) */}
    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
      <svg
        ref={circleTextRef}
        viewBox="0 0 100 100"
        className="w-[85%] h-[85%] overflow-visible"
        style={{ transformOrigin: "center" }}
      >
        <path
          id="circlePath"
          d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
          fill="transparent"
        />
        <text
          fill="#fff2d6"
          fontSize="11"
          fontWeight="600"
          letterSpacing="0.5px"
        >
          <textPath xlinkHref="#circlePath" className="uppercase font-manrope">
            Find a great purpose • Connect with God •
          </textPath>
        </text>
      </svg>
    </div>
  </div>
</div>;

{
  /* --- SECTION 2: Content with Stamp --- */
}
<section className="relative w-full bg-[#fff2d6] py-24 px-6 md:px-20 md:py-32 flex flex-col md:flex-row items-center justify-center gap-12 lg:gap-24">
  {/* Left: Stamp */}
  <div className="flex-shrink-0 relative group">
    <div className="relative w-48 h-auto md:w-56 p-2 border-2 border-dashed border-[#5e2a16]/20 flex items-center justify-center transition-transform hover:rotate-2 duration-700">
      <div className="relative w-full bg-[#ae8a68]/5 p-2 md:p-4">
        <Image
          src="/assets/icons/Stamp.svg"
          alt="Stamp"
          width={240}
          height={300}
          className="object-contain w-full h-auto mix-blend-multiply opacity-90"
        />
      </div>
    </div>
  </div>

  {/* Right: Animated Text */}
  <div className="max-w-xl lg:max-w-2xl text-center md:text-left">
    <p
      ref={textRef}
      className="text-2xl md:text-3xl lg:text-4xl font-didot leading-relaxed transition-all duration-700"
      style={{ color: "#9ca3af" }}
    >
      Rushabhayan is an international conference and art forum celebrating
      India’s first teacher,{" "}
      <span className="italic font-normal">Raja Rushabhdev</span>... the man who
      gave humanity its earliest systems of{" "}
      <span className="italic font-normal">living</span>,{" "}
      <span className="italic font-normal">learning</span>, and{" "}
      <span className="italic font-normal">leadership</span>.
    </p>
  </div>
</section>;
