function changeButton () {
    const param = document.querySelector(".helloText");
    if (param.textContent == "안녕하세요!") {
        param.textContent = "저는 바보입니다.";
    } else {
        param.textContent = "안녕하세요!";
    }
}