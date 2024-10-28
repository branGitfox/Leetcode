function twoSum(nums: number[], target: number): number[]|undefined {
    for(let i=0; i< nums.length; i++){
        for(let j=nums.length; j!=i ; j--){
            if((nums[i]+nums[j])=== target){
                return [i, j]
            }
        }
    }
};