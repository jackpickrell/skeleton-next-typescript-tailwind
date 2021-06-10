import Link from "next/link";
import { FiChevronRight, FiClock, FiMail, FiPhone } from "react-icons/fi";
import Layout from "../components/layout";
import ContactForm from "../components/contactForm";
import Hero from "../components/hero";

export default function Home() {
  return (
    <Layout>
      <Hero
        title="Home Page"
        intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde incidunt necessitatibus alias, voluptatibus culpa ipsum earum! Dolor quae, harum aliquid fugiat architecto at doloremque sunt suscipit quisquam voluptates est laboriosam."
        button={{ link: "/contact", text: "Get Started" }}
      />
      <section className="py-20 bg-blueGray-100">
        <div className="container text-center">
          <h2 className="mb-8">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="rounded-lg border shadow bg-white">
              <img
                className="mx-auto w-full object-cover"
                src="https://via.placeholder.com/320x180"
                alt=""
              />
              <div className="p-6">
                <h3>Design</h3>
                <p className="text-base mb-0 text-blueGray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  incidunt necessitatibus alias.
                </p>
                <div className="flex justify-end">
                  <Link href="#">
                    <a className="text-primary font-bold mt-4 group">
                      Read More
                      <FiChevronRight className="text-xl inline-block transform transition-transform group-hover:translate-x-1" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg border shadow bg-white">
              <img
                className="mx-auto w-full object-cover"
                src="https://via.placeholder.com/320x180"
                alt=""
              />
              <div className="p-6">
                <h3>Development</h3>
                <p className="text-base mb-0 text-blueGray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  incidunt necessitatibus alias.
                </p>
                <div className="flex justify-end">
                  <Link href="#">
                    <a className="text-primary font-bold mt-4 group">
                      Read More
                      <FiChevronRight className="text-xl inline-block transform transition-transform group-hover:translate-x-1" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className="rounded-lg border shadow bg-white">
              <img
                className="mx-auto w-full object-cover"
                src="https://via.placeholder.com/320x180"
                alt=""
              />
              <div className="p-6">
                <h3>Branding</h3>
                <p className="text-base mb-0 text-blueGray-600">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  incidunt necessitatibus alias.
                </p>
                <div className="flex justify-end">
                  <Link href="#">
                    <a className="text-primary font-bold mt-4 group">
                      Read More
                      <FiChevronRight className="text-xl inline-block transform transition-transform group-hover:translate-x-1" />
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="mb-2">Get in touch</h3>
              <p className="mb-4 text-gray-600">
                We'd be chuffed to hear from you. Contact us directly or send us
                a message and we'll get back to you when we can.
              </p>
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
}
