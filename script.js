let tree;

function setup(){
    tree = new Tree();
    console.log(tree);
    tree.addValue(8);
    tree.addValue(10);
    tree.addValue(3);

}

//******************************************

function Tree(){
    this.root = null;
}

Tree.prototype.addValue  = function (value){
    let n = new Node(value);
    if (this.root === null){
        this.root = n;
    }else{
        this.root.addNode(n);
    }
}

//******************************************

function Node (value){
    this.value = value;
    this.left = null;
    this.right = null;
}

Node.prototype.addNode = function (n){
    if(n.value < this.value){
        if(this.left === null){
            this.left = n;
        } else {
            this.left.addNode(n); //recursive invoke for left
        }

    }else if(n.value > this.value){
        if(this.right === null){
            this.right = n;
        } else {
            this.right.addNode(n); //recursive invoke for right
        }
    }
}
