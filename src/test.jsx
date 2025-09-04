import { useState } from "react";
import DynamicForm from "./components/common/DynamicForm";
import { z } from "zod";

export default function Test() {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Example schema using Zod
  const userSchema = z.object({
    name: z.string().min(2, { message: "Name must be at least 2 characters" }),
    email: z.string().email({ message: "Invalid email address" }),
    age: z
      .number()
      .min(18, { message: "You must be at least 18 years old" })
      .optional(),
    country: z.string().min(1, { message: "Please select a country" }),
    bio: z
      .string()
      .max(500, { message: "Bio cannot exceed 500 characters" })
      .optional(),
    terms: z
      .boolean()
      .refine((val) => val === true, { message: "You must accept the terms" }),
  });

  // Form fields configuration
  const formFields = [
    {
      name: "name",
      label: "Full Name",
      type: "text",
      placeholder: "Enter your full name",
      required: true,
    },
    {
      name: "email",
      label: "Email Address",
      type: "email",
      placeholder: "your.email@example.com",
      required: true,
    },
    {
      name: "age",
      label: "Age",
      type: "number",
      placeholder: "Your age",
      min: 18,
      max: 120,
    },
    {
      name: "country",
      label: "Country",
      type: "select",
      placeholder: "Select your country",
      required: true,
      options: [
        { label: "United States", value: "us" },
        { label: "United Kingdom", value: "uk" },
        { label: "Canada", value: "ca" },
        { label: "Australia", value: "au" },
        { label: "Germany", value: "de" },
        { label: "France", value: "fr" },
        { label: "Japan", value: "jp" },
      ],
    },
    {
      name: "gender",
      label: "Gender",
      type: "radio",
      options: [
        { label: "Male", value: "male" },
        { label: "Female", value: "female" },
        { label: "Other", value: "other" },
      ],
    },
    {
      name: "bio",
      label: "Biography",
      type: "textarea",
      placeholder: "Tell us about yourself",
      maxLength: 500,
    },
    {
      name: "terms",
      label: "I agree to the terms and conditions",
      type: "checkbox",
      required: true,
    },
  ];

  // Form buttons configuration
  const formButtons = [
    {
      label: "Submit",
      type: "submit",
      className: "bg-blue-600 text-white",
    },
    {
      label: "Reset",
      type: "reset",
      className: "bg-gray-200 text-gray-800",
    },
  ];

  // Default values
  const defaultValues = {
    name: "",
    email: "",
    age: undefined,
    country: "",
    gender: "",
    bio: "",
    terms: false,
  };

  // Form submission handler
  const handleSubmit = async (data) => {
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Set form data to display submitted values
    setFormData(data);
    setLoading(false);

    // console.log("Form submitted:", data);

    // In a real application, you would make an API call here
    // try {
    //   const response = await fetch('/api/submit-form', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(data)
    //   })
    //   const result = await response.json()
    //   // Handle success
    // } catch (error) {
    //   // Handle error
    // }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 md:p-24 ">
      <DynamicForm
        fields={formFields}
        buttons={formButtons}
        defaultValues={defaultValues}
        onSubmit={handleSubmit}
        schema={userSchema}
        title="User Registration"
        description="Please fill out the form below to create your account."
        loading={loading}
        className=" p-6 rounded-lg "
      />

      {formData && (
        <div className="mt-8 p-4 bg-green-50 border border-green-200 rounded-lg">
          <h2 className="text-lg font-semibold mb-2">Submitted Data:</h2>
          <pre className="bg-gray-100 p-3 rounded overflow-auto">
            {JSON.stringify(formData, null, 2)}
          </pre>
        </div>
      )}
    </main>
  );
}
