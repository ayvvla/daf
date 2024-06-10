import { z } from "zod";
import { states } from "./states";

const clubLogoSchema = z
  .custom<File | undefined>()
  .refine((file) => {
    return !file || (file instanceof File && file.type.startsWith("image/"));
  }, "Must be an image file")
  .refine((file) => {
    return !file || file.size < 1024 * 1024 * 2;
  }, "File size must be less than 2MB");

export const registerTeamSchema = z.object({
  logo: clubLogoSchema,
  name: z
    .string()
    .min(1, "Required")
    .max(50, "Club name cannot exceed 50 characters"),
  state: z
    .string()
    .min(1, "Required")
    .refine(
      (value) => states.includes(value),
      "Please select one of the available states",
    ),
  address: z
    .string()
    .min(1, "Required")
    .max(100, "Club Address cannot exceed 100 characters"),
  email: z
    .string()
    .max(100)
    .email({ message: "Please enter a valid email address" }),
});

export type registerTeamValues = z.infer<typeof registerTeamSchema>;
