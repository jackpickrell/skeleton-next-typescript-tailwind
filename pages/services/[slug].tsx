import Layout from "../../components/layout";
import Hero from "../../components/hero";
import { GetServerSideProps } from "next";

const ServicePage = ({ slug }) => {
  return (
    <Layout>
      <Hero
        title={slug}
        intro="Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat facilis voluptate porro nulla sunt tempore. Voluptatibus perspiciatis, accusamus cupiditate quasi asperiores necessitatibus quas neque facilis ipsum blanditiis autem qui modi."
      />
    </Layout>
  );
};

export default ServicePage;

export const getServerSideProps: GetServerSideProps = async ({
  params: { slug },
}) => {
  return { props: { slug } };
};
