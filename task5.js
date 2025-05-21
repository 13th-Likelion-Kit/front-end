// // 1. 템플릿 리터럴을 활용하여 a + b를 출력하시오
// const a = 10;
// const b = 20;
// console.log(`${a}+${b}은 ${a + b}입니다.`); // 10 + 20 = 30입니다.

// 2. 구조 분해 할당을 활용하여 올바르게 출력할 수 있도록 코드를 작성하시오.
const obj = { a: 10, b: 20, c: 30 };

function sum({ a, b, c } = obj) {
  console.log(`${a} + ${b} + ${c} = ${a + b + c}`);
  // 10 + 20 + 30 = 60
}
sum(obj);
// 3. spread 문법을 활용하여 올바르게 출력할 수 있도록 코드를 작성하시오.
const arr = [1, 2, 3, 4, 5];
let [a = 1, ...rest] = arr;
console.log(a); // 1
// console.log(b); // 2
console.log(rest);

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
function shuffleNKill(array) {
  let rnd_arr = array.sort(() => Math.random() - 0.5);
  let killed_arr = rnd_arr.filter((item) => item !== "장은서");
  return killed_arr;
}
console.log(shuffleNKill(nameList));
/* "장은서"를 찾아서 제거하는 코드를 작성하세요 */

// 5. 다음 리스트를 like가 높은 순서로 정렬하여 출력하도록 하시오.
const list1 = [
  { title: "제목1", like: 51 },
  { title: "제목2", like: 24 },
  { title: "제목3", like: 63 },
  { title: "제목4", like: 101 },
  { title: "제목5", like: 403 },
];
/* like가 높은 순으로 정렬하는 코드를 작성하세요 */
console.log(
  list1.sort((a, b) => {
    return b.like - a.like;
  })
);

// 6. 배열 메소드 map을 활용하여 제목, 내용을 순서대로 출력하도록 하시오.
const list2 = [
  { title: "제목1", like: 51, content: "내용1" },
  { title: "제목2", like: 24, content: "내용2" },
  { title: "제목3", like: 63, content: "내용3" },
  { title: "제목4", like: 101, content: "내용4" },
  { title: "제목5", like: 403, content: "내용5" },
];

list2.map((ele) => {
  console.log(ele.title, ele.content);
});

// 7. 배열 메소드 filter를 활용하여 like가 100 이상인 것만 출력하도록 하시오.
const list3 = [
  { title: "제목1", like: 51, content: "내용1" },
  { title: "제목2", like: 24, content: "내용2" },
  { title: "제목3", like: 63, content: "내용3" },
  { title: "제목4", like: 101, content: "내용4" },
  { title: "제목5", like: 403, content: "내용5" },
];

const result = list3.filter((a) => {
  return a.like - 100 > 0;
});
console.log(result); // like가 100 이상인 리스트만 출력 합니다.

// 8. 배열 메소드 reduce를 활용하여 like의 총합을 구하시오.
const list4 = [
  { title: "제목1", like: 51, content: "내용1" },
  { title: "제목2", like: 24, content: "내용2" },
  { title: "제목3", like: 63, content: "내용3" },
  { title: "제목4", like: 101, content: "내용4" },
  { title: "제목5", like: 403, content: "내용5" },
];
let count = 0;
/* like의 총합을 구하는 콜백을 작성하세요 */
const result2 = list4.reduce((sum, ele) => {
  return sum + ele.like;
  console.log("🚀 ~ result2 ~ sum:", sum);
}, list4[0].like);
console.log(result2); // like의 총합을 출력합니다.

// 9. 배열 메소드 some을 활용하여 like가 100 이상인 것이 있는지 확인하시오.
const list5 = [
  { title: "제목1", like: 51, content: "내용1" },
  { title: "제목2", like: 24, content: "내용2" },
  { title: "제목3", like: 63, content: "내용3" },
  { title: "제목4", like: 101, content: "내용4" },
  { title: "제목5", like: 403, content: "내용5" },
];

  if(list5.some((ele)=>{return ele.like>= 100 }) == true){
    console.log("참입니당")
  } 
  else{
    console.log("구랍니당")
  }// like가 100 이상인 것이 있는지 확인합니다.


// 10. 배열 메소드 every를 활용하여 like가 100 이상인 것만 있는지 확인하시오.
const list6 = [
  { title: "제목1", like: 51, content: "내용1" },
  { title: "제목2", like: 24, content: "내용2" },
  { title: "제목3", like: 63, content: "내용3" },
  { title: "제목4", like: 101, content: "내용4" },
  { title: "제목5", like: 403, content: "내용5" },
];
const result4 =
  list6.every((el)=>{return el.like>= 100});
console.log(result4); // like가 100 이상인 것만 있는지 확인합니다. // 수고하셨습니다. github에 올려주세요.~~
