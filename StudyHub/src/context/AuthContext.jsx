import { createContext, useState, useContext } from "react";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [student, setStudent] = useState(null)
    const [tasks, setTasks] = useState([
        { id: 1, title: "Finish DBMS assignment", completed: false },
        { id: 2, title: "Revise React hooks", completed: false },
        { id: 3, title: "Submit lab report", completed: true },
    ])

    const login = (user) => {
        console.log(user);
        setStudent(user);

        console.log(student);
    }

    const logout = () => {
        setStudent(null)
    }

    const value =  {
        student,
        tasks,
        setTasks,
        login,
        logout
    }


    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;

export const useAuth = () => useContext(AuthContext);