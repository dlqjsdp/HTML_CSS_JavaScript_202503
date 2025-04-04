// 1부터 20까지의 무작위 정수
function getMaxRandom(max){
    return Math.floor(Math.random() * max) + 1;
}

const maxRandom = getMaxRandom(20);
console.log(maxRandom);


//1부터 45까지의 무작위 정수
const num = Math.floor(Math.random() * 45)+1;
console.log(num);
