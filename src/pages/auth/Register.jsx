import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../utils/createAlert";
import { useForm } from "react-hook-form";
import axios from "axios";
import Buttons from "../../components/form/buttons";

import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../utils/validator";

function Register() {
  //JS
  const { handleSubmit, register, formState } = useForm({
    resolver: yupResolver(registerSchema),
  });
  // isSubmitting เก็บค่า T/F
  const { isSubmitting, errors } = formState;
  console.log(errors);

  const hdlSubmit = async (value) => {
    await new Promise((resolve, reject) => setTimeout(resolve, 2000));
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        value
      );
      createAlert("success", res.data.message);
      console.log(res);
    } catch (error) {
      console.log(error);
      createAlert("error", error.response?.data?.message);
    }
  };

  return (
    <div className="flex w-fill h-full justify-end">
      {/* Card */}
      <div className="border p-4 rounded-xl w-1/3 h-4/5 min-h-[200px] m-4 border-black/20">
        <h1 className="font-bold text-center">Register</h1>

        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-4 mt-4">
            <FormInput register={register} name="email" errors={errors} />
            <FormInput
              register={register}
              name="name"
              errors={errors}
            />
            <FormInput
              register={register}
              name="password"
              errors={errors}
              type="password"
            />
            <FormInput
              register={register}
              name="confirmPassword"
              errors={errors}
              type="password"
            />
          </div>

          <div className="flex justify-center mt-4">
            <Buttons isSubmitting={isSubmitting} label="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
