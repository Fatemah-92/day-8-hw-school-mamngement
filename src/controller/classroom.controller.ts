import {prisma} from "../config/db";
import {Request, Response } from "express";

// 1. Add Classroom
export const addClassroom = async(req: Request, res: Response)=> {
    const {name, teacherId, studentId } = req.body;
    const classroom = await prisma.classroom.create({
        data: {
            name
        },
        select: {
            name: true,
            student: {
                select: {
                    name: true
                }
            },
            teacher: {
                select: {
                    name: true
                } 
            }
        }
    })
    res.json({"message": "Classroom Created !", "Classroom": classroom})
}

// 2. Get Classrooms
export const getClassrooms = async(req: Request, res: Response)=> {
    const classrooms = await prisma.classroom.findMany({
        select: {
            // id: true,
            name: true,
            student: {
                select: {
                    name: true
                }
            },
            teacher: {
                select: {
                    name: true
                } 
            }
        }
    })
    try {
        if(classrooms)
        res.json({"Classrooms List": classrooms})
    } catch (error) {
        res.json(error)
    }
}

// 3. Get Classroom by id
// Create endpoint that takes classroom id and return one classroom (return bad request if classroom id is invalid)
export const getClassroomById = async(req: Request, res: Response)=> {
    const classroom = await prisma.classroom.findFirst({
        where: {
            id: req.params.id
        },
        select: {
            name: true,
            student: {
                select: {
                    name: true
                }
            },
            teacher: {
                select: {
                    name: true
                } 
            }
        }
    })
    try {
        if(classroom)
        res.json({"Teacher": classroom})
    } catch (error) {
        res.json(error)
    }
}