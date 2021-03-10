function text(str){
    let count = 0;
    let strtext = ['a', 'e', 'i', 'o', 'u', 'y']; // 6 гласные буквы в английском языке
    str = str.toLowerCase().split('');
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < strtext.length; j++) {
            if (str[i] == strtext[j]) {
                count++;
            }
        }
    }
    return count;
}
console.log(text('Kalys Zhekshenov')); //5 гласные буквы найдены
