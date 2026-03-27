"use server";

import { z } from "zod";

const registrationSchema = z.object({
  username: z.string().min(3, "Username must be at least 3 characters"),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export async function printFormData(formData: FormData) {
  const data = Object.fromEntries(formData.entries());
  console.log("Form Data Received:", data);
  
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  return {
    success: true,
    message: "Data printed to server console!",
    data
  };
}

export async function registerUser(prevState: any, formData: FormData) {
  const rawData = Object.fromEntries(formData.entries());
  
  // Validation (Requirement 4)
  const result = registrationSchema.safeParse(rawData);
  
  if (!result.success) {
    return {
      success: false,
      errors: result.error.flatten().fieldErrors,
      message: "Validation failed"
    };
  }

  console.log("Valid Registration Data:", result.data);
  
  // In Lab 30, we would save this using Prisma.
  return {
    success: true,
    message: `User ${result.data.username} validated successfully!`,
  };
}
