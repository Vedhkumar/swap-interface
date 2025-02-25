import { useForm, SubmitHandler } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

function Content() {
  return (
    <main>
      <div className="bg-green-50 ">
        <SwapForm />
      </div>
    </main>
  );
}

type Inputs = {
  example: string;
  exampleRequired: string;
};

function SwapForm() {
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

  console.log(watch("example"));

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register("example")} />

        <input {...register("exampleRequired", { required: true })} />
        {errors.exampleRequired && <span>This field is required</span>}

        <input type="submit" />
      </form>
      <DevTool control={control} />
    </>
  );
}

export default Content;
