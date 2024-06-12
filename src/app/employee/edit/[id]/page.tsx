import { notFound } from "next/navigation";
import Updateform from "../../../../../components/editform";
import { getEmployid } from "../../../../../lib/action";

const updateempdetails = async ({params}:{params:{id:string}}) =>{
    const id = params.id;
    const employee = await getEmployid(id) 

    if(!employee){
        notFound();
    }
    return(
        <div className="max-w-md mx-auto mt-5">
            <h1 className="text-2xl text-center mb-2">Update Employee</h1>
        <Updateform employee={employee}/>
        </div>
    );
};

export default updateempdetails

