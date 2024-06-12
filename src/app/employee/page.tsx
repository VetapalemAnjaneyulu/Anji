

import Link from "next/link"
import { getemployeeList } from "../../../lib/action"
import { formatDate } from "../../../lib/utils"
import { DeleteButton } from "../../../components/delete"
// const employe = async () => {
//     return(

const employe = async({
    query
}:{
    query:string
}) =>{
    const employees = await getemployeeList(query);
    return (
        <div className="w-screen py-20 flex justify-center flex-col items-center">
            <div className="flex items-center justify-between gap-1 mb-5">
                <h1 className="text-4xl font-bold">next js curd operations</h1>
            </div>
            <div className="overflow-x-auto">
                <div className="mb-2 w-full text-right">
                  <Link href="/employee/create" className="btn btn-primary">
                  Create
                  </Link>
                </div>
                <table className="table table-zebra">
                    <thead className="text-sm text-gray-700 uppercase bg-gray-50">
                        <tr>
                            <th className="py-3 px-6">Sno</th>
                            <th className="py-3 px-6">Name</th>
                            <th className="py-3 px-6">Email</th>
                            <th className="py-3 px-6">Phone Number</th>
                            <th className="py-3 px-6">Created At</th>
                            <th className="py-3 px-6 text-center">Actions</th>
                        </tr>
                    </thead>
                        <tbody>
                            {employees.map((res,index) => (
                            <tr className="bg-white border-b">
                            <td className="py-3 px-6">{index+1}</td>
                            <td className="py-3 px-6">{res.name}</td>
                            <td className="py-3 px-6">{res.email}</td>
                            <td className="py-3 px-6">{res.phone}</td>
                            <td className="py-3 px-6">
                                {formatDate(res.createdAt.toString())}
                            </td>
                            <td className="flex justify-center gap-1 py-3">
                                <Link href={`/employee/edit/${res.id}`} className="btn btn-info" >
                                Edit 
                                </Link>
                                
                                <DeleteButton id={res.id} />
                            </td>
                            </tr>
                            ))}
                        </tbody>
                    
                </table>
            </div>
        </div>
    );
}

export default employe