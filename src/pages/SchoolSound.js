import HeaderContainer from "../components/HeaderContainer";
import Row from "../components/Row";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent from "../components/FrameComponent";
import Layout from "../components/Layout";
import FrameComponent3 from "../components/FrameComponent3";
import Layout1 from "../components/Layout1";
import Div from "../components/Div";
import FrameComponent1 from "../components/FrameComponent1";
import "./SchoolSound.css";

const SchoolSound = () => {
  return (
    <div className="school-sound">
      <section className="main">
        <div className="header-1">
          <div className="navbar-toggler-icon" />
          <HeaderContainer />
          <Row />
        </div>
      </section>
      <FrameComponent2 />
      <section className="frame-parent">
        <FrameComponent />
        <Layout />
        <FrameComponent3 />
      </section>
      <Layout1 />
      <footer className="footer">
        <Div />
        <FrameComponent1 />
      </footer>
    </div>
  );
};

export default SchoolSound;
