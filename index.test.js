const List = require("./index.js");

describe("length()", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  it("must return 0 for an empty list", () => {
    expect(list.length()).toEqual(0);
  });

  it("must return the number of elements in the list", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    expect(list.length()).toEqual(3);
  });

  it("must return 1 for a list with only one element", () => {
    list.append("a");
    expect(list.length()).toEqual(1);
  });
});

describe("append()", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  it("must append a new node to an empty list", () => {
    list.append("a");
    expect(list.get(0)).toBe("a");
    expect(list.length()).toBe(1);
  });

  it("must append a new node to a non-empty list", () => {
    list.append("a");
    list.append("b");
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.length()).toBe(2);
  });

  it("must not append a new node to an empty list with incorrect data type", () => {
    const attempt1 = () => list.append(1);
    const attempt2 = () => list.append([2, 3, 5]);
    const attempt3 = () => list.append("666");
    const attempt4 = () => list.append(false);
    const attempt5 = () => list.append(undefined);
    const attempt6 = () => list.append(null);
    const attempt7 = () => list.append(true);
    const attempt8 = () => list.append({ a: 1 });

    expect(attempt1).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt2).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt3).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt4).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt5).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt6).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt7).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt8).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(list.length()).toBe(0);
  });
});

describe("insert()", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  it("must insert at the beginning of an empty list", () => {
    list.insert("a", 0);

    expect(list.get(0)).toBe("a");
    expect(list.length()).toBe(1);
  });

  it("must insert at the beginning of a non-empty list", () => {
    list.append("a");
    list.insert("b", 0);

    expect(list.get(0)).toBe("b");
    expect(list.get(1)).toBe("a");
    expect(list.length()).toBe(2);
  });

  it("must insert at the end of a non-empty list", () => {
    list.append("a");
    list.insert("b", 1);

    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.length()).toBe(2);
  });

  it("must insert in the middle of a non-empty list", () => {
    list.append("a");
    list.append("c");
    list.insert("b", 1);

    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
    expect(list.length()).toBe(3);
  });

  it("must not insert at a negative index", () => {
    const attempt1 = () => list.insert("b", -1);
    expect(attempt1).toThrow("Error. Incorrect index.");
  });

  it("must not insert at an index greater than the length of the list", () => {
    const attempt1 = () => list.insert("a", 10);
    expect(attempt1).toThrow("Error. Incorrect index.");
  });

  it("must insert in the middle of a filled with append() list", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("d");
    list.append("e");
    list.insert("f", 3);

    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
    expect(list.get(3)).toBe("f");
    expect(list.get(4)).toBe("d");
    expect(list.get(5)).toBe("e");
    expect(list.length()).toBe(6);
  });

  it("must not insert an invalid data type to the begining of the list", () => {
    const attempt1 = () => list.insert(1, 0);
    const attempt2 = () => list.insert("32", 0);
    const attempt3 = () => list.insert(true, 0);
    const attempt4 = () => list.insert(undefined, 0);
    const attempt5 = () => list.insert(null, 0);
    const attempt6 = () => list.insert({ a: 1 }, 0);

    expect(list.length()).toBe(0);

    expect(attempt1).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt2).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt3).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt4).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt5).toThrow(
      "Error. Wrong input data type, expected type char."
    );
    expect(attempt6).toThrow(
      "Error. Wrong input data type, expected type char."
    );
  });
});

describe("delete())", () => {
  let list;

  beforeEach(() => {
    list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
  });

  test("must remove the item at the specified index", () => {
    const deleted = list.delete(1);

    expect(deleted).toBe("b");
    expect(list.length()).toBe(2);
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("c");
  });

  test("must remove the first item", () => {
    const deleted = list.delete(0);

    expect(deleted).toBe("a");
    expect(list.length()).toBe(2);
    expect(list.get(0)).toBe("b");
    expect(list.get(1)).toBe("c");
  });

  test("must remove the last item", () => {
    const deleted = list.delete(2);

    expect(deleted).toBe("c");
    expect(list.length()).toBe(2);
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
  });

  test("must return error if index is out of range", () => {
    const attempt1 = () => list.delete(3);
    expect(list.length()).toBe(3);
    expect(attempt1).toThrow("Error. Index out of range.");
  });

  test("must return an empty list", () => {
    list.delete(2);
    list.delete(1);
    list.delete(0);

    expect(list.length()).toBe(0);
  });
});

describe("deleteAll", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  it("must remove all nodes with matching data", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");
    list.append("d");
    list.append("a");
    list.deleteAll("a");

    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe("b");
    expect(list.get(1)).toBe("c");
    expect(list.get(2)).toBe("d");
  });

  it("must remove all nodes with matching data, even if it is the only node", () => {
    list.append("a");
    list.deleteAll("a");
    const attempt1 = () => list.get(0);

    expect(list.length()).toBe(0);
    expect(attempt1).toThrow("Error. Index out of range.");
  });

  it("must do nothing if no nodes have matching data", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.deleteAll("d");

    expect(list.length()).toBe(3);
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });

  it("must do nothing if the list is empty", () => {
    list.deleteAll("a");
    const attempt1 = () => list.get(0);

    expect(list.length()).toBe(0);
    expect(attempt1).toThrow("Error. Index out of range.");
  });
});

describe("get()", () => {
  let list;

  beforeEach(() => {
    list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
  });

  it("must throw an Error if the index is less than zero", () => {
    const attempt1 = () => list.get(-1);
    expect(attempt1).toThrow("Error. Index out of range.");
  });

  it("must throw an Error if the index is greater than or equal to the length of the list", () => {
    const attempt1 = () => list.get(3);
    expect(attempt1).toThrow("Error. Index out of range.");
  });

  it("must return the data at the specified index", () => {
    expect(list.get(0)).toBe("a");
    expect(list.get(1)).toBe("b");
    expect(list.get(2)).toBe("c");
  });
});

describe("clone()", () => {
  it("must return a new list with the same elements", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    const clonedList = list.clone();

    expect(clonedList.length()).toEqual(3);
    expect(clonedList.get(0)).toEqual("a");
    expect(clonedList.get(1)).toEqual("b");
    expect(clonedList.get(2)).toEqual("c");
  });

  it("must return an independent list", () => {
    const list = new List();
    list.append("a");
    list.append("b");
    list.append("c");
    const clonedList = list.clone();
    clonedList.delete(1);

    expect(clonedList.length()).toEqual(2);
    expect(list.length()).toEqual(3);
  });

  it("must return an empty list if original is empty", () => {
    const list = new List();
    const clonedList = list.clone();

    expect(clonedList.length()).toEqual(0);
  });
});

describe("reverse()", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  it("must return a reversed list", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("d");
    list.reverse();

    expect(list.get(0)).toEqual("d");
    expect(list.get(1)).toEqual("c");
    expect(list.get(2)).toEqual("b");
    expect(list.get(3)).toEqual("a");
  });

  it("must return the same list if it contains one item", () => {
    list.append("a");
    list.reverse();

    expect(list.get(0)).toEqual("a");
  });

  it("must return the same list if it contains nothing", () => {
    list.reverse();

    expect(list.length()).toEqual(0);
  });
});

describe("findFirst()", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  it("must return the index of the first occurrence of a data item", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("d");
    list.append("e");
    list.append("a");

    expect(list.findFirst("a")).toEqual(0);
    expect(list.findFirst("b")).toEqual(1);
    expect(list.findFirst("c")).toEqual(2);
    expect(list.findFirst("d")).toEqual(3);
    expect(list.findFirst("e")).toEqual(4);
  });

  it("must return -1 if the data item is not found", () => {
    list.append("a");
    list.append("b");
    list.append("c");

    expect(list.findFirst("d")).toEqual(-1);
    expect(list.findFirst("e")).toEqual(-1);
    expect(list.findFirst("f")).toEqual(-1);
  });
});

describe("findLast()", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  it("must return the index of the last occurrence of the element", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    list.append("a");
    const index = list.findLast("a");

    expect(index).toBe(3);
  });

  it("must return the index of the last occurrence of the element in a list with only one element", () => {
    list.append("a");
    const index = list.findLast("a");

    expect(index).toBe(0);
  });

  it("must return the index of the last occurrence of the element in a list with multiple occurrences", () => {
    list.append("a");
    list.append("a");
    const index = list.findLast("a");

    expect(index).toBe(1);
  });

  it("must return -1 if the element is not found", () => {
    list.append("a");
    list.append("b");
    list.append("c");
    const index = list.findLast("d");

    expect(index).toBe(-1);
  });

  it("must return -1 for an empty list", () => {
    const index = list.findLast("a");

    expect(index).toBe(-1);
  });
});

describe("clear()", () => {
  let list;

  beforeEach(() => {
    list = new List();
  });

  it("must remove all elements from the list and reset the length to zero", () => {
    list.append("a");
    list.append("b");
    list.append("c");

    expect(list.length()).toBe(3);

    list.clear();

    expect(list.length()).toBe(0);
    const attempt1 = () => list.get(0);
    expect(attempt1).toThrow("Error. Index out of range.");
  });

  it("must work correctly even if the list is already empty", () => {
    expect(list.length()).toBe(0);

    list.clear();

    expect(list.length()).toBe(0);
  });
});

describe("extend()", () => {
  it("must add all elements from the given list to the end of the current list", () => {
    const list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");

    const list2 = new List();
    list2.append("d");
    list2.append("e");
    list2.append("f");

    list1.extend(list2);

    expect(list1.length()).toEqual(6);
    expect(list1.get(0)).toEqual("a");
    expect(list1.get(1)).toEqual("b");
    expect(list1.get(2)).toEqual("c");
    expect(list1.get(3)).toEqual("d");
    expect(list1.get(4)).toEqual("e");
    expect(list1.get(5)).toEqual("f");
  });

  it("must do nothing if the given list is empty", () => {
    const list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");

    const list2 = new List();

    list1.extend(list2);

    expect(list1.length()).toEqual(3);
    expect(list1.get(0)).toEqual("a");
    expect(list1.get(1)).toEqual("b");
    expect(list1.get(2)).toEqual("c");
  });

  it("must not modify the given list", () => {
    const list1 = new List();
    list1.append("a");
    list1.append("b");
    list1.append("c");

    const list2 = new List();
    list2.append("d");
    list2.append("e");
    list2.append("f");

    list1.extend(list2);

    expect(list2.length()).toEqual(3);
    expect(list2.get(0)).toEqual("d");
    expect(list2.get(1)).toEqual("e");
    expect(list2.get(2)).toEqual("f");
  });
});
