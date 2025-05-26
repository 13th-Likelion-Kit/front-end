// 1. 템플릿 리터럴을 활용하여 a + b를 출력하시오
const a = 10;
const b = 20;
console.log(`${a} + ${b} = ${a + b} 입니다.`); // 10 + 20 = 30입니다.


// 2. 구조 분해 할당을 활용하여 올바르게 출력할 수 있도록 코드를 작성하시오.
const obj = { a: 10, b: 20, c: 30 };

function sum({a, b ,c} = obj) {
  console.log(`${a} + ${b} + ${c} = ${a + b + c}`);
  // 10 + 20 + 30 = 60
}

sum(obj);


// 3. spread 문법을 활용하여 올바르게 출력할 수 있도록 코드를 작성하시오.
const arr = [1, 2, 3, 4, 5];
let [a1 , b2 , ...rest] = arr;
console.log(a1); // 1
console.log(b2); // 2
console.log(rest); // [3, 4, 5]


// 4. 아기사자 리스트를 랜덤으로 섞은 상태에서 배열 메소드를 활용하여
let nameList = [
  "장은서", "김지이",
  "이민우", "김건우",
  "류태현", "이승호",
  "손유나", "김유진",
  "이수현", "추소진",
  "함서현", "김채현",
  "문철우", "김도훈",
];

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
shuffle(nameList);

nameList = nameList.filter((e) => e !== "장은서");

console.log(nameList);


// 5. 다음 리스트를 like가 높은 순서로 정렬하여 출력하도록 하시오.
const list1 = [
  { title: "제목1", like: 51 },
  { title: "제목2", like: 24 },
  { title: "제목3", like: 63 },
  { title: "제목4", like: 101 },
  { title: "제목5", like: 403 },
];

list1.sort((a,b) => b.like - a.like);
console.log(list1);

// 6. 배열 메소드 map을 활용하여 제목, 내용을 순서대로 출력하도록 하시오.
  const list2 = [
    { title: "제목1", like: 51, content: "내용1" },
    { title: "제목2", like: 24, content: "내용2" },
    { title: "제목3", like: 63, content: "내용3" },
    { title: "제목4", like: 101, content: "내용4" },
    { title: "제목5", like: 403, content: "내용5" },
  ];
  const names = list2.map(function(user) {
      return list2.title , list2.content;
  });
  list2.map(function(item) {
     console.log(`제목: ${item.title}, 내용: ${item.content}`);
  });

  // 7. 배열 메소드 filter를 활용하여 like가 100 이상인 것만 출력하도록 하시오.
const list3 = [
  { title: "제목1", like: 51, content: "내용1" },
  { title: "제목2", like: 24, content: "내용2" },
  { title: "제목3", like: 63, content: "내용3" },
  { title: "제목4", like: 101, content: "내용4" },
  { title: "제목5", like: 403, content: "내용5" },
];
const result = list3.filter((e) => e.like >= 100 );
console.log(result); // like가 100 이상인 리스트만 출력 합니다.

// 8. 배열 메소드 reduce를 활용하여 like의 총합을 구하시오.                         
const list4 = [
  { title: "제목1", like: 51, content: "내용1" },
  { title: "제목2", like: 24, content: "내용2" },
  { title: "제목3", like: 63, content: "내용3" },
  { title: "제목4", like: 101, content: "내용4" },
  { title: "제목5", like: 403, content: "내용5" },
];          
const result2 = list4.reduce((alllike,item) => alllike + item.like, 0); 
console.log(result2); // like의 총합을 출력합니다.

// 9. 배열 메소드 some을 활용하여 like가 100 이상인 것이 있는지 확인하시오.
const list5 = [
  { title: "제목1", like: 51, content: "내용1" },
  { title: "제목2", like: 24, content: "내용2" },
  { title: "제목3", like: 63, content: "내용3" },
  { title: "제목4", like: 101, content: "내용4" },
  { title: "제목5", like: 403, content: "내용5" },
];  
const result3 = list5.some(function(element){
  return element.like >= 100;
});
console.log(result3); // like가 100 이상인 것이 있는지 확인합니다.

// 10. 배열 메소드 every를 활용하여 like가 100 이상인 것만 있는지 확인하시오.
const list6 = [
  { title: "제목1", like: 51, content: "내용1" },
  { title: "제목2", like: 24, content: "내용2" },
  { title: "제목3", like: 63, content: "내용3" },
  { title: "제목4", like: 101, content: "내용4" },
  { title: "제목5", like: 403, content: "내용5" },
];  
const result4 = list6.every(function(element){
  return element.like >= 100;
});
console.log(result4); // like가 100 이상인 것만 있는지 확인합니다.          
