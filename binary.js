//

class Node {
    constructor(value) {
        this.val = value
        this.left = null
        this.right = null
    }
}

const a = new Node("a")
const b = new Node("b")
const c = new Node("c")
const d = new Node("d")
const e = new Node("e")
const f = new Node("f")

a.left = b
a.right = c
b.left = d
b.right = e
c.right = f

const depthFirstValues = (root) => {
    const results = []
    const stack = [ root ];
    if(root === null) {
        return []
    }
    while(stack.length > 0) {
        const current = stack.pop();
        results.push(current.value)

        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
    return results
}



const dfsRecursive = (root) => {
    if(root === null) return []

    const leftValues = dfsRecursive(root.left)
    const rightValues = dfsRecursive(root.right)
    return [ root.val, ...leftValues, ...rightValues ]
}

// console.log(dfsRecursive(a))

const breadthFirstValues = (root) => {
    if(root === null) return []
    
    const queue = [ root ]
    const values = []

    while(queue.length > 0) {
        const current = queue.shift()
        values.push((current.val))

        if(current.left !== null) queue.push(current.left)
        if(current.right !== null) queue.push(current.right)
    }

    return values
}

// console.log(breadthFirstValues(a))

const treeIncludes = (root, target) => {
    if(root === null) {
        return false
    } 

    const queue = [ root ]
    while(queue.length > 0) {
        const current = queue.shift()
        if(current === target) {
            return true
        }
        console.log(current.val)

        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }
    return false
}

// treeIncludes(a, )

const treeIncludesDFS = (root, target) => {
    if(root === null) {
        return false
    }

    if(root === target) {
        return true
    }

    return treeIncludesDFS(root.left, target) || treeIncludesDFS(root.right, target)
}

//console.log(treeIncludesDFS(a, d))

const treeSum = (root) => {
     if(root === null) {
        return 0
     }

     let total;

     return root.val + treeSum(root.left) + treeSum(root.right)
}

const treeSumBFS = (root) => {
    if(root === null) {
        return 0
    }

    let total;
    const queue = [ root ]
    while(queue.length > 0) {
        let current = queue.shift()
        total += current.val
        if(current.left !== null) {
            queue.push(current.left)
        }
        if(current.right !== null) {
            queue.push(current.right)
        }

    }
    return total
}

const treeMinValueBFS = (root) => {

    let smallest = Infinity 
    const queue = [ root ]
    while(queue.length > 0) {
        const current = queue.pop()
        if(current.value < smallest ) {
            smallest = current
        }

        if(current.left !== null) {
            queue.push(current.left)
        }
        if(current.right !== null) {
            queue.push(current.right)
        }
    }
}


const treeMinValueDFS = (root) => {
    if(root === null) return Infinity
    
    const leftMin = treeMinValueDFS(root.left)
    const rightMin = treeMinValueDFS(root.right)

    return Math.min(root.val, leftMin, rightMin)

}

const maxPathSum = (root) => {
    
    if(root === null) {
        return -Infinity
    }


    if(root.left === null && root.right === null) {
        return root.val
    }

    const biggestChild = Math.max(
        maxPathSum(root.left),
        maxPathSum(root.right)
    )
    return root.val + biggestChild

}

