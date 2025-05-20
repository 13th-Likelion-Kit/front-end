// 1. 템플릿 리터럴을 활용하여 a + b를 출력하시오
const a = 10;
const b = 20;
console.log(`${a} + ${b} = ${a + b}`); // 10 + 20 = 30입니다.

// 2. 구조 분해 할당을 활용하여 올바르게 출력할 수 있도록 코드를 작성하시오.
const obj = { a: 10, b: 20, c: 30 };

function sum(param) {
    const a = param.a;
    const b = param.b;
    const c = param.c;
    console.log(`${a} + ${b} + ${c} = ${a + b + c}`);
    // 10 + 20 + 30 = 60
}

sum(obj);

// 3. spread 문법을 활용하여 올바르게 출력할 수 있도록 코드를 작성하시오.
const arr = [1, 2, 3, 4, 5];
const [a0, b1, ...rest] = arr;
console.log(a0); // 1
console.log(b1); // 2
console.log(rest); // [3, 4, 5]

// 4. 아기사자 리스트를 랜덤으로 섞은 상태에서 배열 메소드를 활용하여
const nameList = [
    "장은서",
    "김지이",
    "이민우",
    "김건우",
    "류태현",
    "이승호",
    "손유나",
    "김유진",
    "이수현",
    "추소진",
    "함서현",
    "김채현",
    "문철우",
    "김도훈",
];

function shuffle(array) {
    array.sort(function () {
        return Math.random() - 0.5;
    });
}

shuffle(nameList);

const filterName = nameList.filter(function (name) {
    return name !== "장은서";
});
console.log(filterName);

// 5. 다음 리스트를 like가 높은 순서로 정렬하여 출력하도록 하시오.
const list1 = [
    { title: "제목1", like: 51 },
    { title: "제목2", like: 24 },
    { title: "제목3", like: 63 },
    { title: "제목4", like: 101 },
    { title: "제목5", like: 403 },
];

list1.sort(function (a, b) {
    return b.like - a.like;
});

console.log(list1);
