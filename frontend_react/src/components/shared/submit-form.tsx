import { useState } from "react";
import { HomeApi } from "modules/api/home-api";

function SubmitForm() {
  
  const homeApi = new HomeApi();
  const [name, setName] = useState("");

  const onChange = (event: any) => setName(event.target.value);
  const onSubmit = (event: any) => {
    event.preventDefault();
    if (name === "") {
      return;
    }

    // send Post
    homeApi.getName(name).then(res => {
      console.log(res.data);
    });

    setName("");
  };
  
  return (
    <div>
        <h1>Submit Form</h1>
        <form onSubmit={onSubmit}>
          <input
            onChange={onChange}
            value={name}
            type="text"
            placeholder="Write your name..."
          />
          <button className="btn btn-primary">Submit name</button>
        </form>
        <hr />
      </div>
  );
}

export default SubmitForm;