//Anagram function

//["aaf","faa"] ---> true
//["tea","cofee"] ----> false
//["aaz","zaa"] ---> false

 function validateAnagram(str1,str2){
    let anagram1 = {};
    let anagram2 = {};
   if(str1.length !== str2.length) return false;
   [...str1].forEach(c => {
      anagram1[c] = (anagram1[c] || 0) +1;
   }) ;
   console.log(anagram1);
   [...str2].forEach(c => {
      anagram2[c] = (anagram2[c] || 0) +1;
   }) ;
   console.log(anagram2);
   for (let key in anagram1){
       if(!key in anagram1){
           return false;
       }
       if(anagram1[key] !== anagram2[key]){
           return false;
       }
   }
   return true;
}
//another way

function validateAnagram2(str1,str2){
    let anagramLookup = {};
    //let anagram2 = {};
   if(str1.length !== str2.length) return false;
   [...str1].forEach(c => {
      anagramLookup[c] = (anagramLookup[c] || 0) +1;
   }) ;
   console.log(anagramLookup);
   [...str2].forEach(c => {
       if(!c in anagramLookup) return false;
       else anagramLookup[c] = anagramLookup[c] - 1;
   }) ;
   return true;
}
// let a = validateAnagram("aaf","faa");
// console.log(a);
let b = validateAnagram("tea","cofee");
console.log(b);
// let c = validateAnagram("aaz","zaa");
// console.log(c);
// let d = validateAnagram2("aaf","faa");
// console.log(d);
let e = validateAnagram2("tea","cofee");
console.log(e);
// let f = validateAnagram2("aaz","zaa");
// console.log(f);