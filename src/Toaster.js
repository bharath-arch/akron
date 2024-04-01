import toast from "react-hot-toast";

export const successToast=(message)=>{
    toast.success(message)
 
    console.log(message)
}
export const errorToast=(message)=>{
    toast.error(message)
    console.log("error")
}