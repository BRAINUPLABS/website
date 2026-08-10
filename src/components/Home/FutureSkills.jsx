export default function FutureSkills() {
  return (
    <section className="future-skills">
    <div className="future-skills__header">
      <h2 className="future-skills__heading">
        A complete Eco-System For <span className="text-blueS">Future Ready Skills</span>
      </h2>
      <div className="future-skills__divider"></div>
      <p className="future-skills__description">
        Brain Up Labs empowers students aged 7–18 through hands-on learning in AI, Robotics, Coding, IoT, Electronics,
        and STEM. Our experiential programs inspire creativity, critical thinking, and problem-solving, enabling
        learners to design, build, and innovate real-world solutions while developing the future-ready skills needed to
        succeed in a rapidly evolving world.
    </p>
</div>

    <div className="future-skills__grid">

      
      <div className="card card--educational-kits">

        <div className="card__image-wrapper">
          <img src="/images/ecosystem/img1.png" alt="Educational Kits" className="card__image" />
        </div>

        <span className="card__label">Educational Kits</span>
      </div>

      
      <div className="future-skills__right">

        <div className="future-skills__row">

          <div className="card card--pictoblox">

            <div className="card__image-wrapper">
              <img src="/images/ecosystem/img3.png" alt="PictoBlox" className="card__image" />
            </div>

            <span className="card__label">Personalized Learning Kits</span>
          </div>

          <div className="card card--curriculum">

            <div className="card__image-wrapper">
              <img src="/images/ecosystem/img2.jpeg" alt="Curriculum" className="card__image" />
            </div>

            <span className="card__label">AI & Robotics Lab Setup</span>
          </div>

        </div>

        <div className="future-skills__row">

          <div className="card card--teacher">

            <div className="card__image-wrapper">
              <img src="/images/ecosystem/img4.png" alt="Teacher Development Program" className="card__image" />
            </div>

            <span className="card__label">Drone Technology</span>
          </div>

          <div className="card card--codeavour">

            <div className="card__image-wrapper">
              <img src="/images/ecosystem/img5.png" alt="Codeavour" className="card__image" />
            </div>

            <span className="card__label">School Workshops</span>
          </div>

        </div>

      </div>

    </div>
  </section>
  );
}
