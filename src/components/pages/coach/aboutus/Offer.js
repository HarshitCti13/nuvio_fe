

const Offer = () => {
  const services = [
    {
      id: 1,
      icon: "https://creativethoughtsinfo.com/CT01/nuvio/assets/img/vector-14.svg",
      iconAlt: "Vector",
      iconPosition: { width: "15px", height: "13px", top: "3px", left: "1px" },
      title: "Enterprise Solutions",
      description:
        "Hire top-tier remote talent or post jobs to attract mission-aligned candidates. Nuvio makes it easy for growing businesses to find evaluate, and onboard the right people for critical roles.",
      hasCustomIcon: false,
    },
    {
      id: 2,
      icon: "https://creativethoughtsinfo.com/CT01/nuvio/assets/img/vector-15.svg",
      iconAlt: "Vector",
      iconPosition: { width: "16px", height: "12px", top: "2px", left: "0px" },
      title: "Freelancer Network",
      description:
        "Find flexible work or expert support on demand. Our platform connects freelancers with vetted clients for remote projects across design, marketing, customer service and more",
      hasCustomIcon: false,
    },
    {
      id: 3,
      icon: "https://creativethoughtsinfo.com/CT01/nuvio/assets/img/Coaching _Hub_icon.png",
      iconAlt: "Frame",
      iconPosition: null,
      title: "Coaching Hub",
      description:
        "Get matched with personal, leadership and business coaches to help you grow with clarity. From mindset shifts to founder strategy real support, tailored to your journey.",
      hasCustomIcon: false,
    },
    {
      id: 4,
      icon: "https://creativethoughtsinfo.com/CT01/nuvio/assets/img/vector-16.svg",
      iconAlt: "Vector",
      iconPosition: { width: "13px", height: "12px", top: "2px", left: "1px" },
      title: "Funding & Investing",
      description:
        "Bring your project to life with the right kind of support from aligned investors, grant makers and CSR partners. We connect creators and founders with capital that moves ideas forward.",
      hasCustomIcon: false,
    },
    {
      id: 5,
      icon: "https://creativethoughtsinfo.com/CT01/nuvio/assets/img/vector-17.svg",
      iconAlt: "Vector",
      iconPosition: { width: "13px", height: "13px", top: "1px", left: "1px" },
      title: "Business Services",
      description:
        "From product design to digital strategy access curated experts to help you launch faster, scales smarter, and stay focused on what matters. Think of us as your plug-in operations team.",
      hasCustomIcon: false,
    },
  ];

  return (
    <section className="py-5 ct_px_40">
      <div className="container-fluid">
        {/* Header */}
        <header className="text-center mb-5">
          <h2 className="fw-normal fs-3 mb-3">
            What We <span className="text-warning">Offer</span>
          </h2>
          <p className="text-dark fs-6 mx-auto" style={{ maxWidth: "720px" }}>
            Whether you&apos;re building solo or leading a growing team, Nuvio
            connects you to expert services, vetted talent, and smart tools when
            and where you need them most.
          </p>
        </header>

        <div className="row align-items-center gy-4">
          {/* Left Column: Illustration */}
          <div className="col-12 col-lg-5 text-center text-lg-start mb-4 mb-lg-0">
            <img
              src="https://creativethoughtsinfo.com/CT01/nuvio/assets/img/rectangle-4208-1.svg"
              alt="Services illustration"
              width={606}
              height={679}
              className="img-fluid rounded"
              priority
            />
          </div>

          {/* Right Column: Services */}
          <div className="col-12 col-lg-7 d-flex flex-column gap-4">
            {services.map((service) => (
              <article key={service.id} className="d-flex align-items-start gap-3">
                {/* Icon */}
                {service.hasCustomIcon ? (
                  <img
                    src={service.icon}
                    alt={service.iconAlt}
                    width={30}
                    height={30}
                    className="flex-shrink-0"
                  />
                ) : (
                  <div className="flex-shrink-0 d-flex align-items-center justify-content-center bg-warning rounded-circle" style={{ width: "38px", height: "38px", position: "relative" }}>
                    <img
                      src={service.icon}
                      alt={service.iconAlt}
                      // style={{
                      //   width: service.iconPosition?.width,
                      //   height: service.iconPosition?.height,
                      //   position: "absolute",
                      //   top: service.iconPosition?.top,
                      //   left: service.iconPosition?.left,
                      // }}
                      width={20}
                      height={20}
                    />
                  </div>
                )}

                {/* Content */}
                <div>
                  <h3 className="fw-medium fs-5 mb-1">{service.title}</h3>
                  <p className="fs-6 text-dark mb-0">{service.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Offer;
