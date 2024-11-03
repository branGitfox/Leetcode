function containsDuplicate(nums: number[]): boolean {

    if([...new Set(nums)].length == nums.length){
        return false
    }else{
        return true
    }
    
};