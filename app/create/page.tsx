import CreateForm from "@/components/ui/create-form/CreateForm"
import getCurrentUser from "../actions/getCurrentUser"


const page = async () => {
    const user = await getCurrentUser()
  return (
<CreateForm user={user}/>
  )
}

export default page