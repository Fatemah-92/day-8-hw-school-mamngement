import { z, TypeOf } from "zod";

export const ClassroomType = z.object({
    body: z.object ({
        name: z.
        string({
            required_error: "Name is required !",
            invalid_type_error: "Name must be string !"
        })  
    })
})

export type ClassroomTypeschema = TypeOf<typeof ClassroomType>["body"];