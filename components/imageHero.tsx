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
    <section className="">
      <div className="container grid md:grid-cols-2 gap-12">
        <div className="max-w-2xl py-20">
          <h1>{title}</h1>
          <p className="text-xl mb-0 text-blueGray-600">{intro}</p>
          {button && (
            <a href={button.link} className="button mt-10">
              {button.text}
            </a>
          )}
        </div>
        <div
          style={{ backgroundImage: `url(${image})` }}
          className="bg-cover bg-center"
        ></div>
      </div>
    </section>
  );
};

export default Hero;
