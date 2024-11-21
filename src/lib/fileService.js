
export const fileSerivce = {

    generateBase64FromFile: async (file) => {
        return new Promise((resolve, reject) => {

            const fileReader = new FileReader();
            fileReader.readAsDataURL(file);

            fileReader.onerror = (err) => {
                reject(err)
            }
            fileReader.onload = (event) => {
                resolve(event.target.result)
            }
        })
    }

}
