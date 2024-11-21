export const noteService = {
    findAll: () => {
        return JSON.parse(localStorage.getItem("notes")) || [];
    },

    findById: (id) => {
        if (!id) return window.alert("id is required.")
        return noteService.findAll().filter(note => note.id == id)[0];
    },

    findByCategoryId: (categoryId) => {
        return noteService.findAll().filter(note => note.category === categoryId);
    },

    findBySearch: (search) => {
        return noteService.findAll().filter(note => note.title.toLowerCase().includes(search.toLowerCase()) || note.content.toLowerCase().includes(search.toLowerCase()))
    },

    findByCategorySearch: (props) => {
        let allNotes = noteService.findAll()
        const limit = props.limit || 10 ;
        const page  = props.page || 1;
        const offSet = (page - 1)*limit;
        const totalElements = allNotes.length;
        const totalPage = Math.ceil(totalElements / limit) ;
        const first = page === 1 ;
        const last = page === totalPage;

        if(props.categoryId){
           allNotes = allNotes.filter(note => note.category === props.categoryId)
        }

        if(props.search){
            allNotes = allNotes.filter(note => note.title.toLowerCase().includes(props.search.toLowerCase()) || note.content.toLowerCase().includes(props.search.toLowerCase()))
        }
        
        return allNotes;

    },

    save: (note) => {
        const allNotes = noteService.findAll();
        localStorage.setItem("notes", JSON.stringify([...allNotes, note]));

        return note;

    },

    update: (note) => {
        const allNotes = noteService.findAll();

        if (!noteService.findById(note.id)) return window.alert("No Notes Found With This id.")

        const updatedNotes = allNotes.map(n => {
            if (n.id === note.id) return note;
            return n;
        })

        noteService.saveAll(updatedNotes);

        return note;
    },

    saveAll: (notes) => {
        if (!notes) return window.alert(" Notes Not Found.");

        localStorage.setItem("notes", JSON.stringify(notes))
        return notes;
    },

    delete: (id) => {
        if (!id) return window.alert("id is required.")    

        if (!noteService.findById(id)) return window.alert(" You Do Not Have Any Note Here!");

        const allNotes = noteService.findAll().filter(note => note.id !== id);
        noteService.saveAll(allNotes)

    }

}







































