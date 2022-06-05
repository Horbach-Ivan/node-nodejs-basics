import fs from 'fs'
export const create = async () => {
    const freshFile = "fresh.txt"

    fs.readdir("./files", (err, files) => {
        const checkContains = files.includes(freshFile)

        if (checkContains) {
            throw new Error(' FS operation failed')
        } else {
        fs.writeFile("./files/fresh.txt", "I am fresh and young", (err)  => {
                if(err) {
                    return console.log(err);
                }
            }); 
        }
      });
    
};
