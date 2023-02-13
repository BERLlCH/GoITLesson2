const books = require("./books");
const {program} = require("commander");

const invokeAction = async ({action, id, title, author}) => {
    switch(action){
        case "getAll":
            const allBooks = await books.getAll();
            console.log(allBooks);
            break;
        case "getById":
            const oneBook = await books.getById(id);
            console.log(oneBook);
            break;
        case "add":
            const newBook = await books.add({title, author})
            console.log(newBook);
            break;
        case "updateById":
            const updateById = await books.updateById(id, {title, author});
            console.log(updateById);
            break;
        case "removeById":
            const removedBook = await books.removeById(id);
            console.log(removedBook);
            break;
    }
}

// invokeAction({action: "getAll"})
// invokeAction({action: "getById", id: "YxhM4QDxPeA3SmPHcEZPJ"})
// invokeAction({action: "add", title: "Worm", author: " Маккрей Джон"})
// invokeAction({action: "updateById", id: "YxhM4QDxPeA3SmPHcEZPJ", title: "Wa1d", author: "Джон Маккрей"})
// invokeAction({action: "removeById", id: "CTHE0f1kkWwqS5sL2tI8_"})

program
    .option("-a, --action <type>")
    .option("-i, --id <type>")
    .option("-t, --title <type>")
    .option("-auth, --author <type>")
program.parse();

const options = program.opts();
console.log(options);
invokeAction(options)