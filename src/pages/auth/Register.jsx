import FormInput from "../../components/form/FormInput";
import { createAlert } from "../../components/utils/createAlert";
import { useForm } from "react-hook-form";
import axios from "axios";

function Register() {
  //JS
  const { handleSubmit, register } = useForm();

  const hdlSubmit = async (value) => {
    // console.log(value);
    try {
      const res = await axios.post(
        "http://localhost:8000/auth/register",
        value
      );
      createAlert("success", "Register Success");
      console.log(res);
    } catch (error) {
      console.log(error);
      createAlert("error", error.response?.data?.message);
    }
  };

  return (
    <div className="flex w-fill h-full justify-end">
      {/* Card */}
      <div className="border p-4 rounded-xl w-1/3 h-4/5 min-h-[400px] m-4 border-black/20">
        <h1 className="font-bold text-center">Register</h1>

        {/* Form */}
        <form onSubmit={handleSubmit(hdlSubmit)}>
          <div className="flex flex-col gap-2 mt-4">
            <FormInput register={register} name="email" />
            <FormInput register={register} name="name" />
            <FormInput register={register} name="password" />
            <FormInput register={register} name="confirmPassword" />
          </div>

          <div className="flex justify-center mt-4">
            <button
              className="bg-black text-white p-2 rounded-md hover:bg-black/80 "
              type="submit"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
