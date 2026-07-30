import { create } from "zustand";


type State ={
    endPoint:string
  Method:string
  requestBoady:Object
}
type Actions ={
    setEndPointZustand:(endPoint:string)=> void;
    setMethodZustand:(method:string)=> void;
    setRequestBoadyZustand:(requestBoady:Object | string)=> void;
} 
 const useRequestData = create<State & Actions>((set)=>({
    endPoint:"",
    Method:"",
    requestBoady:"",
    setEndPointZustand:(endPoint:string)=> set(( )=>{
        return {
            endPoint:endPoint
        }
    }),
    setMethodZustand:(Method:string)=> set(()=>({
        Method:Method 

    })),
    setRequestBoadyZustand:(requestBoady:Object | string )=>  set(()=>({
        requestBoady:requestBoady 
        
    }))
}))

export default useRequestData;