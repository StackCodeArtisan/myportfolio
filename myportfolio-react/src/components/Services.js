import React from 'react';

const Services = () => (
  <section id="service" className="services-mf route" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">Services</h3>
            <p className="subtitle-a">
              My services covers every aspect of web development, web deployment and every web services
            </p>
            <div className="line-mf"></div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="service-box">
            <div className="service-ico">
              <span className="ico-circle"><i className="ion-monitor"></i></span>
            </div>
            <div className="service-content">
              <h2 className="s-title">Web Design</h2>
              <p className="s-description text-center">
                Transform your vision into stunning digital experiences with our web design services. <br /> I craft visually captivating, user-friendly designs that reflect your brand identity and leave a lasting impression on your audience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <div className="service-ico">
              <span className="ico-circle"><i className="ion-code-working"></i></span>
            </div>
            <div className="service-content">
              <h2 className="s-title">Web Development</h2>
              <p className="s-description text-center">
                Bring your ideas to life with our cutting-edge web development services. From responsive designs to robust functionality,<br /> I create dynamic, user-friendly websites tailored to meet your business goals and deliver exceptional performance.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="service-box">
            <div className="service-ico">
              <span className="ico-circle"><i className="ion-camera"></i></span>
            </div>
            <div className="service-content">
              <h2 className="s-title">UX Specialist</h2>
              <p className="s-description text-center">
                I Deliver exceptional user experiences with our expert UX design services. My specialists craft intuitive, user-centered interfaces that enhance engagement, streamline navigation, and ensure your digital products leave a lasting impression.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Services; 