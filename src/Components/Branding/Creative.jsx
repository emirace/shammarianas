"use client";
import React from "react";

function UiUx() {
  function openAccordion(event) {
    document.querySelectorAll(".accordion-info").forEach((element) => {
      element.classList.remove("active");
      element.style.maxHeight = 0;
      element.parentElement.classList.remove("active");
    });
    event.currentTarget.parentElement.classList.add("active");
    event.currentTarget.nextElementSibling.style.maxHeight = "300px";
    event.currentTarget.nextElementSibling.classList.add("active");
  }
  return (
    <>
      <section className="container section-padding">
        <div className="col-md-6">
          <h6 className="sub-title main-color mb-15">
            The Importance of Effective Branding Design
          </h6>

          <div className="text">
            <p className="mb-15">
              Effective branding design is key to building trust and
              recognition. It gives your business a unique identity that helps
              you stand out and stay memorable in a competitive market. From
              your logo to your website, consistent visuals create a
              professional and polished image. More than just looks, great
              branding creates emotional connections. It makes your business
              feel relatable and reliable, encouraging customer loyalty and
              repeat visits. A well-designed brand doesn&apos;t just attract
              attention — it builds lasting relationships.
            </p>
          </div>
        </div>
      </section>
      <section className="intro-accord">
        <div className="container ontop">
          <div className="row xlg-marg">
            <div className="col-lg-6">
              <div className="img md-mb50">
                <img src="/assets/imgs/arw2.png" alt="" />
              </div>
            </div>
            <div className="col-lg-6 valign">
              <div>
                <div className="sec-head mb-50">
                  <h6 className="sub-title main-color mb-15">
                    The Role of Branding Design in a Fast-Paced Digital World?
                  </h6>
                  <p>
                    In today&apos;s fast-paced digital world, branding design is
                    essential for businesses to stand out and build connections
                    with their audience. At{" "}
                    <span className="fw-300">Sham Marianas</span>, we create
                    unique branding designs that help define your identity,
                    communicate your message clearly, and leave a lasting
                    impression. Good branding isn&apos;t just about aesthetics;
                    it&apos;s about consistency and trust. A cohesive design
                    across all platforms builds loyalty and keeps your brand
                    relevant. At <span className="fw-300">Sham Marianas</span>,
                    we ensure your brand evolves with the digital trends,
                    keeping it fresh and engaging. In short, effective branding
                    design is key to staying ahead in the competitive digital
                    landscape, building relationships with customers, and
                    driving success.
                  </p>
                </div>
                <div className="accordion bord">
                  <div
                    className="item active wow fadeInUp"
                    data-wow-delay=".1s"
                  >
                    <div onClick={openAccordion} className="title">
                      <h6>
                        How do you determine the right design elements for my
                        brand?
                      </h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        We begin with a deep understanding of your business,
                        audience, and goals. Our team conducts research to
                        create a design that aligns with your brand values,
                        ensuring your logo, color scheme, and messaging reflect
                        your identity clearly.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".3s">
                    <div onClick={openAccordion} className="title">
                      <h6>
                        Can branding design help increase customer loyalty?
                      </h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Absolutely! Strong branding creates a connection with
                        your audience, making your business more relatable and
                        trustworthy. This emotional connection leads to customer
                        loyalty, repeat visits, and long-term engagement with
                        your brand.
                      </p>
                    </div>
                  </div>

                  <div className="item wow fadeInUp" data-wow-delay=".5s">
                    <div onClick={openAccordion} className="title">
                      <h6>How long does the branding design process take?</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        The timeline for branding design varies depending on the
                        complexity of the project. On average, it takes 4-6
                        weeks to complete the entire process, from initial
                        concepts to final designs.
                      </p>
                    </div>
                  </div>
                  <div className="item wow fadeInUp" data-wow-delay=".5s">
                    <div onClick={openAccordion} className="title">
                      <h6>Why is branding design important for my business?</h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        Effective branding design builds trust, recognition, and
                        emotional connections with your customers. It sets you
                        apart from competitors, creates a memorable identity,
                        and fosters customer loyalty, which drives long-term
                        success.
                      </p>
                    </div>
                  </div>
                  <div className="item wow fadeInUp" data-wow-delay=".5s">
                    <div onClick={openAccordion} className="title">
                      <h6>
                        How do I get started with your branding design services?
                      </h6>
                      <span className="ico ti-plus"></span>
                    </div>
                    <div className="accordion-info">
                      <p className="">
                        To get started, simply contact us through our website or
                        reach out to our team at{" "}
                        <span className="fw-300">Sham Marianas</span>.
                        We&apos;ll schedule a consultation to understand your
                        needs and begin the process of crafting your unique
                        brand identity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default UiUx;
