import { createContext, useContext, useState } from "react";

interface Props {
  password: String;
  setPassword: (arg1: String) => any;
}

const AdminContext = createContext<Props>({
  password: "",
  setPassword: () => {},
});

export const AdminProvider = ({ children }: any) => {
  const [password, setPassword]: any = useState("");

  return (
    <AdminContext.Provider value={{ password, setPassword }}>
      {children}
    </AdminContext.Provider>
  );
};

export const useAdmin = () => useContext(AdminContext);
