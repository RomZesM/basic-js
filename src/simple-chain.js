const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
   arr : [],

  getLength() {
    return this.arr.length;
  },


  addLink(value) {
    if(typeof value === 'undefined'){
      this.arr.push(' ')
    }
    else if (value === null){
        console.log("jj");
       this.arr.push(String(value));
    }
    else
      this.arr.push(value.toString());
      
   return this;
  },


  removeLink(position) {
   // console.log("pos", position);
    if(!Number.isInteger(position) || position > this.arr.length - 1 || position < 1){
      this.arr = [];
      throw Error('You can\'t remove incorrect link!')
    }
    else{
       this.arr.splice(position-1, 1)
       return this
    }
     
  },


  reverseChain() {
   this.arr = this.arr.reverse();
   return this
  },


  finishChain() {
    let str = '';
    this.arr.forEach((element, index)=>{
      let buf = `( ${element} )`
      if(index != 0){
        buf = `~~${buf}`
      }
      str = str.concat(buf);
    })
    this.arr = [];
    return str;
  }
};

module.exports = {
  chainMaker
};

// console.log(chainMaker.addLink('a').addLink('b').addLink('c').addLink().removeLink(1).finishChain()); ;
// console.log(chainMaker.arr);
// console.log(chainMaker.getLength());
// console.log(Number.isInteger(7));
// console.log(Number.isInteger(7.1));
//console.log(chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2));


// () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(0),
// () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink('2nd'),
// () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(-2),
// () => chainMaker.addLink(1).addLink(2).addLink(3).removeLink(4)

//console.log(chainMaker.addLink('GHI').addLink(null).reverseChain().addLink(333).reverseChain().reverseChain().addLink(0).reverseChain().reverseChain().addLink('GHI').finishChain())
//'( null )~~( GHI )~~( 333 )~~( 0 )~~( GHI )');

//console.log(chainMaker.reverseChain().reverseChain().reverseChain().addLink(NaN).reverseChain().addLink(null).addLink(1.233).addLink(true).addLink(false).removeLink(3).addLink(1.233).finishChain())


//'( NaN )~~( null )~~( true )~~( false )~~( 1.233 )')