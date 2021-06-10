const Hero = ({
  title,
  intro,
  button,
}: {
  title: string;
  intro: string;
  button?: { link: string; text: string };
}) => {
  return (
    <section className="py-20">
      <div className="container">
        <div className="max-w-2xl">
          <h1>{title}</h1>
          <p className="text-xl mb-10 text-blueGray-600">{intro}</p>
          {button && (
            <a href={button.link} className="button">
              {button.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
