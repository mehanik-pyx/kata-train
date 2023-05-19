const merge = function (nums1, m, nums2, n) {
    nums1 = [...nums1.filter(i => i !== 0), ...nums2].sort();
    console.log(nums1);
};

// var merge = function(nums1, m, nums2, n) {
//     nums1 = [...nums1.filter(i => i !== 0), ...nums2].sort();
// };

merge([1,2,3,0,0,0], 3, [2,5,6], 3);
const a = [1,2,3,4]
const b = [5,4,2,1]
const c = [...a, ...b]
// console.log(c);
