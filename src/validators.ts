import * as z from "zod"
import { CakeWithAccessSchema } from "./model"


export const UpdateCakesSchema = z.object({
  auth: z.string(),
  cakes: z.array(CakeWithAccessSchema),
  options: z
    .object({
      message: z.string().optional(),
      convertOption: z.string().optional(),
      displayOrder: z.any().optional(),
    })
    .optional(),
})
