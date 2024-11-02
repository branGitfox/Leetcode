function searchInsert(nums: number[], target: number): number {
    
    if(nums.indexOf(target) !==-1){
        return nums.indexOf(target)
    }else {
        let max =0
        for(let i = 0; i < nums.length ; i++) {
            
            if(target - nums[i] < 0 ) {
                return i
            }else if(target - nums[i] > 0){
               max=nums[i]
            }
            
        }

        if(max < target){
            return nums.indexOf(max) + 1
        }
    }
    
}