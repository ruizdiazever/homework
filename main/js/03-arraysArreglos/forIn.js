'use strict'

var languages = ["Python", "JavaScript", "Rust", "C", "C++", "Go"];


document.write("<ol start='1' class='mx-5' >");
for (let language in languages){
    document.write("<li>" + languages[language] + "</li>");
}
document.write("</ol>");

