"use client"

import { useState } from "react"

export default function SimpleForm() {
    const [name, setName] = useState("");
    const [email, set] = useState("");

    const handlesubmit = (e) => {
        e.preventDefault();

        if (name || ! email){
            seterror("All the fields are required");
        }
        else if(!email.includes("@")){
            seterror("Email is not valid");
        }
        else{
            seterror("");
            alert("form submitted\nName: " + name + "\nEmail: " + email);  
        }
    }
    return(
        <form onsumbit={handlesubmit}>
          <h2>Sample form</h2>
          {error && <p style={{color: "orange"}}>{error}</p>}

          <div>
            <label>name :</label><br/>
            <input type="text" value={name} placeholder="enter your name" onchange={(e) => setName(e.target.value)} />
          </div>

          <div>
            <label>email :</label><br/>
            <input type="text" value={email} placeholder="enter your email" onchange={(e) => set(e.target.value)} />    
          </div>
          <button type ="submit">submit</button>
        </form>
    )
}
 
