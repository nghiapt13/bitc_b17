// let s = 19;
// console.log("Nghĩa "+ s + " tuổi");
// console.log(`Nghĩa ${s} Tuổi`)

// let ba = " hae";
// console.log(ba.trim())
// if (ba.length > 4) {
//     console.log(ba.toLocaleUpperCase());
//     console.log("Chuỗi lớn");
// } else {
//     console.log("Chuỗi pé");
//     console.log(ba.replace('e', "Nghĩa"));
// }

// let hehe = "trungnghia"
// console.log(hehe[0].toUpperCase() + hehe.substring(1, hehe.length - 1).toLowerCase() + hehe[hehe.length - 1].toUpperCase())

// Bài 1

alert("Bài 1");
var text1= prompt("Mời nhập");
var word1 = text1.split(" ");

for(let i1 = 0; i1< word1.length;i1++){
    word1[i1] = word1[i1][0].toUpperCase() + word1[i1].substring(1);
}
alert(word1.join(" "));

// Bài 2
alert("Bài 2");
const char2 = {"a":"4","e":"3","i":"1","o":"0","s":"5"};
var text2 = prompt("Mời nhập");
text2 = text2.replace(/["aeios"]/g,m=>char2[m]);
alert(text2);

// Bài 3

alert("Bài 3");
var b3 = prompt("Mời nhập")
    if(b3.length>=3){
        if(b3.slice(-3)=="ing"){
            document.write(b3+"ly");
        }
        else{
            document.write(b3+"ing");
        }
    }else{
        document.write(b3);
    }
