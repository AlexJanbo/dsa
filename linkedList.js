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

const a = new Node(5)
const b = new Node(6)
const c = new Node(7)
const d = new Node(8)

a.next = b
b.next = c
c.next = d

const e = newNode(9)
const f = newNode(10)
e.next = f

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

// console.log(LinkedListValuesRecursive(a))

const SumList = (head) => {
    let current = head
    let totalSum = 0;
    while(current !== null) {
        totalSum += current.data
        current = current.next
    }
    return totalSum
}

// console.log(SumList(a))

const SumListRecursive = (head) => {
    if(head === null) return 0
    return head.data + SumListRecursive(head.next)
}

// console.log(SumListRecursive(a))

const LinkedListFind = (head, target) => {
    let current = head
    while(current !== null) {
        if(current.data === target) {
            return true
        }
        current = current.next
    }
    return false
}

// console.log(LinkedListFind(a, 23))

const GetNodeValue = (head, index) => {
    let current = head
    for(let i = 0; i < index; i++) {
        current = current.next
    }
    return current.data
}

// console.log(GetNodeValue(a, 2))

const GetNodeValueRecursive = (head, index) => {
    if(head === null) return null
    if(index === 0) return head.data
    return GetNodeValueRecursive(head.next, index-1)
}

// console.log(GetNodeValueRecursive(a, 2))

const ReverseList = (head) => {
    let prev = null
    let current = head
    while(current !== null) {
        let next = current.next
        current.next = prev
        prev = current
        current = next
    }
    return prev
}

// console.log(ReverseList(a))

const ReverseListRecursive = (head, prev=null) => {
    if(head === null) return prev
    const next = head.next
    head.next = prev
    return ReverseListRecursive(next, head)
}

// console.log(ReverseListRecursive(a))

const ZipperList = (HeadOne, HeadTwo) => {

    let tail = headOne
    let current1 = HeadOne.next
    let current2 = HeadTwo
    let count = 0

    while(current1 !== null && current2 !== null) {
        if(count % 2 === 0) {
            tail.next = current2
            current2 = current2.next 
        } else {
            tail.next = current1
            current1 = current1.next
        }
        tail = tail.next
        count += 1
    }

    if(current1 !== null) {
        tail.next = current1
    }
    if(current2 !== null) {
        tail.next = current2
    }

    return headOne 
}