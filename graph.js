const depthFirstPrint = (graph, source) => {
    const stack = [ source ]

    while(stack.length > 0) {
        const current = stack.pop()
        console.log(current)
        graph[current]
        for(let neighbor of graph[current]) {
            stack.push(neighbor)
        }
    }
}

const graph = {
    a: ['c', 'b'],
    b: ['d'],
    c: ['e'],
    d: ['f'],
    e: [],
    f: []
}

const depthFirstPrintRecursive = (graph, source) => { 
    console.log(source)
    for(let neighbor of graph[source]) {
        depthFirstPrintRecursive(graph, neighbor)
    }
}

// depthFirstPrint(graph, 'a')
// depthFirstPrintRecursive(graph, 'a')

const bfsPrint = (graph, source) => {
    const queue = [ source ]
    while(queue.length > 0) {
        const current = queue.shift()
        console.log(current)
        for(let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
}

// bfsPrint(graph, 'a')


const hasPath = (graph, source, destination) => {
    
    if(source === destination) return true

    for(let neighbor of graph[source]) {
        if(hasPath(graph, neighbor, destination) === true) 
        return true
    }

    return false
}

const hasPathBFS = (graph, source, destination) => {
    
    const queue = [ source ]

    while(queue.length > 0) {
        const current = queue.shift()
        if(current === destination) return true
        for(let neighbor of graph[current]) {
            queue.push(neighbor)
        }
    }
    return false
}