
// let today = new Date();

// let year = today.getFullYear();
// let month = today.getMonth() +1;
// let day = today.getDate();

// console.log(year +'年' + month + '月' + day + '日' );

const date = new Date();

const [month, day, year] = [
    date.getMonth(),
    date.getDate(),
    date.getFullYear(),
];

console.log(year + '年' + month + '月' + day + '日' );