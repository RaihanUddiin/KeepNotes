import { noteService } from "./noteService";

export const categoryService = {
    findAll: () => {
        return JSON.parse(localStorage.getItem("categories")) || [];
    },

    findById: (id) => {
        if (!id) return null;
        return categoryService.findAll().filter(category => category.id === id)[0];
    },

    save: (category) => {
        const allCategory = categoryService.findAll();
        const updatedCategories = [...allCategory, category]
        categoryService.saveAll(updatedCategories)
        return category;
    },

    saveAll: (categories) => {
        localStorage.setItem("categories", JSON.stringify(categories))
    },

    update: (category) => {
        // check category existance
        // if not exist throw error
        if (!categoryService.findById(category.id)) return window.alert("category Not Found!")

        // replace category
        const updatedCategories = categoryService.findAll().map(c => c.id === category.id ? category : c)

        // save all category

        categoryService.saveAll(updatedCategories);

    },

    delete: (id) => {

        //check this  exist or not 
        //if not exits throw a error
        if (!categoryService.findById(id)) return window.alert("This Is Not Found!");
        
        if(noteService.findByCategoryId(id)) return window.alert("You Can't delete this category. Because Exits Note In This Category")
            



        //if exis map all categories without this categories and save it
        const allCategory = categoryService.findAll().filter(category => category.id !== id)
        categoryService.saveAll(allCategory)
    }

}