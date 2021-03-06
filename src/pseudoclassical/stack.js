//profiled:16692ms
var Stack = function(){
  // Use an object with numeric keys to store values
  // Implement the methods below
  this.length = 0;
  this.storage = {};
};

Stack.prototype.add = function(value){
  this.storage[this.length] = value;
  this.length+=1;

};
Stack.prototype.remove = function(){
  if (this.length===0) {
    throw new Error('cannot remove from empty stack');
  }
  var obj = this.storage[this.length-1];
  delete this.storage[this.length-1];
  this.length-=1;
  return obj;
};

Stack.prototype.size = function() {
  return this.length;
};
