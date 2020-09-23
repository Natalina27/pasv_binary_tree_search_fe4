let tree;

function setup(){
    tree = new Tree();
    console.log(tree);
    tree.addValue(8);
    tree.addValue(10);
    tree.addValue(5);

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
        this.left = n;
    }else if(n.value > this.value){
        this.right = n;
    }
}
