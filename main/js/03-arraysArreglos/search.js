'use strict'

var languages = ["Python", "JavaScript", "Rust", "C", "C++", "Go"];


/* for (let language in languages){
    document.write(languages[language]);
}
 */

var busqueda = languages.find(function(language){
    return language == "Rust";
});

console.log(busqueda);