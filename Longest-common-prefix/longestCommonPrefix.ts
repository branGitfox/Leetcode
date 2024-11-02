function longestCommonPrefix(strs: string[]): string {
    if(!strs.length) return '';

    strs.sort((a, b) => a.localeCompare(b));
    console.log(strs)
    let _prefix: string = '';

    for(let char of strs[0])
        if(strs.every(a => a.startsWith(_prefix + char))) _prefix += char
        else break;

    return _prefix;
};