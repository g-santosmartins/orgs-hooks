
import green from '../assets/produtores/green.png';
import salad from '../assets/produtores/salad.png';
import jennyJack from '../assets/produtores/jenny-jack.png';
import grow from '../assets/produtores/grow.png';
import potager from '../assets/produtores/potager.png';

const generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const producers = {
    title: "Produtores",
    list: [
        {   
            id: 1,
           
            name: "Green",
            image: green,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {
            id: 2,
            name: "Salad",
            image: salad,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {   
            id: 3,
           
            name: "Jenny Jack Farm",
            image: jennyJack,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {
            id: 4,

            name: "Grow",
            image: grow,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        },
        {
            id: 5,
            name: "Potager",
            image: potager,
            distance: `${generateRandomNumber(1, 500)}m`,
            stars: generateRandomNumber(1, 5),
        }
    ]
}

export default producers;