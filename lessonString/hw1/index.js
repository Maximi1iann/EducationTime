const splitString = (str, len) => {
    if (typeof str !== 'string') {
        return null;
    }
    let start = 0;
    const result = [];
    while (true) {
        let chunk = str.substr(start, len);
        if (chunk.length === 0) {
            break;
        }
        if (chunk.length < len) {
            console.log(chunk.length)
            chunk = chunk.concat('.'.repeat(len - chunk.length));
        }
        result.push(chunk);  
        start += len; 
    }
    return result;
};

console.log(splitString('rewv w ee fer', 4));