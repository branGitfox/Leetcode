function isPalindrome(x: number): boolean {
    let t = (String)(x)
    if([...t].reverse().join("") == [...t].join("")){
        return true
    }

    return false
};