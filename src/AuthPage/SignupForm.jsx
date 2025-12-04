import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [data, setdata] = useState(null);

  useEffect(()=>{
    
  },[data]);
  return (
    <form
      className="space-y-6"
      onSubmit={handleSubmit((data) => setdata(data))}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2 flex flex-col">
          <label htmlFor="firstName">First Name</label>
          <input
            {...register("firstName", {
              required: { value: true, message: "First name is required" },
              pattern: /^[A-Za-z]+$/i,
            })}
            className="focus:outline-0 focus:border-cta-btn p-2.5 border border-sidebar bg-body/50 rounded-lg"
            type="text"
            id="firstName"
            placeholder="Enter your first name"
          />
          {errors.firstName && (
            <p
              className="text-rose-600 text-sm flex items-center gap-2"
              role="alert"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  className="fill-rose-600"
                  d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.8 536.6 69.6 524.5C62.4 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM320 224C301.8 224 287.3 239.5 288.6 257.7L296 361.7C296.9 374.2 307.4 384 319.9 384C332.5 384 342.9 374.3 343.8 361.7L351.2 257.7C352.5 239.5 338.1 224 319.8 224z"
                />
              </svg>{" "}
              {errors.firstName.message}
            </p>
          )}
        </div>
        <div className="space-y-2 flex flex-col">
          <label htmlFor="lastName">Last Name</label>
          <input
            {...register("lastName", {
              required: { value: true, message: "Last name is required" },
              pattern: /^[A-Za-z]+$/i,
            })}
            className="focus:outline-0 focus:border-cta-btn p-2.5 border border-sidebar bg-body/50 rounded-lg"
            type="text"
            id="lastName"
            placeholder="Enter your last name"
          />
          {errors.lastName && (
            <p
              className="text-rose-600 text-sm flex items-center gap-2"
              role="alert"
            >
              <svg
                className="h-5 w-5"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 640 640"
              >
                <path
                  className="fill-rose-600"
                  d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.8 536.6 69.6 524.5C62.4 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM320 224C301.8 224 287.3 239.5 288.6 257.7L296 361.7C296.9 374.2 307.4 384 319.9 384C332.5 384 342.9 374.3 343.8 361.7L351.2 257.7C352.5 239.5 338.1 224 319.8 224z"
                />
              </svg>{" "}
              {errors.lastName.message}
            </p>
          )}
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        <label htmlFor="email">Email</label>
        <input
          {...register("email", {
            required: { value: true, message: "Email is required" },
          })}
          className="focus:outline-0 focus:border-cta-btn p-2.5 border border-sidebar bg-body/50 rounded-lg"
          id="email"
          type="email"
          placeholder="your.email@student.fec.edu.bd"
        />
        {errors.email && (
          <p
            className="text-rose-600 text-sm flex items-center gap-2"
            role="alert"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                className="fill-rose-600"
                d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.8 536.6 69.6 524.5C62.4 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM320 224C301.8 224 287.3 239.5 288.6 257.7L296 361.7C296.9 374.2 307.4 384 319.9 384C332.5 384 342.9 374.3 343.8 361.7L351.2 257.7C352.5 239.5 338.1 224 319.8 224z"
              />
            </svg>{" "}
            {errors.email.message}
          </p>
        )}
      </div>

      <div className="space-y-2 flex flex-col">
        <label htmlFor="registrationNumber">Registration Number</label>
        <input
          {...register("registrationNumber", {required : {value : true , message : "Registration number is required"}})}
          className="focus:outline-0 focus:border-cta-btn p-2.5 border border-sidebar bg-body/50 rounded-lg"
          type="number"
          id="registrationNumber"
          min={0}
          placeholder="Enter your registration number"
        />
        {errors.registrationNumber && (
          <p
            className="text-rose-600 text-sm flex items-center gap-2"
            role="alert"
          >
            <svg
              className="h-5 w-5"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 640 640"
            >
              <path
                className="fill-rose-600"
                d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.8 536.6 69.6 524.5C62.4 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM320 224C301.8 224 287.3 239.5 288.6 257.7L296 361.7C296.9 374.2 307.4 384 319.9 384C332.5 384 342.9 374.3 343.8 361.7L351.2 257.7C352.5 239.5 338.1 224 319.8 224z"
              />
            </svg>{" "}
            {errors.registrationNumber.message}
          </p>
        )}
      </div>

      <div className="space-y-2 flex flex-col">
        <label htmlFor="department">Department</label>
        <select
          {...register("department", {required : {value : true , message : "Department is required"}})}
          className="focus:outline-0 focus:border-cta-btn p-2.5 border border-sidebar bg-body/50 rounded-lg"
          name="department"
          id="department"
        >
          <option value="default">
            Select your depertment
          </option>
          <option value="CSE">Computer Science And Engineering</option>
          <option value="EEE">Electrical And Electronic Engineering</option>
          <option value="CE">Civil Engineering</option>
        </select>
        {errors.department && <p className="text-rose-600 text-sm flex items-center gap-2" role="alert"><svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path className="fill-rose-600" d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.8 536.6 69.6 524.5C62.4 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM320 224C301.8 224 287.3 239.5 288.6 257.7L296 361.7C296.9 374.2 307.4 384 319.9 384C332.5 384 342.9 374.3 343.8 361.7L351.2 257.7C352.5 239.5 338.1 224 319.8 224z"/></svg> {errors.department.message}</p>}
      </div>

      <div className="space-y-2 flex flex-col">
        <label htmlFor="password">Password</label>
        <input
          {...register("password", {required : {value : true , message : "Password is required"}})}
          className="focus:outline-0 focus:border-cta-btn p-2.5 border border-sidebar bg-body/50 rounded-lg"
          id="password"
          type="password"
          placeholder="Create a strong password"
        />
        {errors.password && <p className="text-rose-600 text-sm flex items-center gap-2" role="alert"><svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path className="fill-rose-600" d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.8 536.6 69.6 524.5C62.4 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM320 224C301.8 224 287.3 239.5 288.6 257.7L296 361.7C296.9 374.2 307.4 384 319.9 384C332.5 384 342.9 374.3 343.8 361.7L351.2 257.7C352.5 239.5 338.1 224 319.8 224z"/></svg> {errors.password.message}</p>}
      </div>

      <div className="space-y-2 flex flex-col">
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input
          {...register("confirmPassword", {required : {value : true , message : "Confirm your password"}})}
          className="focus:outline-0 focus:border-cta-btn p-2.5 border border-sidebar bg-body/50 rounded-lg"
          id="confirmPassword"
          type="password"
          placeholder="Confirm your password"
        />
        {errors.confirmPassword && <p className="text-rose-600 text-sm flex items-center gap-2" role="alert"><svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640"><path className="fill-rose-600" d="M320 64C334.7 64 348.2 72.1 355.2 85L571.2 485C577.9 497.4 577.6 512.4 570.4 524.5C563.2 536.6 550.1 544 536 544L104 544C89.9 544 76.8 536.6 69.6 524.5C62.4 512.4 62.1 497.4 68.8 485L284.8 85C291.8 72.1 305.3 64 320 64zM320 416C302.3 416 288 430.3 288 448C288 465.7 302.3 480 320 480C337.7 480 352 465.7 352 448C352 430.3 337.7 416 320 416zM320 224C301.8 224 287.3 239.5 288.6 257.7L296 361.7C296.9 374.2 307.4 384 319.9 384C332.5 384 342.9 374.3 343.8 361.7L351.2 257.7C352.5 239.5 338.1 224 319.8 224z"/></svg> {errors.confirmPassword.message}</p>}
      </div>
      <button type="submit" className="w-full py-3 rounded-lg bg-cta-btn">
        Create Account
      </button>
    </form>
  );
};

export default SignupForm;
