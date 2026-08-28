import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const testimonials = [
  {
    name: 'Jane Doe',
    role: 'Product Manager',
    text: 'Joshua is a fantastic developer! He delivered our project on time and exceeded expectations with his attention to detail and professionalism.',
    image: 'img/testimonial-2.jpeg',
  },
  {
    name: 'John Smith',
    role: 'CEO, TechCorp',
    text: 'Working with Joshua was a pleasure. His technical skills and communication are top-notch. Highly recommended!',
    image: 'img/work-2.jpg',
  },
  {
    name: 'Mary Johnson',
    role: 'Designer',
    text: 'Joshua brought our vision to life with beautiful code and creative solutions. I look forward to collaborating again!',
    image: 'img/work-3.jpg',
  },
];

const Testimonials = () => (
  <section className="testimonials-mf route" data-aos="fade-up">
    <div className="container">
      <div className="row">
        <div className="col-sm-12">
          <div className="title-box text-center">
            <h3 className="title-a">Testimonials</h3>
            <p className="subtitle-a">What clients and colleagues say</p>
            <div className="line-mf"></div>
          </div>
        </div>
      </div>
      <div className="row justify-content-center">
        <div className="col-md-8">
          <Carousel
            showArrows={true}
            showThumbs={false}
            showStatus={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={6000}
            stopOnHover={true}
            swipeable={true}
            emulateTouch={true}
          >
            {testimonials.map((t, idx) => (
              <div key={idx} className="testimonial-box p-4">
                <div className="author-test mb-3">
                  <img src={t.image} alt={t.name} className="rounded-circle" style={{ width: 80, height: 80, objectFit: 'cover' }} />
                  <span className="author">{t.name}</span>
                  <span className="role d-block text-muted" style={{ fontSize: '0.95rem' }}>{t.role}</span>
                </div>
                <div className="description">
                  <p className="lead">"{t.text}"</p>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  </section>
);

export default Testimonials; 