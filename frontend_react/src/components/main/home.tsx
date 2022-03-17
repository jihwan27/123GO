import { Container } from "react-bootstrap";
import MainSlide from "./main-slide";

function Home() {
  interface Props {
    firstName: string;
    lastName: string;
  }

  const a: Props = {firstName: "a", lastName: "b"};

  return (
    <Container className="container-fluid">
      <MainSlide />
    </Container>
  );
}

export default Home;