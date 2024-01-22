export const ContactPage = () => {
  return (
    <>
      <div
        className="container-fluid py-5 mb-5"
        style={{
          background:
            'url("https://cdn.discordapp.com/attachments/1174741902415900742/1192021363226066995/Group_1_1.png?ex=65a78f67&is=65951a67&hm=9c775bc530131c19b9b3f664dd2d51330c4d99b6a77c9e046c1467f00dbd1faf&")',
        }}
      >
        <div className="container py-5">
          <div className="text-white h1 text-center">Contact Us</div>
          <div className="text-white mb-3 h4 text-center">Cacti Life</div>
        </div>
      </div>

      <div className="container-fluid pt-5 px-0 wow fadeIn" data-wow-delay="0.1s">
        <iframe
          className="w-100 mb-n2"
          style={{ height: "400px" }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.9997874062087!2d98.68817087472395!3d3.5875226503020445!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x303131b05672220d%3A0xba277a5eddb19abe!2sUniversitas%20Mikroskil%2C%20Kampus%20B!5e0!3m2!1sid!2sid!4v1705914659171!5m2!1sid!2sid"
          allowfullscreen=""
          aria-hidden="false"
        ></iframe>
      </div>
    </>
  );
};
