const Node = (value = null, nextNode = null) => {
    return {
        value: value,
        nextNode: nextNode
    }
}

const LinkedList = () => {
    return {
        HEAD: null,
        length: 0,
        self: this,
        append(value) {
            this.length++
            if (!this.HEAD) {
                this.HEAD = Node(value)
            } else {
                let tail = this.HEAD
                while (tail.nextNode !== null) {
                    tail = tail.nextNode
                }
                tail.nextNode = Node(value)
            }
        },
        prepend(value) {
            this.length++
            if (!this.HEAD) {
                this.HEAD = Node(value)
            } else {
                this.HEAD = Node(value, this.HEAD)
            }
        },
        size() {
            return this.length
        },
        head() {
            if(this.HEAD) return this.HEAD
        },
        tail() {
            if (!this.HEAD) return null
            let tail = this.HEAD
            while (tail.nextNode !== null) {
                tail = tail.nextNode
            }
            return tail    
        },
        at(index) {
            if (!this.HEAD) return null
            let tail = this.HEAD
            let temp = 0
            while (temp<this.length) {
                if (index === temp) {
                    var chosenIndex = tail
                }
                tail = tail.nextNode
                temp++
            }
            return chosenIndex
        },
        pop() {
            if (!this.HEAD) return null
            else if (this.HEAD.nextNode === null) this.HEAD = null
            else {this.at(this.length - 2).nextNode = null}
            this.length--
        },
        contains(value) {
            if (!this.HEAD) return null
            let tail = this.HEAD
            let temp = 0
            let times = 0
            while (temp<this.length) {
                if (tail.value === value) {
                     times += 1
                }
                tail = tail.nextNode
                temp++
            }
            return times > 0 ? true : false
        },
        find(value) {
            if (!this.HEAD) return null
            let tail = this.HEAD
            let temp = 0
            let arr = []
            while (temp<this.length) {
                if (tail.value === value) {
                     arr.push(temp)
                }
                tail = tail.nextNode
                temp++
            }
            return arr.toString()
        },
        toString() {
            if (!this.HEAD) return null
            let tail = this.HEAD
            let preview = `( ${this.HEAD.value} ) -> `
            while (tail.nextNode !== null) {
                tail = tail.nextNode
                preview += `( ${tail.value} ) -> `
            }
            preview += `null`
            return preview  
        },
        insertAt(value, index) {
            if (this.at(index) === null || this.at(index) === undefined) return null
            this.at(index).nextNode = Node(value, this.at(index).nextNode)
            this.length++
        },
        removeAt(index) {
            if (this.at(index) === null || this.at(index) === undefined) return null
            if (index === 0) this.HEAD = this.HEAD.nextNode
            else this.at(index-1).nextNode = this.at(index).nextNode
            this.length--
        }
    }
}

const list = LinkedList()

list.append(2);
list.prepend(1);
list.prepend(0);
list.append(3);
list.append(4);
list.append(5);
console.log(list.toString());
list.size();
list.head();
list.tail();
list.at(1);
list.pop();
console.log(list.toString());
list.size();
list.contains(4);
list.find(4);
list.toString();
list.insertAt('insert', 3);
console.log(list.toString());
list.toString();
list.removeAt(4);
console.log(list.toString());

