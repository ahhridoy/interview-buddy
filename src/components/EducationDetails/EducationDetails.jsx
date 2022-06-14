import React, { useState } from "react";
import "./EducationDetails.scss";
import { useForm } from "react-hook-form";
import { Button } from "react-bootstrap";

const EducationDetails = () => {
  const [success, setSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   const onSubmit = (data) => console.log(data);

  const onSubmit = (data) => {
    fetch("http://localhost:5000/educationDetails", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSuccess(true);
        }
      });
  };

  return (
    <div className="py-4 px-4 my-3 mx-3 bg-white rounded border">
      <form onSubmit={handleSubmit(onSubmit)} className="form-field">
        <div className="d-flex">
          <div className="">
            <label>College*</label> <br />
            <input
              {...register("college", { required: true })}
              className="input-field py-3 px-5"
            />
          </div>

          <div>
            <label>Degree*</label> <br />
            <input
              {...register("degree", { required: true })}
              className="input-field py-3 px-5"
            />
          </div>

          <div>
            <label>Course*</label> <br />
            <input
              {...register("course", { required: true })}
              className="input-field py-3 px-5"
            />
          </div>

          <div>
            <label>Year of Completion*</label> <br />
            <input
              {...register("year", { required: true })}
              className="input-field py-3 px-5"
            />
          </div>
        </div>{" "}
        <br />
        <label>Skill*</label> <br />
        <textarea
          {...register("skill", { required: true })}
          className="input-field w-100 py-3 px-5"
        />
        <label>Projects*</label> <br />
        <textarea
          {...register("projects", { required: true })}
          className="input-field w-100 py-3 px-5"
        />
        {errors.exampleRequired && <span>This field is required</span>}
        {/* <input type="submit" /> */}
        <div className="text-end">
          <Button type="submit">Save</Button>
        </div>
      </form>
      {success && alert("Order Placed Successfully!")}
    </div>
  );
};

export default EducationDetails;
