function intersection(nums1: number[], nums2: number[]): number[] {
    let noOcc1 = [...new Set(nums1)]
    let noOcc2 = [...new Set(nums2)]

    let inter = [...noOcc1, ...noOcc2]
        let result = []
    for(let i = 0; i < inter.length; i++){
        for(let j = i; j < inter.length -1 ; j++){
            if(inter[i] == inter[j+ 1]){
                result.push(inter[i])
            }
        }
    }
    return result
};