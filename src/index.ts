import { UpdateCakesSchema } from "./validators";

console.log('Starting test...')

const cakes = [
  {
    cake: {
      accountId: "f8abcccc",
      firmId: "483e0314",
      icon: "Acru",
      mixerId: "787521c1",
      name: "Default Cake",
      cakeId: "ea4ededc",
      cakeType: "Acru",  
    },
    recipients: [
      {
        firstName: 'Mark',
        lastName: 'Hughes',
        email: 'm@rkhugh.es',
        accessType: 1
      }
    ]
  }
];


const res = UpdateCakesSchema.parse({
  auth: 'abc123',
  cakes,
})

console.log('cakes in:')
console.log(JSON.stringify(cakes));
console.log('')
console.log('cakes parsed:')
console.log(JSON.stringify(res.cakes));