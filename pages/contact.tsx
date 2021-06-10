import { FiClock, FiMail, FiPhone } from "react-icons/fi";
import Layout from "../components/layout";
import Hero from "../components/hero";
import ContactForm from "../components/contactForm";

const ContactPage = () => {
  return (
    <Layout>
      <Hero
        title="Get in touch"
        intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis voluptate porro nulla sunt tempore."
      />
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="text-2xl">
                <FiPhone className="inline-block text-primary" /> 01234 56789
              </p>
              <p className="text-2xl">
                <FiMail className="inline-block text-primary" /> info@domain.com
              </p>
              <p className="text-2xl">
                <FiClock className="inline-block text-primary" /> 9am - 5pm
                Monday - Friday.
              </p>
            </div>
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ContactPage;
