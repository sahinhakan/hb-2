import { createContext, useState } from "react";

const LinkContext = createContext()

export const LinkProvider = ({ children }) => {

    const [link, setLink] = useState([1,2]);

    const addLink = (oLink) => {
        //link.push(oLink)
        setLink([...link, oLink])
    }

    const value = {
        link,
        addLink
    }

    return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>
    
}

export default LinkContext;