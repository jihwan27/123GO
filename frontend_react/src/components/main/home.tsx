import SubmitForm from "../shared/submit-form";
import Header from "components/shared/header";

function Home() {
  interface Props {
    firstName: string;
    lastName: string;
  }

  const a: Props = {firstName: "a", lastName: "b"};

  return (
    <div className="container-fluid">
      메인 페이지 내용
    </div>
  );
}

export default Home;