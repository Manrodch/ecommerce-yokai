import { useState } from "react";

export const Form = () => {
  const [values, setValues] = useState({
    name: "",
    email: "",
  });

  const handleInputChange = (e) => {
    console.log(e.target.name);
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Submit");
    console.log(values);
  };

  return (
    <div className="my-5 container">
      <form onSubmit={handleSubmit}>
        <input
          className="form-control my-2"
          type="text"
          placeholder="Your name"
          value={values.name}
          onChange={handleInputChange}
          name="name"
        />
        <input
          className="form-control my-2"
          type="text"
          placeholder="Your mail"
          value={values.email}
          onChange={handleInputChange}
          name="email"
        />

        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </div>
  );
};

// form for dummies

// export const Form = () => {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");

//     const handleName = (e) => {
//       setName(e.target.value);
//     };
//     const handleEmail = (e) => {
//       setEmail(e.target.value);
//     };

//     const handleSubmit = (e) => {
//       e.preventDefault();

//       console.log("Submit");
//       console.log(name, email);
//     };
