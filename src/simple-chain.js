const chainMaker = {
  currChain: [],
  getLength() {
    return this.currChain.length
  },
  addLink(value) {
    this.currChain.push(`( ${value} )`)
    return this
  },
  removeLink(position) {
    if (this._checkIntNumber(position)) {
      if (position < 1 || position > this.getLength()){
        this._deleteChain()
        throw new Error ('Removing link position is out of range.')
      }
      const index = position - 1 
      this.currChain.splice(index, 1)
      return this
    }
    this._deleteChain()
    throw new Error ('Position must be integer number.')
  },
  reverseChain() {
    this.currChain.reverse()
    return this
  },
  finishChain() {
    const chain = this._getChain()
    this._deleteChain()
    return chain
  },

  _deleteChain() {
    this.currChain.length = 0
  },
  _checkIntNumber(num) {
    return typeof num === 'number' && (num ^ 0) === num
  }, 
  _getChain() {
    return this.currChain.join('~~')
  }
};

module.exports = chainMaker;
