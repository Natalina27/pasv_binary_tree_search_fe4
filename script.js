let tree;
let num = 13;
const treeNums = [8, 10, 3, 1, 6, 14, 4, 7, 13]

function setup() {
  tree = new Tree();

  for (let i of treeNums) {
    tree.addValue(i);
  }

  tree.traverse(); // обход дерева

  let result = tree.search(num); //поиск в бинарном дереве
  console.log(result ? result : ' Not found');

  console.log(tree);

}

//******************************************

function Tree() {
  this.root = null;
}

Tree.prototype.addValue = function (value) {
  let n = new Node(value);
  if (this.root === null) {
    this.root = n;
  } else {
    this.root.addNode(n);
  }
}

Tree.prototype.traverse = function () {
  this.root.visit();
}

Tree.prototype.search = function (value) {
  return this.root.search(value);
}

//******************************************

function Node(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

Node.prototype.addNode = function (n) {
  if (n.value < this.value) {
    if (this.left === null) {
      this.left = n;
    } else {
      this.left.addNode(n); //recursive invoke for left
    }

  } else if (n.value > this.value) {
    if (this.right === null) {
      this.right = n;
    } else {
      this.right.addNode(n); //recursive invoke for right
    }
  }
}

// Прямой обход (NLR)
Node.prototype.visit = function () {
  if (this.left !== null) {
    this.left.visit(); //recursive invoke for left
  }

  console.log(this.value);

  if (this.right !== null) {
    this.right.visit(); //recursive invoke for right
  }
}

//Обратный обход (LRN)
Node.prototype.visit = function () {

  if (this.right !== null) {
    this.right.visit(); //recursive invoke for right
  }

  console.log(this.value);

  if (this.left !== null) {
    this.left.visit(); //recursive invoke for left
  }
}

//Поиск
Node.prototype.search = function (val) {
  if (this.value === Number(val)) {
    console.log('Found', val);
    return this;
  } else if (val < this.value && this.left) {
    return this.left.search(val);
  } else if (val > this.value && this.right) {
    return this.right.search(val);
  }
  return null;
}
