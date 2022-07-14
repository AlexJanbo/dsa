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

const largestComponent = (graph) => {

    const visited = new Set()
    const largest = 0

    for(let node in graph) {
        const size = traverse(graph, node, visited)
        if(size > largest) largest = size
    }

    return largest
}

const traverse = (graph, current, visited) => {

    if(visited.has(current)) return 0

    visited.add(current)

    let count = 1;

    for(let neighbor of graph[current]) {
        size += traverse(graph, neighbor, visited)
    }

    return size
}

const shortestPath = (edges, nodeA, nodeB) => { 
     const graph = makeGraph(edges)

     const visited = new Set([ nodeA ])

     const queue = [ [nodeA, 0] ]

     while(queue.length > 0) {
        const [ node, distance ] = queue.shift()

        if(node === nodeB) return distance
        for(let neighbor of graph[node]) {
            if(!visited.has(neighbor)) {
                queue.push([ neighbor, distance + 1 ])
            }
        }
     }
     return -1
}

const makeGraph = (edges) => {
    const graph = {}

    for(let edge of edges) {
        const [ a,b] = edge

        if(!(a in graph)) graph[a] = []
        if(!(b in graph)) graph[b] = []

        graph[a].push(b)
        graph[b].push(a)
    }
}   

const islandCount = (grid) => {
    
    const visited = new Set()
    let count = 0
    
    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; grid[0].length; c++) {
            if(exploreIslands(grid, r, c, visited) === true) {
                count++
            }
        }
    }

    return count
}

const exploreIslands = (grid, r, c, visited) => {
    
    const rowInBounds = 0 <= r && r < grid.length
    const colInBounds = 0 <= c && c < grid[0].length
    if(!rowInBounds || !colInBounds) return false

    if(grid[r][c] === 'w') return false

    const position = r + ',' + c

    if(visited.has(pos)) return false
    visited.add(pos)

    exploreIslands(grid, r-1, c, visited)
    exploreIslands(grid, r+1, c, visited)
    exploreIslands(grid, r, c-1, visited)
    exploreIslands(grid, r, c+1, visited)

    return true
}


const islandMinimum = (grid) => {
    
    const visited = new Set()
    let minSize = Infinity

    for(let r = 0; r < grid.length; r++) {
        for(let c = 0; c < grid[0].length; c++){
            const size = size + exploreIsland(grid, r, c, visited )
            if(size > 0 && size < minSize) minSize = size
        }
    }
}

const exploreIsland = (grid, r, c, visited) => {

    const rowInBounds = 0 <= r && r < grid.length
    const colInBounds = 0 <= c && c < grid.length
    if(!rowInBounds || colInBounds) return 0

    if(grid[r][c] === "w") return 0

    const position = r + ',' + c

    if(visited.has(position)) return 0

    visited.add(position)
    
    let size = 1;

    size += exploreIsland(grid, r+1, c, visited)
    size += exploreIsland(grid, r-1, c, visited)
    size += exploreIsland(grid, r, c+1, visited)
    size += exploreIsland(grid, r, c-1, visited)

    return size
}