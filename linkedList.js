class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor( head = null ) {
        this.head = head
    }
}

const addNode = (data) => {
    let current = new Node(data)
}

let ll = new LinkedList()

const a = new Node("A")
const b = new Node("B")
const c = new Node("C")
const d = new Node("D")

a.next = b
b.next = c
c.next = d

const printLinkedList = (head) => {
    let current = head
    while(current !== null) {
        console.log(current.data)
        current = current.next
    }
}

// printLinkedList(a)
const printLinkedListRecurisvely = (head) => {
    if(head === null) return

    console.log(head.data)
    printLinkedListRecurisvely(head.next)
}

// printLinkedListRecurisvely(a)

const LinkedListValues = (head) => {
    let current = head
    let valuesArray = []
    while(current !== null) {
        valuesArray.push(current.data)
        current = current.next
    }
    return valuesArray
}

// console.log(LinkedListValues(a))

const LinkedListValuesRecursive = (head) => {
    const valuesArray = []
    fillValues(head, valuesArray)
    return valuesArray
}

const fillValues = (head, valuesArray) => {
    if(head === null) return
    valuesArray.push(head.data)
    fillValues(head.next, valuesArray)
}

console.log(LinkedListValuesRecursive(a))