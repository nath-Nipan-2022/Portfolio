export const Input = ({
  label,
  type,
  name,
  errorMessage,
  placeholder,
  register,
}) => {
  return (
    <div>
      <label
        htmlFor={name}
        className="block w-full mb-1 text-sm font-medium text-white capitalize"
      >
        {label}
      </label>
      <input
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        className="input"
        {...register}
      />
      {errorMessage && (
        <p className="py-1 text-sm font-medium text-red-400" role="alert">
          {errorMessage}
        </p>
      )}
    </div>
  );
};
