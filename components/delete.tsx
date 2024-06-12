import { deleteEmployee } from "../lib/action";
export const DeleteButton = ({id}:{id:string}) =>{
    const deleteemp = deleteEmployee.bind(null,id);
return(
    <form action={deleteemp}>
        <button className="btn btn-success">
            Delete
        </button>
    </form>
)
}