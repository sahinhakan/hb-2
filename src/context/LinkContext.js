import { createContext, useState } from "react";

const LinkContext = createContext()

export const LinkProvider = ({ children }) => {

    const [link, setLink] = useState([]);

    const addLink = (oLink) => {
        setLink([...link, createLinkObject(oLink)])
    }

    const createLinkObject = (oLink) => {
        return {
            name: oLink.name,
            url: oLink.url,
            point: 0
        }
    }

    const upVote = (data) => {
        const index = link.findIndex(item => item.name === data.name);
        if(index !== -1){
            link[index].point = data.point + 1;
            setLink([...link]);
        }
    }

    const downVote = (data) => {
        const index = link.findIndex(item => item.name === data.name);
        if(index !== -1){
            link[index].point = data.point - 1;
            setLink([...link]);
        }
    }

    const value = {
        link,
        addLink,
        upVote,
        downVote
    }

    return <LinkContext.Provider value={value}>{children}</LinkContext.Provider>
    
}

export default LinkContext;