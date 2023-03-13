class List {
  #list = [];

  length() {
    return this.#list.length;
  }

  append(data) {
    const isString = typeof data;

    if (data && isString && data.length === 1) {
      this.#list.push(data);
    } 
  }

  insert(data, index) {
    const isString = typeof data;

    if (data && isString && data.length === 1) {
      if (index < 0 || index > this.#list.length) {
        throw new Error("Error. Incorrect index.");
      }
      this.#list.splice(index, 0, data);
    } else {
      throw new Error("Error. Wrong input data type, expected type char.");
    }
  }

  delete(index) {
    if (index < 0 || index >= this.#list.length) {
      throw new Error("Error. Index out of range.");
    }
    return this.#list.splice(index, 1)[0];
  }

  deleteAll(data) {
    const filteredList = this.#list.filter((element) => element !== data);
    this.#list = filteredList;
  }

  get(index) {
    if (index < 0 || index >= this.#list.length) {
      throw new Error("Error. Index out of range.");
    }
    return this.#list[index];
  }

  clone() {
    const newList = new List();
    let i = 0;
    while (i < this.#list.length) {
      newList.append(this.#list[i]);
      i++;
    }
    return newList;
  }

  reverse() {
    this.#list.reverse();
  }

  findFirst(data) {
    for (let i = 0; i < this.#list.length; i++) {
      if (this.#list[i] === data) return i;
    }
    return -1;
  }

  findLast(data) {
    for (let i = this.#list.length - 1; i >= 0; i--) {
      if (this.#list[i] === data) return i;
    }
    return -1;
  }

  clear() {
    this.#list = [];
  }

  extend(list) {
    for (let i = 0; i < list.length(); i++) {
      this.#list.push(list.get(i));
    }
    return this.#list;
  }
}

module.exports = List;
