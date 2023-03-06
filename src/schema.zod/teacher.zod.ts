import { z, TypeOf } from "zod";

export const TeacherType = z.object({
    body: z.object ({
        name: z.
        string({
            required_error: "Name is required !",
            invalid_type_error: "Name must be string !"
        })  
    })
})

export type TeacherTypeschema = TypeOf<typeof TeacherType>["body"];