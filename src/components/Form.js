import React, { useState } from "react";

function Form() {
  const [info, setInfo] = useState({
    firstName: "Adeeb",
    lastName: "Samad",
    admin: true,
  });

  function handleInfoChange(event) {
    const name = event.target.name
    let value = event.target.value
    if (event.target.type === "checkbox") {
      value = event.target.checked;
    }
    setInfo({
      ...info,
    [name]: value,
    })
  }

  // function handleLastNameChange(event) {
  //   setFullName({
  //     ...fullName,
  //   lastName: event.target.value
  //   })
  // }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(info);
    // return (
    //   <div>
    //     <h4>{info.firstName} {info.lastName}</h4>
    //     <p>{info.admin ? "admin" : "member"}</p>
    //   </div>
    // )
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" onChange={handleInfoChange} value={info.firstName} />
      <input type="text" name="lastName" onChange={handleInfoChange} value={info.lastName} />
      <input type="checkbox" name="admin" onChange={handleInfoChange} checked={info.admin}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
