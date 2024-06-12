"use client";

import { useFormState } from "react-dom";
import { saveEmployes } from "../../../../lib/action";

const  createuser = () => {
    const [state,formAction] = useFormState(saveEmployes,null);
return(
   <div className="max-w-md mx-auto mt-5">
        <h1 className="text-2xl text-center mb-2"> Add New Employee</h1>
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
                      />
                      <div id="email-error" aria-live="polite" aria-atomic="true">
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
                      />
                      <div id="phone-error" aria-live="polite" aria-atomic="true">
                        <p className="mt-2 test-sm text-red-500 ">{state?.Error?.phone}</p>
                      </div>
                </div>
                <button className="btn btn-primary">
                    Save
                </button>

            </form>
        </div>
   </div> 
    )
}

export default createuser