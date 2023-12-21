"use client";

import { FormProps } from "@/interfaces/IShared";
import { useRef  } from "react";



const Form = ({action, children, className, onSubmit} : FormProps) => {
    const ref = useRef<HTMLFormElement>(null);
  return (
    <form className={className}
    onSubmit={onSubmit}
    ref={ref}
    action={async (formData) => {
        await action(formData) 
        ref.current?.reset()
    }}
    >
        {children}
    </form>
  )
}

export default Form