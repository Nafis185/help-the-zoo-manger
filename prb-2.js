function checkName(names){

const lastLetters = ['a','y','i','e','o','u','w']
const letters = names.charAt(names.length-1);


if(lastLetters.includes(letters)){
    return 'good name';
}

else{
    return 'bad Name';
}

}

console.log(checkName("rafee"));