import React, { useState } from "react";
import "./profile.scss";
import Spinner from "../Spinner/Spinner";
import FormInput from "../FormInput/FormInput";
import Popup from "../Popup/Popup";

const Profile = () => {
  const [loading, setLoading] = useState(false);
  const [show, setShow] = useState(false);
  const handleUpdate = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShow((prev) => !prev);
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const [values, setValues] = useState({
    name: "",
    birthday: "",
    email: "",
    phone: "",
  });

  const inputs = [
    {
      id: 1,
      name: "name",
      type: "text",
      label: "Full name:",
    },
    {
      id: 2,
      name: "birthday",
      type: "date",
      label: "Day Of Birth:",
    },
    {
      id: 3,
      name: "email",
      type: "email",
      label: "Email:",
      errorMessage: "It should be a valid email adress!",
      required: true,
    },
    {
      id: 4,
      name: "phone",
      type: "text",
      label: "Phone:",
      errorMessage: "Phone number must be numeric only!",
      pattern: `^[0-9]*$`,
      required: true,
    },
  ];

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };
  console.log(values);
  return (
    <div className="profile-wrapper">
      <div className="profile">
        <div className="profile-container">
          <div className="profile__heading">Profile</div>
          <div className="profile__content">
            <form onSubmit={handleSubmit}>
              <div className="form-wrapper">
                {inputs.map((input) => (
                  <FormInput
                    key={input.id}
                    {...input}
                    value={values[input.name]}
                    onChange={onChange}
                  />
                ))}
              </div>
            </form>
          </div>
          <div className="profile__footer">
            <div className="btn profile-btn update">
              <button onClick={handleUpdate}>
                {loading ? <Spinner /> : "Update"}
              </button>
            </div>
            <div className="btn profile-btn cancel">
              <button onClick={() => window.location.reload()}>Cancel</button>
            </div>
          </div>
        </div>
      </div>
      {show ? <Popup setShow={setShow}/> : ""}
    </div>
  );
};

export default Profile;
