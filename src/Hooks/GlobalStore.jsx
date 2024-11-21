import { useContext, createContext, useState, useEffect, useCallback } from "react";
import { noteService } from "../lib/noteService";
import { categoryService } from "../lib/categoryService";

const Store = createContext();


const StoreContextProvider = ({ children }) => {
    const [viewMode, setViewMode] = useState(localStorage.getItem("view-mode") || "grid")
    const [notes, setNotes] = useState(noteService.findAll())
    const [categories, setCategories] = useState(categoryService.findAll())

    const viewModeEffect = useCallback(() => {
        localStorage.setItem("view-mode", viewMode)
    }, [viewMode])


    const validateNotes = () => {
        setNotes(noteService.findAll())
    }

    const validateCategories = () =>{
        setCategories(categoryService.findAll())
    }


    useEffect(() => {
        viewModeEffect();
    })


    return <Store.Provider value={{ viewMode, setViewMode, notes, setNotes, validateNotes, categories, setCategories,validateCategories }}>
        {children}
    </Store.Provider>
}

export const useStore = () => useContext(Store);

export default StoreContextProvider;