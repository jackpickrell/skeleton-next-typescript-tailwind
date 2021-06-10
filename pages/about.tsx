import Layout from "../components/layout";
import Hero from "../components/imageHeroBg";

const AboutPage = () => {
  return (
    <Layout>
      <Hero
        image="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80"
        title="About Us"
        intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis voluptate porro nulla sunt tempore. Voluptatibus perspiciatis, accusamus cupiditate quasi asperiores necessitatibus quas neque facilis ipsum blanditiis autem qui modi."
      />
    </Layout>
  );
};

export default AboutPage;
