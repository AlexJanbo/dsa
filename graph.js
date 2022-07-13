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


const hasPathDFS = (graph, source, destination) => {
    
    if(source === destination) return true

    for(let neighbor of graph[source]) {
        if(hasPathDFS(graph, neighbor, destination) === true) 
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

const graphTwo = {
    i: ['j', 'k'],
    j: ['i'],
    k: ['i', 'm', 'l'],
    m: ['k'],
    l: ['k'],
    o: ['n'],
    n: ['o']
}

const edges = [
    ["i", 'j'],
    ["k", "i"],
    ['m', 'k'],
    ['k', 'l'],
    ['o', 'n']
]

const undirectedPath = (edges, nodeA, nodeB) => {
    const graph = buildGraph(edges)
    return hasPath(graph, nodeA, nodeB, new Set())
}

const hasPath = (graph, source, destination, visited) => {
    if(source === destination) return true
    if(visited.has(source)) return false

    visited.add(source)

    for(let neighbor of graph[source]) {
        if(hasPath(graph, neighbor, destination, visited) === true) {
            return true
        }
    }

    return false
}

const buildGraph = (edges) => {
    const graph = {}

    for(let edge of edges) {
        const [ a, b ] = edge
        if(!(a in graph)) graph[a] = [];
        if(!(b in graph)) graph[b] = [];
        graph[a].push(b)
        graph[b].push(a)
    }

    return graph
}

// console.log(undirectedPath(edges, 'j', 'm'))

const connectedComponentsCount = (graph) => {

    const visited = new Set()
    
    for(let node in graph) {
        explore(graph, node, visited)
    }

    return count
}

const explore = (graph, current, visited) => {
    
    if(visited.has(String(current))) return false

    visited.add(String(current))

    let count = 0

    for(let neighbor of graph[current]) {
        if(explore(graph, neighbor, visited) === true) {
            count += 1
        }
    }

    return true
}