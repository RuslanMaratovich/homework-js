let line1 = 'AbscdDFJKNH'
let line2 = 'Вот пример строки,в которой используются знаки препинания. После знаков должны стоять пробелы, а перед знаками их быть не должно. Если есть лишние подряд идущие пробелы, они должны быть устранены.';
let line3 = 'Текст, в котором слово текст несколько раз встречается и слово тоже'

console.log(pow(line1)); //1.1

console.log(space(line2)); //1.2

console.log("в строке " + wordCount(line2) + " слов"); //1.3

uniqueWordCount(line3); //1.4

function pow(line) {
    if (!line) return line;
    return line[0].toUpperCase() + line.slice(1).toLowerCase();
}


function space(line) {
    let pos = 0;
    while (true) {
        let foundPos = line.indexOf("," || "?" || "." || "!" || ":", pos);
        if (foundPos === -1) break;
        else line = (line.slice(0, foundPos + 1) + " " + line.slice(foundPos + 1, line.length));
        pos = foundPos + 1;
    }
    return line.replace(/\s+/g, " ");
}

function wordCount(line) {
    line = space(line);
    return line.split(' ').length;
}


function uniqueWordCount(line) {
    let bd = line.replace(/[^a-zа-яё\s]/gi, '').toLowerCase(); //Оставляем только слова с нижнем регистром
    bd = bd.replace(/\s+/g, ' '); //убираем лишние пробелы
    let arr = (bd.split(' ')) //помещаем в массив слова
    let result = {};
    for (let i = 0; i < arr.length; ++i) {
        let a = arr[i];
        if (result[a] !== undefined)
            ++result[a];
        else
            result[a] = 1;
    }
    console.log(`В тексте: "${line}"`);
    for (let key in result)
            console.log('слово "' + key + '" повторяется ' + result[key] + ' раз(а)');
}