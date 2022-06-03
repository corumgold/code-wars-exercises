function median(nums) {
    let middleNum = 0
    if (nums.length % 2 !== 0) {
        middleNum += nums[(nums.length - 1) / 2]
    } else if (nums.length % 2 === 0) {
        let halfWayShort = 0
        let halfWayLong = 0
        halfWayShort += nums[((nums.length - 1) / 2) - 0.5]
        halfWayLong += nums[((nums.length + 1) / 2) - 0.5]
        middleNum += (halfWayShort + halfWayLong) / 2
    } return middleNum
}
