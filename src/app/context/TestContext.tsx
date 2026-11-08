import { createContext, SetStateAction, useContext, useState ,  Dispatch} from "react";


interface contextType {
  mode:string ; setMode: Dispatch<SetStateAction<string>>;
}

export const CreateCon = createContext<contextType |null> (null);

export const CreateConWrapper = ({ children }: { children: React.ReactNode }) => {

  const [mode , setMode]=useState('light')
  return <CreateCon.Provider value={{mode , setMode}}>{children}</CreateCon.Provider>;
};


const UseCon = ()=> {
  const context = useContext(CreateCon);
  if(!context){
    throw new Error('the context is not working ')
  }

  return context
}

