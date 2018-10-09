class BidirectionalMap extends Map {
  getKey(value) {
    return Array.from(this.keys()).find(key => this.get(key) === value)
  }
}
export default BidirectionalMap
