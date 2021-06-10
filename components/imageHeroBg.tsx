const Hero = ({
  title,
  intro,
  button,
  image,
}: {
  title: string;
  intro: string;
  button?: { link: string; text: string };
  image: string;
}) => {
  return (
    <section
      className="py-36 bg-cover bg-center relative"
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.4),rgba(0,0,0,0)), url(${image})`,
      }}
    >
      <div className="container">
        <div className="max-w-2xl">
          <h1 className="text-white">{title}</h1>
          <p className="text-xl text-white mb-0">{intro}</p>
          {button && (
            <a href={button.link} className="button mt-10">
              {button.text}
            </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
