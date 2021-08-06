'use strict'

// Anonymous functions, is widely used.
// Is a function thas has no name.
// https://medium.com/@anamartinezaguilar/callbacks-en-javascript-8deeca9824b4#id_token=eyJhbGciOiJSUzI1NiIsImtpZCI6Ijc4M2VjMDMxYzU5ZTExZjI1N2QwZWMxNTcxNGVmNjA3Y2U2YTJhNmYiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2MTA5NDk3OTksImF1ZCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjEwODg5MjQ2Mjk4NzM5OTgyNDAwMiIsImVtYWlsIjoicnVpemRpYXoub2VAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjIxNjI5NjAzNTgzNC1rMWs2cWUwNjBzMnRwMmEyamFtNGxqZGNtczAwc3R0Zy5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJFdmVyIFJ1aXogRGlheiIsInBpY3R1cmUiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS0vQU9oMTRHaUVNeVByVVM3RktHYUxEa2lydlE0bllmUTNHRVZfbGFuTHhUejczdz1zOTYtYyIsImdpdmVuX25hbWUiOiJFdmVyIiwiZmFtaWx5X25hbWUiOiJSdWl6IERpYXoiLCJpYXQiOjE2MTA5NTAwOTksImV4cCI6MTYxMDk1MzY5OSwianRpIjoiYjYzNGMzZmExZjZiZmMzYjBiOTBkMTNmNTNhNjVkZTJkZDAyZTIzNSJ9.Dio7BTEufxyzXJq-Gy9GrBN9S19MVjjbKtv5hTYnf7YbZFNTpuU2uDz9ARZHu6KtPw86eTIEkXtrWf_vuTC-hf85Upgl9uxLqnnRwrMOECw2HqgNfXTEenGfvpLOjz8oWejwQuCSIIWsJ95WCtb77_pT8-_KdmUmIXaNJygBFFp9m4RMTYXW-JiyvY8MEAkXlIw5E1c1EjWREJwb7k_Jww8QkWmZqkvklFHAyAJY--S6CjCHEkYu0nYq4-oao_BIgw2-L7daBjE0-nmGHLn0UPHdOEbIIKnscKkrY-wBnLcqXe5obym5CJdPvwtF4mCUhXGpNU7uS-t0Mw7Q63T64g


// Anonymous
var movie = function(name){
    return "The movie is " + name;
}


function addMe(num1, num2, sumAndShow, sumFor2){
    var sum = num1 + num2;

    sumAndShow(sum);
    sumFor2(sum);

    return sum;
}

// Callback
addMe(5, 5, function(data){
    console.log("The sum is: ", data);
},
    function(data){
        console.log("The sum for 2 is: ", (data*2));
    }    
);
