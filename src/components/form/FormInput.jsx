function FormInput({ name, register }) {
  return (
    <>
      <input
        className="border w-full rounded-md p-1 px-4 border-black/12 focus:outline focus:outline-sky-500"
        type="text"
        name=""
        id=""
        placeholder={name}
        {...register(name)}
      />
    </>
  );
}
export default FormInput;
