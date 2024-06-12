"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {  z } from "zod";
import { prisma } from "./prisma";

const employschema = z.object({
    name:z.string().min(6),
    email:z.string().min(6),
    phone:z.string().min(11)
});

export const saveEmployes = async (res:any,formdata:any) => {

    const validationField = employschema.safeParse(
        Object.fromEntries(formdata.entries())
    );

    if(!validationField.success){
        return{
            
            Error:validationField.error.flatten().fieldErrors,
        };
    }
    try{
        // console.log("success");
        await prisma.empolyee.create({
            data:{
                name:validationField.data.name,
                email:validationField.data.email,
                phone:validationField.data.phone

            }
        })
    }catch(error){
        return {message :"Filled to Create new employee"};
    };
     revalidatePath('/employee');
    redirect('/employee'); 
};


export const getemployeeList = async (query:string) =>{

    try{

    const employees = await prisma.empolyee.findMany({
        select:{
            id:true,
            name:true,
            email:true,
            phone:true,
            createdAt:true
        },
        // orderBy:{
        //     createdAt:"disc",
        // }
    })
    return employees;
    }
    catch(error){
        throw new Error("failed to featch employee data")
    }
}

export const getEmployid = async (id:string) =>{
    try{
        const employee = await prisma.empolyee.findUnique({
            where:{id},
        })
        return employee;
    }catch(error){
        throw new Error("failed to fetch data employee data")
    }

}

export const updateEmploye = async (
    id:string,res:any,formdata:any
)=>{
    const validationField = employschema.safeParse(
        Object.fromEntries(formdata.entries())
    );
    if(!validationField.success){
        Error:validationField.error.flatten().fieldErrors
    }
    try{
        await prisma.empolyee.update({
            data:{
                name:validationField.data.name,
                email:validationField.data.email,
                phone:validationField.data.phone

            },
            where:{id}
        })

    }catch(error){
    return {message:"failed to fetch the data"}
    }
    revalidatePath('/employee')
    redirect('/employee')
};

export const deleteEmployee = async (id:string) =>{
    try{
        await prisma.empolyee.delete({
            where:{id},
        })
    }catch(error){
        return {message:"failed to fetch the data"}
    }
    revalidatePath('/employee')
}