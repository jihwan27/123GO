function Home() {
  interface Props {
    firstName: string;
    lastName: string;
  }

  const a: Props = {firstName: "a", lastName: "b"};

  return (
    <div>
      <div>Header</div>
      <div>Dashboard</div>
      <div>Footer</div>
    </div>
  );
}

export default Home;