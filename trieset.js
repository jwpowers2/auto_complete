// trieset 
//console.log("trie set testing");
// https://gist.github.com/tpae/72e1c54471e88b689f85ad2b3940a8f0

function TrieNode(key){

  this.key = key;
  this.parent = null;
  this.children = {};
  this.end = false;

  this.getWord = function() {
    var output = [];
    var node = this;
  
    while (node !== null) {
      output.unshift(node.key);
      node = node.parent;
    }
  
    return output.join('');
  };

}

function TrieSet() {

  this.root = null;

  this.insert = function(word){

    if (!this.root){
    	this.root = new TrieNode();
    } 
    let current = this.root;

    for(let i=0;i<word.length;i++){

      if(!current.children[word[i]]){

          current.children[word[i]] = new TrieNode(word[i]);
          current.children[word[i]].parent = current;
      
      } 
      
      current = current.children[word[i]];
      
      
    }
    current.end = true;
  }

  this.find = function(word){

    if(!this.root){
      return false;
    }

    var node = this.root;
    var output = [];
  
    for(var i = 0; i < word.length; i++) {
    
      if (node.children[word[i]]) {
        node = node.children[word[i]];
      } else {
      
        return output;
      }
    }    

    this.findAllWords(node, output);
    return output;
   
  }

  this.findAllWords = function(node,arr){
  	if(node.end){
  		arr.unshift(node.getWord());
  	} 
  	for(let child in node.children){
  		if (child){
  		    this.findAllWords(node.children[child], arr);
  	    } else {
  	    	console.log("stuff");
  	    }
  	}
  }
  
  this.reset = function(){
  	this.root = null;
  }


}

var ts = new TrieSet();

ts.insert('stuff');
ts.insert('banana');
ts.insert('stu');
ts.insert('blowtoad');

console.log(ts.find('s'));

ts.reset();
console.log(ts.find('s'));


























