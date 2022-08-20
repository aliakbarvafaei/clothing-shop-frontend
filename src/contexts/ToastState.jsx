import {createContext, useContext, useMemo, useState} from "react";

const ToastStateContext = createContext(undefined)


const ToastProvider = ({children}) => {
  const [toastState, setToastState] = useState(false)

  const value = useMemo(() => ({setToastState, toastState}), [toastState, setToastState])

  return <ToastStateContext.Provider value={value}>
    {children}
  </ToastStateContext.Provider>
}

const useToast = () => {
  const context = useContext(ToastStateContext)

  if (context === undefined)
    throw new Error("useTheme must be within ToastProvider!")

  return context
}

export {ToastProvider, useToast}