import { useForm } from "react-hook-form";

const Form = () => {
  return (
    <div>
      <form action="submit">
        <div className="d-flex flex-column ">
          <label htmlFor="" className="text-dark">
            Description
          </label>
          <input className="input-group" type="text" />
          <label htmlFor="" className="text-dark">
            Amount
          </label>
          <input type="text" />
          <label htmlFor="" className="text-dark">
            Category
          </label>
          <select
            className="form-select"
            id="inputGroupSelect03"
            aria-label="Example select with button addon"
          >
            <option>All Categories</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>

          <div>
            <button className="btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </div>
      </form>
      <div className="input-group">
        <select
          className="form-select"
          id="inputGroupSelect03"
          aria-label="Example select with button addon"
        >
          <option></option>
          <option value="1">One</option>
          <option value="2">Two</option>
          <option value="3">Three</option>
        </select>
      </div>
    </div>
  );
};

export default Form;
