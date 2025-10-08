const OurMission = () => {
  const missionVisionData = [
    {
      id: "mission",
      icon: "/assets/img/vector-12.svg",
      title: "Our Mission",
      paragraphs: [
        "To remove the barriers between people and progress by connecting entrepreneurs, creators, and small teams with curated support, expert services, and meaningful connections.",
        "At Nuvio, we're building an environment where growing idea is simpler, faster, and more human - from strategy and design to funding and coaching.",
      ],
    },
    {
      id: "vision",
      icon: "/assets/img/vector-13.svg",
      title: "Our Vision",
      paragraphs: [
        "To become the world's most trusted platform for early-stage growth - a digital ecosystem where freelancers thrive, founders launch smarter, and businesses scale sustainably with confidence.",
        "We envision a future where everyone, no matter where they start, has access to tools, talent, and guidance needed to turn potential into progress.",
      ],
    },
  ];

  return (
    <section
      aria-labelledby="our-story-heading "
      className="w-100 py-5 ct_px_113"
      style={{ backgroundColor: "#023047" }}
    >
      <div className="container-fluid">
        <div className="row align-items-center gy-5">
          {/* Left Column: Mission & Vision */}
          <div className="col-12 col-lg-6 d-flex flex-column gap-5">
            {missionVisionData.map((item) => (
              <article key={item.id} className="d-flex flex-column gap-3">
                <header className="">
                  <div
                    className="d-flex align-items-center mb-4 justify-content-center rounded-circle p-3"
                    style={{
                      width: "48px",
                      height: "48px",
                      backgroundColor: "#ffb703",
                    }}
                    role="img"
                    aria-label={`${item.title} icon`}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      width={24}
                      height={24}
                      className="img-fluid"
                    />
                  </div>
                  <h2 className="text-white ct_fs_28 mb-0">
                    {item.title}
                  </h2>
                </header>

                <div className="d-flex flex-column gap-3">
                  {item.paragraphs.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-white ct_fs_20 mb-0"
                      style={{ maxWidth: "800px" }}
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </article>
            ))}
          </div>

          {/* Right Column: Image */}
          <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end">
            <img
              className="img-fluid rounded-4"
              alt="Team collaboration and growth visualization"
              src="/assets/img/rectangle-4208.svg"
              width={540}
              height={554}
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurMission;
