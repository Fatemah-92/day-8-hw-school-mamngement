import { z, TypeOf } from "zod";

export const StudentType = z.object({
    body: z.object ({
        name: z.
        string({
            required_error: "Name is required !",
            invalid_type_error: "Name must be string !"
        }),

        age: z.
        number({
            required_error: "Age is required !",
            invalid_type_error: "Age must be Number !"
        })        
        .min(7, 'Age must be more than 7 !')
        .max(90, 'Age must be less than 90 !'),  
        
        major: z.
        string({
            required_error: "Major is required !",
            invalid_type_error: "Major must be string !"
        })
    })
})

export type Studenttypeschema = TypeOf<typeof StudentType>["body"];