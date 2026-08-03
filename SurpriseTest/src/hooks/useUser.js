import { useEffect, useState } from "react"
import { useAuth } from "../context/AuthContext";


const useUser = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [location, setLocation] = useState("");

    const {user} = useAuth();

    useEffect(() => {
      setName(user.name);
      setEmail(user.email);
      setLocation(user.location);
    }, [user])
    

    return {
        name,
        email,
        location
    }
}

export default useUser