import { Header, Button } from "components";
import React from "react";
import "./ContactUsSection.scss";
import { useForm } from "react-hook-form";

type FormValues = {
  name: string;
  email: string;
  phoneNumber: string;
};

const ContactUsSection = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ mode: "onChange" });
  const onSubmit = handleSubmit((data) => {
    console.log(data);
    //save somewhere
    reset();
  });
  return (
    <div id="contactUsSection">
      <Header text="Contact Us" />
      {/* <Header text="If you have any questions" /> */}
      <p className="subtext">If you have any questions</p>

      <div className="contactusContainer">
        {/* <div className="designRectangle"></div> */}
        <form onSubmit={onSubmit}>
          <div className="inputContainer">
            <input
              id="nameInput"
              placeholder="Name"
              type="name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Field is required",
                },
                minLength: {
                  value: 2,
                  message: "Length can not be less than 1",
                },
              })}
            />
            <p className="errors">{errors.name && errors.name.message}</p>
          </div>

          <div className="inputContainer">
            <input
              id="emailInput"
              placeholder="Email"
              type="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Field is required",
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Invalid email address",
                },
              })}
            />
            <p className="errors">{errors.email && errors.email.message}</p>
          </div>

          <div className="inputContainer">
            <input
              id="numberInput"
              placeholder="Telephone number"
              type="number"
              {...register("phoneNumber", {
                required: {
                  value: true,
                  message: "Field is required",
                },
              })}
            />
            <p className="errors">
              {errors.phoneNumber && errors.phoneNumber.message}
            </p>
          </div>

          <Button label="Book now" variant="secondary" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default ContactUsSection;
