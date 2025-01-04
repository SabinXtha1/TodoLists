
import { signIn } from "@/auth"
 
export default function SignIn() {
  return (
    <div>
      
    <form
      action={async () => {
        "use server"
        await signIn("github")
        
      }}
      >
      <button type="submit" className="text-bold ">Signin with GitHub</button>
    </form>
    <form
      action={async () => {
        "use server"
        await signIn("google")
        
      }}
      >
      <button type="submit" className="text-bold ">Signin with google</button>
    </form>
   
    </div>
  )
} 