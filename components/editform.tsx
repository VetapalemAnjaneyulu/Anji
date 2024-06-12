
"use client";
import { Empolyee } from "@prisma/client";
import { useFormState } from "react-dom";
import { updateEmploye } from "../lib/action";

const Updateform = ({employee}:{employee:Empolyee}) =>{
    const updateEmployewithid = updateEmploye.bind(null,employee.id)
    const[state,formAction]=useFormState(updateEmployewithid,null)
    return (
        <div>
            <form action={formAction}>
            <div className="mb-5">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-900">
                        Full Name
                     </label> 
                     <input 
                      type="text" 
                      name="name"
                      id="name" 
                      className="input input-border input-primary w-full max-w-xs"
                      placeholder="full name..." 
                      defaultValue={employee.name}
                      />
                     <div id="name-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 test-sm text-red-500 ">{state?.Error?.name}</p>
                      </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                        Email
                     </label> 
                     <input 
                      type="email" 
                      name="email"
                      id="email" 
                      className="input input-border input-primary w-full max-w-xs"
                      placeholder="email..." 
                      defaultValue={employee.email}
                      />
                     <div id="name-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 test-sm text-red-500 ">{state?.Error?.email}</p>
                      </div>
                </div>
                <div className="mb-5">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-900">
                        Phone Number
                     </label> 
                     <input 
                      type="text" 
                      name="phone"
                      id="phone" 
                      className="input input-border input-primary w-full max-w-xs"
                      placeholder="phone number..." 
                      defaultValue={employee.phone}
                      />
                      <div id="name-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 test-sm text-red-500 ">{state?.Error?.phone}</p>
                      </div>
                </div>
                <div id="name-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 test-sm text-red-500 ">{state?.message}</p>
                      </div>
                <button className="btn btn-primary">
                    Update
                </button>
            </form>
        </div>
    )
}

export default Updateform;