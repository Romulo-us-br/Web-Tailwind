import {ReactNode, ComponentProps} from "react";
interface InputProps extends ComponentProps<'input'>{
    children: ReactNode;
}

export function Input(props:InputProps){
    return(
        
        <input className=""
        {...props}/>
    )
}