// Recursive Fib

// memoization
// store duplicate subproblems to reuse without having to redo the same calculation
// Hashmap, for JS, use JS object, keys will be the arg to fn
// value will be the return

const fib = (n, memo={}) => {
    if (n in memo) return memo[n]
    if(n<=2) {
        return 1
    }
    memo[n] = (fib(n-1, memo) + fib(n-2, memo))
    return memo[n]
    
}

// console.log(fib(50))

// Grid traveler

const gridTraveler = (m, n, memo={}) => {
    const key = m + "," + n
    // check memo object
    if(key in memo) return memo[key]
    if( m === 1 && n === 1) return 1
    if( m === 0 || n === 0) return 0
    memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n-1, memo)
    return memo[key]
}

// console.log(gridTraveler(3,3))

// console.log(gridTraveler(18,18))


// canSum 

const canSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return true
    if(targetSum < 0) return false

    for(let num of numbers) {
        const remainder = targetSum - num
        
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true
            return true;
        }
    }

    memo[targetSum] = false
    return false
}

// console.log(canSum(300, [7, 14]))

// howSum

const howSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return []
    if(targetSum < 0) return null

    for(let num of numbers) {
        const remainder = targetSum - num
        const remainderResult = howSum(remainder, numbers, memo)
        if(remainderResult !== null) {
            memo[targetSum] = [ ...remainderResult, num ]
            return memo[targetSum]
        }
    }

    memo[targetSum] = null
    return null
}

// console.log(howSum(300, [7, 14, 3]))

const bestSum = (targetSum, numbers, memo={}) => {
    if(targetSum in memo) return memo[targetSum]
    if(targetSum === 0) return []
    if(targetSum < 0) return null

    let shortestCombination = null

    for(let num of numbers) {
        const remainder = targetSum - num
        const remainderCombination = bestSum(remainder, numbers, memo)
        if(remainderCombination !== null) {
            const combination = [ ...remainderCombination, num ] 
            if( shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination
            }
        }
    }

    memo[targetSum] = shortestCombination
    return shortestCombination
}

// console.log(bestSum(100, [1, 2, 4, 25]))

const canConstruct = (target, wordBank, memo={}) => {
    if(target in memo) return memo[target]
    if(target === "") return true

    for (let word of wordBank) {
        if(target.indexOf(word) === 0) {
            const suffix = target.slice(word.length)
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true
                return true
            }
        }
    }

    memo[target] = false
    return false
}

// console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", 
// ["e", "ee", "eee", "eeee", "eeeeee", "eeeeee"]))

var coinChange = function(coins, amount, memo={}) {
    if(amount < 0) return -1
    if(amount === 0) return 0

    var cc = -1
    for(let i = 0; i < coins.length; i++) {
        int 
    }
};

console.log(coinChange([1,2,5], 11))