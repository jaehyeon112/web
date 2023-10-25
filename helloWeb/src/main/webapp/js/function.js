

    //함수 선언.
    function myFunc(std, score=60){
        // if( score == undefined){
        //     score = 0
        // }
        console.log(`이름 : ${std}, 점수 : ${score}`);
        return score; // undefined
    }
    

    //함수 표현식
    var myFunc = function myFunc(std, score=60){
        // if( score == undefined){
        //     score = 0
        // }
        console.log(`이름 : ${std}, 점수 : ${score}`);
        return score; // undefined
    }
    console.log(myFunc('홍길동'));