import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

// Validation Schema
const schema = Yup.object().shape({
  name: Yup.string().required("Name is required").min(3, "Minimum 3 characters"),
  fatherName: Yup.string().required("Father name is required"),
  phone: Yup.string()
    .required("Phone is required")
    .matches(/^[0-9]+$/, "Only numbers allowed")
    .min(11, "Must be 11 digits"),
  clas: Yup.string().required("Class is required"),
});

export default function StudentForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log("Submitted:", data);
    reset(); // clears form after submit
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <label>Name</label>
      <input {...register("name")} />
      <p style={{ color: "red" }}>{errors.name?.message}</p>

      <label>Father Name</label>
      <input {...register("fatherName")} />
      <p style={{ color: "red" }}>{errors.fatherName?.message}</p>

      <label>Phone</label>
      <input {...register("phone")} />
      <p style={{ color: "red" }}>{errors.phone?.message}</p>

      <label>Class</label>
      <input {...register("clas")} />
      <p style={{ color: "red" }}>{errors.clas?.message}</p>

      <button type="submit">Submit</button>
    </form>
  );
}
// install command
// npm install react-hook-form yup @hookform/resolvers

