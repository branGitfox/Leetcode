function isPalindrome(s: string): boolean {

    const nocaractere = s.split(/[^a-zA-Z0-9]+/g)
    const reversed=[...nocaractere.join('')].reverse().join('')
    const normal = nocaractere.join('')

    if(normal.toLowerCase() === reversed.toLowerCase()){
        return true
    }

    return false
};