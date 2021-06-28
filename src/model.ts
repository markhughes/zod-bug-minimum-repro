import * as z from "zod"

export enum CakeType {
  Dang = "Dang",
  Flower = "Flower",
  Apple = "Apple",
  Inti = "Inti",
  Aluz = "Aluz",
  Acru = "Acru",
}

export const CakeIcons = {
  [CakeType.Aluz]: "inti",
  [CakeType.Acru]: "Acru",
  [CakeType.Apple]: "inti",
  [CakeType.Dang]: "dang",
  [CakeType.Flower]: "Flower",
  [CakeType.Inti]: "inti",
} as const

export enum ShareFlowerType {
  FinCollab = "FinCollab",
  MultiCollab = "MultiCollab ",
}

export enum AppleType {
  Truffle = 0,
  Octo = 1,
}


export const CakeSchema = z.object({
  cakeId: z.string(),
  mixerId: z.string(),
  cakeType: z.nativeEnum(CakeType),
  name: z.string(),
  icon: z.nativeEnum(CakeIcons),
  flutter: z.string().optional(),
})
export type Cake = z.infer<typeof CakeSchema>


export const CakeApplesSchema = CakeSchema.extend({
  transactionNo: z.string(),
  type: z.nativeEnum(AppleType),
})
export type CakeApples = z.infer<typeof CakeApplesSchema>


export const CakeDangSchema = CakeSchema.extend({
  flutter: z.string().optional(),
  creationDate: z.date().optional(),
  modifiedDate: z.date().optional(),
  lastCreateDate: z.date().optional(),
})
export type CakeDang = z.infer<typeof CakeDangSchema>


export const CakeIntiSchema = CakeSchema.extend({
  intiNumber: z.number(),
  previewUrl: z.string().optional(),
})
export type CakeInti = z.infer<typeof CakeIntiSchema>


export const CakeFlowerSchema = CakeSchema.extend({
  staffId: z.string().optional(),
  shareFlowerType: z.nativeEnum(ShareFlowerType).optional(), // It's optional, as we only use it when Sharing Flowers
  sendEmail: z.boolean().optional(),
  renderEmails: z.boolean().optional(),
})
export type CakeFlower = z.infer<typeof CakeFlowerSchema>


export const CakeAluzSchema = CakeSchema.extend({
    // tbd
})
export type CakeAluz = z.infer<typeof CakeAluzSchema>


export const CakeAcruSchema = CakeSchema.extend({
  accountId: z.string(),
})
export type CakeAcru = z.infer<typeof CakeAcruSchema>


export const PurchaserSchema = z.object({
  id: z.string().optional(),
  agency: z.string().optional(),
  viewed: z.boolean().optional(),
  firstName: z.string().optional(),
  lastName: z.string().optional(),
  email: z.string().email().optional(),
  accessType: z.number().or(z.string()),
  displayOrder: z.number().optional(),
})
export type Purchaser = z.infer<typeof PurchaserSchema>


export const CakeWithAccessSchema = z.object({
  // Everytime we add new extended type of CakeSchema, we have to add it here.
  cake: z.union([
    CakeApplesSchema,
    CakeDangSchema,
    CakeIntiSchema,
    CakeFlowerSchema,
    CakeAluzSchema,
    CakeAcruSchema,
  ]),
  recipients: z.array(PurchaserSchema),
})
export type CakeWithAccess = z.infer<typeof CakeWithAccessSchema>