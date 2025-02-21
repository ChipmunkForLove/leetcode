/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let arr = s.split("");
    const set = { ")":"(", "}":"{", "]":"["};
    const stack =[];
    for(let i=0; i< arr.length;i++){
        if(i === 0 || stack.length === 0) stack.push(arr[i]);
        else {
            if(stack[stack.length-1] === set[arr[i]]) stack.pop();
            else {
                stack.push(arr[i]);
            }
        }
    }
    return stack.length ===0 ;
    
};
