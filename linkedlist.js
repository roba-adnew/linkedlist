function node(value, next = null) {
    return {value, next}
}

function linkedList() {
    let head = tail = node(null);
    let length = 0;

    function append(value) {
        const newNode = node(value);
        length++;

        if (!head.value) {
            head = tail = newNode;
            return;
        }

        if (!tail.value) {
            head.next = tail = newNode;
            return;
        }

        tail.next = newNode;
        tail = newNode;
        return;
    }

    function prepend(value) {
        const newNode = node(value);
        length++;

        if(!head.value) {
            head = tail = newNode;
            return;
        }

        newNode.next = head;
        head = newNode;
        return;
    }

    function size() {
        return length;
    }

    function getHead() {
        return head.value;
    }

    function getTail() {
        return tail.value;
    }

    function at(index) {
        let searchNode = head;
        for (let i = 0; i < index ; i++) {
            searchNode = searchNode.next;
        }

        return searchNode;
    }

    function pop() {
        if (!head.value) {
            return;
        }

        length--;
        if (length === 1) {
            head = tail = null;
            return;
        }

        const oldTail = tail;
        const secondToLast = at(length);
        secondToLast.next = null;
        tail = secondToLast;
        return oldTail;
    }

    function contains(value) {
        if (!head.value) {
            return false;
        }

        let searchNode = head;
        for (let i = 0; i < length ; i++) {
            if (searchNode.value === value) {
                break;
            }
            searchNode = searchNode.next;
        }

        if (searchNode.value === value) {
            return true;
        }
        else {
            return false;
        }
    }

    function find(value) {
        if (!head.value) {
            return null;
        }

        let searchNode = head;
        for (let i = 0; i < length; i++) {
            if (searchNode.value === value) {
                return i;
            }
            searchNode = searchNode.next;
        }

        return null;
    }

    function toString() {
        let nodeString = '';
        let searchNode = head;

        for (let i = 0; i < length; i++) {
            if (searchNode.value) {
                nodeString += "( " + searchNode.value + " ) -> ";
            }
            else {
                break;
            }
            searchNode = searchNode.next;
        }
        nodeString += "null";
        console.log(nodeString);
        return;
    }

    function insertAt(value, index) {
        if (!head.value || index >= length) {
            return;
        }

        
        if (index === 0) {
            prepend(value);
            return;
        }

        if (index === length - 1) {
            append(value);
            return;
        }

        length++;
        const newNode = node(value);
        let priorNode = at(index - 1);
        let currentNode = at(index);

        newNode.next = currentNode;
        priorNode.next = newNode;

        return;
    }

    function removeAt(index) {
        if (!head.value || index >= length) {
            return;
        }

        length--;
        if (index === 0) {
            head = head.next;
            return;
        }

        if (index === length - 1) {
            pop();
            return;
        }

        let priorNode = at(index - 1);
        let currentNode = at(index);

        priorNode.next = currentNode.next;
        return;
    }

    return { append, prepend, size, getHead, getTail, at, pop, contains, find, toString, insertAt, removeAt }
}