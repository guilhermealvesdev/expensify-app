//Arrays
const menu = ["Café (quente)", "R$ 2,00", "R$ 2,50", "R$2,75"];

const [item, ,preco2, preco3] = menu

console.log(`Um ${item} grande custa ${preco3}`);






//Object
const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
}

const {name: publisherName = "Self-published"} = book.publisher;

console.log(`${publisherName}.`);