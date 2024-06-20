import React from "react";
import PropTypes from "prop-types";

const FormField = ({
  label,
  id,
  name,
  type,
  value,
  onChange,
  options,
  required,
}) => (
  <div className="mb-4">
    <label htmlFor={id} className="block text-sm font-medium text-gray-600">
      {label}
    </label>
    {type === "select" ? (
      <select
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="form-input bg-gray-100 border-gray-300 rounded-md p-3 w-full"
        required={required}
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="form-input bg-gray-100 border-gray-300 rounded-md p-3 w-full"
        required={required}
      />
    )}
  </div>
);

// PropTypes validation for FormField
FormField.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "date", "tel", "email", "select"]).isRequired,
  value: PropTypes.any.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.string),
  required: PropTypes.bool,
};

export default FormField;
