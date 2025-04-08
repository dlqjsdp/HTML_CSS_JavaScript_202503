// 동기방식

console.log("======동기방식======")
console.log("1. 라면 장보기")
console.log("2. 물 끓이기")
console.log("3. 끓는 물에 라면, 스프 넣고 익히기")
console.log("4. 완성")


//비동기방식
console.log("======비동기방식======")

setTimeout(()=>{
    console.log('1. 라면 장보기')
}, 3000); //3초 후에 메서드가 동작한다는 뜻

console.log("2. 물 끓이기")
console.log("3. 끓는 물에 라면, 스프 넣고 익히기")
console.log("4. 완성")

//1. 콜백함수(Callback)

function getData(callback){
    setTimeout(()=> {
        callback('콜백으로 처리한 데이터')}, 1000);
}

getData((result) => {
    console.log(result)
})