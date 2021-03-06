//16291ms

var makeStack = function(){
  // Use an object with numeric keys to store values
  // Implement the methods below
  var stack = {};
  stack.length = 0;
  stack.storage = {};
  _.extend(stack, stackMethods);
  return stack;
};

var stackMethods = {};
stackMethods.add = function(value){
  this.storage[this.length] = value;
  this.length+=1;

};
stackMethods.remove = function(){
  if (this.length===0) {
    throw new Error('cannot remove from empty stack');
  }
  var obj = this.storage[this.length-1];
  delete this.storage[this.length-1];
  this.length-=1;
  return obj;
};

stackMethods.size = function() {
  return this.length;
};
