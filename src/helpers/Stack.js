class Stack {
  constructor(){
    console.log('Stack constructor');
    this.top = -1;
    this.dataStore = [];
  }
  push(element){
    this.top++;
    this.dataStore[this.top] = element;
  }
  pop(){
    if(this.top>-1){
      let val = this.dataStore[this.top];
      this.top--;
      return val;
    }
    return null;
  }
  peek(){
    return this.dataStore[this.top];
  }
  get length(){
    return this.top+1;
  }
  clear(){
    this.top = 0;
    this.dataStore = [];
  }
}

export default Stack;
