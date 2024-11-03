function lengthOfLastWord(s: string): number {
    const splited = s.split(' ')
    let noOccurence = [...new Set(splited)]

    
    let lastString = noOccurence[noOccurence.length-1]
    if(lastString== ''){
        return noOccurence[noOccurence.length-2].length
    }
    return lastString.length
};