import SectionHeading from "../SectionHeading/SectionHeading";
import "./Iconbox.scss";
import IconCard from "../iconboxCard/IconCard";

const Iconbox = () => {
  return (
    <section>
      <div className="st-height-b100 st-height-lg-b80"></div>
      {/* Section heading */}
      <SectionHeading title={"Service"} />
      <IconCard />
      <div className="st-height-b70 st-height-lg-b50"></div>
    </section>
  );
};

export default Iconbox;
