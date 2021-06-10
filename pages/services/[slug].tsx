import Link from "next/link";
import { FiChevronRight, FiClock, FiMail, FiPhone } from "react-icons/fi";
import Layout from "../../components/layout";
import Hero from "../../components/hero";

const AboutPage = ({ slug }) => {
  return (
    <Layout>
      <Hero
        title={slug}
        intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis voluptate porro nulla sunt tempore. Voluptatibus perspiciatis, accusamus cupiditate quasi asperiores necessitatibus quas neque facilis ipsum blanditiis autem qui modi."
      />
    </Layout>
  );
};

export default AboutPage;

export const getServerSideProps = ({ params: { slug } }) => {
  return { props: { slug } };
};
