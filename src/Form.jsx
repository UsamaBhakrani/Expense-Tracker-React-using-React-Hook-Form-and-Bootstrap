import { useForm } from "react-hook-form";
import { categories } from "./App";

const Form = ({ onSubmit }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input
          {...register("description", {
            required: true,
            minLength: 3,
            maxLength: 15,
          })}
          id="description"
          type="text"
          className="form-control"
        />
        {errors.description?.type === "required" && (
          <p className="text-danger">Description is required</p>
        )}
        {errors.description?.type === "minLength" && (
          <p className="text-danger">
            Description Should be longer than 3 Characters
          </p>
        )}
        {errors.description?.type === "maxLength" && (
          <p className="text-danger">
            Description Should not be Longer than 18 Characters
          </p>
        )}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input
          {...register("amount", { required: true, valueAsNumber: true })}
          id="amount"
          type="number"
          className="form-control"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Category
        </label>
        <select {...register("category")} className="form-select" id="category">
          <option value=""></option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button className="btn btn-primary m-3">Submit</button>
      </div>
    </form>
  );
};

export default Form;
