
function Node(val){
  this.value = val
  this.left = null
  this.right = null
}
function BTree(){
  this.root = null
  this.append = function(val){
    if(!this.root){
      return this.root = new Node(val)
    }
    this._appendHelper(val, this.root)
  }
  this._appendHelper = function(val, current){
    if(current.value>val){
      return !current.left ? current.left = new Node(val)
        :this._appendHelper(val, current.left)
    }
    return !current.right ? current.right = new Node(val)
        :this._appendHelper(val, current.right)
  }
}
// set up the tree
const binaryTree = new BTree()
binaryTree.append(5)    
binaryTree.append(3)   //     _ 5 _
binaryTree.append(4)   //  _3_     7_
binaryTree.append(7)   // 1   4      9
binaryTree.append(9) 
binaryTree.append(1) 


function inOrderTraversal(root, visited = new Set()) {
  const temp = root.left
  root.left = root.right
  root.right = temp
  
  visited.add(root.value)
  
  if(root.left) inOrderTraversal(root.left, visited)
  if(root.right) inOrderTraversal(root.right, visited)
  
  return visited
}
console.log("reverted tree:",inOrderTraversal(binaryTree.root))
