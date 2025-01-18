import React from "react";
import img7 from "../assets/img7.png";
import { Link } from "react-router-dom";
import "./About.css";
import img8 from "../assets/img8.png";
import img9 from "../assets/img9.png";
import img10 from "../assets/img10.png";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
function Header() {
  return (
    <div>
      <header className="Header">
        <div className="Header-content">
          <div className="Header-text">
            <h1>
              Carpool without reservation<tr>For your daily commute</tr>
            </h1>
          </div>
          <div className="Header-image">
            <img src={img7} alt="Image illustrative" />
          </div>
        </div>
      </header>
      <section className="Content-section">
        <h2>
          Passagers : a service<tr></tr>convenient and reliable
        </h2>
        <p className="text1">
          You want to travel as a passenger?
          <tr> With ShareMyRide, it's easy: head to the nearest stop </tr>enter
          your destination in ShareMyRide,{" "}
          <tr>
            {" "}
            wait at the stop, and within a few minutes, on most of our
            carpooling routes, rides are free!
          </tr>
        </p>
        <div className="image8">
          <img src={img8} alt="Image " />
        </div>

        <p className="text2">
          <h2>Drivers: savings without constraints!</h2>
          Are you a driver? sign in ShareMyride, drive… and that’s it. You will
          be notified of the presence of a passenger. On most of our carpooling
          lines, you will be compensated for the provision of your free seats,
          and for each passenger transported. And you support a local,
          supportive and ecological approach!
        </p>
        <div className="image9">
          <img src={img9} alt="Image " />
        </div>
      </section>

      <section className="testimonial-section">
      
        {/* Texte et bouton à gauche */}
        <div className="testimonial-text">
          <h2>What they say</h2>
          <p>
            <strong>
              The ShareMyride website is investing daily in our carpooling
              lines.
            </strong>
            .
            <br />
            Forget your prejudices about carpooling on a daily basis{" "}
            <strong> is investing daily in our carpooling lines.</strong> and
            discover a new way of considering your travels thanks to the
            testimonials of our users.
          </p>
          <Link to="/inscrire" className="inscrire-link">
          <button className="signup-button" >S'inscrire</button>
          </Link>
        </div>

        {/* Témoignages à droite */}
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <blockquote>
              <span>&quot;</span> Here is my first day as a passenger 👍 thank
              you shareMyride website😍 special mention for Ludovic who was kind
              enough to drop me off at my company 👍have a good trip everyone
            </blockquote>
            <p>– Christiane, Lignes de Plaine de l'Ain</p>
          </div>

          <div className="testimonial-card">
            <blockquote>
              <span>&quot;</span> The initiative is great! It is essential for
              the territory. I have been waiting for 10 years to have a public
              service like this..
            </blockquote>
            <p>– Olivier, Lignes de Kaysersberg</p>
          </div>
        </div>
      </section>

      <section className="Features-section">
        <div className="Feature">
          <img src={img12} alt="protect the environment" />
          <h3>protect the environment</h3>
          <p>
            with carpooling we can limit the number of cars
            <strong>in order to reduce air pollution</strong>.
          </p>
        </div>

        <div className="Feature">
          <img src={img11} alt="Faites des économies" />
          <h3>Save money</h3>
          <p>
            Enjoy commission-free service, travel at a lower cost and earn
            rewards.
          </p>
        </div>

        <div className="Feature">
          <img src={img10} alt="CovoiturE" />
          <h3>Carpool with peace of mind</h3>
          <p>
            We support you in real time by phone or via message with
            <strong> assistance.</strong>.
          </p>
        </div>
      </section>
      <section className="faq-section">
        <h1>Carpool FAQ</h1>
        <div className="faq-container">
          <div className="faq-column">
            <div className="faq-item">
              <h3>How do I book a carpool ride?</h3>
              <p>
                You can book a carpool ride on our mobile app, or on
                blablacar.com. Simply search for your destination, choose the
                date you want to travel and pick the carpool that suits you
                best! Some rides can be booked instantly, while other rides
                require manual approval from the driver. Either way, booking a
                carpool ride is fast, simple, and easy.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I cancel my carpool ride?</h3>
              <p>
                If you have a change of plans, you can always cancel your
                carpool ride from the "Your rides" section of our app. The
                sooner you cancel, the better. That way, the driver has time to
                accept new passengers. The amount of your refund will depend on
                how far in advance you cancel. If you cancel more than 24 hours
                before departure, for example, you'll receive a full refund,
                excluding the service fee.
              </p>
            </div>
            <div className="faq-item">
              <h3>How much does a carpool ride cost?</h3>
              <p>
                The costs of a carpool ride can vary greatly, and depend on
                factors like distance, time of departure, the demand for that
                ride and more. It is also up to the driver to decide how much to
                charge per seat, so it's hard to put an exact price tag on a
                ride. Check out some of our top carpool destinations to get an
                idea of price, or start searching for your next carpool ride on
                blablacar.com.
              </p>
            </div>
          </div>

          <div className="faq-column">
            <div className="faq-item">
              <h3>How do I publish a carpool ride?</h3>
              <p>
                Offering a carpool ride on ShareMyRide is easy. To publish your
                ride, use our mobile app or ShareMyRide.com. Indicate your
                departure and arrival points, the date and time of your
                departure, how many passengers you can take and the price per
                seat. You'll also need to choose how you want to accept bookings
                (either automatically or manually), and you have the option of
                adding any important details you think your passengers should
                know about. Then tap "Publish ride" and you're done!
              </p>
            </div>
            <div className="faq-item">
              <h3>What are the benefits of travelling by carpool?</h3>
              <p>
                There are multiple advantages to carpooling, over other means of
                transport. Travelling by carpool is usually more affordable,
                especially for longer distances. Carpooling is also more
                eco-friendly, as sharing a car means there will be fewer cars on
                the road, and therefore fewer emissions. Taking a carpool ride
                is also a safe way to travel in the current times. Because there
                are only a few people in a car, you have fewer points of contact
                and there's less risk than other travel options.
              </p>
            </div>
            <div className="faq-item">
              <h3>How do I start carpooling?</h3>
              <p>
                Carpooling with ShareMyRide is super easy, and free! Simply sign
                up for an account and tell us some basic details about yourself.
                Once you have a BlaBlaCar account, you can start booking or
                publishing rides directly on our website.
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer>
        <p>&copy; 2024 ShareMyRide. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Header;
