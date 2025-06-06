"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const ReusableForm = ({
  fields,
  buttons,
  defaultValues = {},
  onSubmit,
  schema,
  className = "",
  formClassName = "",
  dir = "ltr",
  title,
  description,
  loading: formLoading = false,
}) => {
  const [loading, setLoading] = useState(formLoading);
  const [error, setError] = useState(null);

  // Generate schema if not provided
  const generateDefaultSchema = () => {
    const schemaObj = {};

    fields.forEach((field) => {
      let fieldSchema = z.any();

      switch (field.type) {
        case "text":
        case "password":
        case "textarea":
          fieldSchema = z.string();
          break;
        case "email":
          fieldSchema = z.string().email();
          break;
        case "number":
          fieldSchema = z.number();
          break;
        case "checkbox":
          fieldSchema = z.boolean();
          break;
        case "date":
          fieldSchema = z.string();
          break;
        case "select":
        case "radio":
          fieldSchema = z.any();
          break;
      }

      if (field.required) {
        if (["text", "email", "password", "textarea"].includes(field.type)) {
          fieldSchema = fieldSchema.min(1, {
            message: `${field.label} is required`,
          });
        }
      } else {
        fieldSchema = fieldSchema.optional();
      }

      if (
        field.minLength &&
        ["text", "password", "textarea"].includes(field.type)
      ) {
        fieldSchema = fieldSchema.min(field.minLength, {
          message: `${field.label} must be at least ${field.minLength} characters`,
        });
      }

      if (
        field.maxLength &&
        ["text", "password", "textarea"].includes(field.type)
      ) {
        fieldSchema = fieldSchema.max(field.maxLength, {
          message: `${field.label} must be at most ${field.maxLength} characters`,
        });
      }

      if (field.min && field.type === "number") {
        fieldSchema = fieldSchema.min(field.min, {
          message: `${field.label} must be at least ${field.min}`,
        });
      }

      if (field.max && field.type === "number") {
        fieldSchema = fieldSchema.max(field.max, {
          message: `${field.label} must be at most ${field.max}`,
        });
      }

      if (field.pattern && ["text", "email", "password"].includes(field.type)) {
        fieldSchema = fieldSchema.regex(new RegExp(field.pattern), {
          message: `${field.label} has an invalid format`,
        });
      }

      schemaObj[field.name] = fieldSchema;
    });

    return z.object(schemaObj);
  };

  const formSchema = schema || generateDefaultSchema();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues,
  });

  const handleFormSubmit = async (data) => {
    try {
      setLoading(true);
      setError(null);
      await onSubmit(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const renderField = (field) => {
    const {
      name,
      label,
      type,
      placeholder,
      required,
      options,
      className = "",
      disabled,
      hidden,
    } = field;

    if (hidden) return null;

    const fieldError = errors[name];
    const errorMessage = fieldError?.message;

    const baseInputClasses = `w-full px-3 py-2 border rounded-md ${
      fieldError ? "border-red-500" : "border-gray-300"
    } focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`;

    const labelClasses = `block text-sm font-medium ${
      fieldError ? "text-red-500" : "text-gray-700"
    } mb-1`;

    const renderInput = () => {
      switch (type) {
        case "text":
        case "email":
        case "password":
        case "number":
        case "date":
          return (
            <input
              {...register(name)}
              type={type}
              id={name}
              placeholder={placeholder}
              className={baseInputClasses}
              disabled={disabled || loading}
            />
          );

        case "textarea":
          return (
            <textarea
              {...register(name)}
              id={name}
              placeholder={placeholder}
              className={`${baseInputClasses} min-h-[100px]`}
              disabled={disabled || loading}
            />
          );

        case "select":
          return (
            <select
              {...register(name)}
              id={name}
              className={baseInputClasses}
              disabled={disabled || loading}
            >
              <option value="">{placeholder || "Select an option"}</option>
              {options?.map((option) => (
                <option
                  key={option.value.toString()}
                  value={option.value.toString()}
                >
                  {option.label}
                </option>
              ))}
            </select>
          );

        case "checkbox":
          return (
            <div className="flex items-center">
              <input
                {...register(name)}
                type="checkbox"
                id={name}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                disabled={disabled || loading}
              />
              <label
                htmlFor={name}
                className="ml-2 block text-sm text-gray-700"
              >
                {label}
              </label>
            </div>
          );

        case "radio":
          return (
            <div className="space-y-2">
              {options?.map((option) => (
                <div
                  key={option.value.toString()}
                  className="flex items-center"
                >
                  <input
                    {...register(name)}
                    type="radio"
                    id={`${name}-${option.value}`}
                    value={option.value.toString()}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    disabled={disabled || loading}
                  />
                  <label
                    htmlFor={`${name}-${option.value}`}
                    className="ml-2 block text-sm text-gray-700"
                  >
                    {option.label}
                  </label>
                </div>
              ))}
            </div>
          );

        default:
          return null;
      }
    };

    return (
      <div key={name} className="mb-4">
        {type !== "checkbox" && (
          <label htmlFor={name} className={labelClasses}>
            {label} {required && <span className="text-red-500">*</span>}
          </label>
        )}
        {renderInput()}
        {errorMessage && (
          <p className="mt-1 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  };

  const renderButtons = () => {
    return (
      <div className="flex flex-wrap gap-2 mt-6">
        {buttons.map((button, index) => {
          const {
            label,
            type,
            onClick,
            className = "",
            disabled,
            loading: buttonLoading,
            icon,
          } = button;

          const isLoading = loading || buttonLoading;
          const isDisabled = disabled || isLoading;

          const buttonClasses = `px-4 py-2 rounded-md font-medium cursor-pointer ${
            type === "submit"
              ? "bg-accept-color text-white hover:bg-transparent hover:text-accept-color duration-200 border border-solid border-accept-color "
              : type === "reset"
              ? "bg-error-color text-white hover:bg-transparent hover:text-error-color duration-200 border border-solid border-error-color  "
              : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500"
          } ${isDisabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

          return (
            <button
              key={index}
              type={type}
              className={buttonClasses}
              onClick={type === "button" ? onClick : undefined}
              disabled={isDisabled}
            >
              <span className="flex items-center justify-center">
                {isLoading && (
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                )}
                {icon && <span className="mr-2">{icon}</span>}
                {label}
              </span>
            </button>
          );
        })}
      </div>
    );
  };

  return (
    <div className={`w-full ${className}`} dir={dir}>
      {title && <h2 className="text-xl font-bold mb-2">{title}</h2>}
      {description && <p className="text-gray-600 mb-4">{description}</p>}

      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit(handleFormSubmit)} className={formClassName}>
        {fields.map(renderField)}
        {renderButtons()}
      </form>
    </div>
  );
};

export default ReusableForm;
