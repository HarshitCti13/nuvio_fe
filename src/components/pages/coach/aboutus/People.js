
const People = () => {
  const features = [
    { id: 1, icon: "https://nuvio-fe.onrender.com/nuvio/assets/img/emojione-white-heavy-check-mark.svg", text: "All-in-one Access" },
    { id: 2, icon: "https://nuvio-fe.onrender.com/nuvio/assets/img/emojione-white-heavy-check-mark-1.svg", text: "Tailored Support" },
    { id: 3, icon: "https://nuvio-fe.onrender.com/nuvio/assets/img/emojione-white-heavy-check-mark-2.svg", text: "Expert-Led, Human Centered" },
    { id: 4, icon: "https://nuvio-fe.onrender.com/nuvio/assets/img/emojione-white-heavy-check-mark-3.svg", text: "Smart, Streamlined Tools" },
    { id: 5, icon: "https://nuvio-fe.onrender.com/nuvio/assets/img/emojione-white-heavy-check-mark-4.svg", text: "Real Relationships, Not Just Listings" },
  ];

  return (
    <section
      className="py-5 ct_px_100_new "
      style={{ backgroundColor: "#FB850033" }}
    >
      <div className="container-fluid">
        <div className="row align-items-center gy-4">
          {/* Left Column */}
          <div className="col-12 col-lg-7 d-flex flex-column gap-3">
            {/* Header */}
            <header className="mb-4">
              <h2 className="fw-normal text-dark fs-3 mb-3">
                Why People Choose <span className="text-warning">Nuvio</span>
              </h2>
              <p className="text-dark fs-6" style={{ maxWidth: "660px" }}>
                At Nuvio we know what it&apos;s like to juggle too many tools,
                search endlessly for the right help, and feel stuck between
                great ideas and execution. That&apos;s why we created a simpler
                way forward — an ecosystem where entrepreneurs, small teams, and
                growing businesses can access trusted support without the
                overwhelm.
              </p>
            </header>

            {/* Features List */}
            <ul className="list-unstyled">
              {features.map((feature) => (
                <li key={feature.id} className="d-flex align-items-center mb-2">
                  <img
                    src={feature.icon}
                    alt="Check mark"
                    width={24}
                    height={24}
                    className="me-2"
                  />
                  <span className="text-dark fs-6">{feature.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Column */}
          <div className="col-12 col-lg-5 text-center text-lg-start">
            <img
              src="https://nuvio-fe.onrender.com/nuvio/assets/img/rectangle-4207.svg"
              alt="Video preview showing Nuvio platform features"
              height={525}
              className="img-fluid rounded w-100"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default People;
