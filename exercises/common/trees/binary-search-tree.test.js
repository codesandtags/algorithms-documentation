const { BinarySearchTree } = require('./binary-search-tree');

describe('Binary Search Tree', () => {

  test('should insert a node', () => {
    const bst = new BinarySearchTree();
    
    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);


    // The output should be:
    //
    //          9
    //        /   \
    //       4     20
    //      / \    / \
    //     1   6  15  170
    //

    expect(bst.root.value).toBe(9);
    expect(bst.root.left.value).toBe(4);
    expect(bst.root.left.right.value).toBe(6);
    expect(bst.root.right.value).toBe(20);
    expect(bst.root.right.left.value).toBe(15);
    expect(bst.root.right.right.value).toBe(170);
    expect(bst.root.left.left.value).toBe(1);
  });


  test('should lookup a node', () => {
    const bts = new BinarySearchTree();
    bts.insert(9);
    bts.insert(4);
    bts.insert(6);
    bts.insert(20);
    bts.insert(170);
    bts.insert(15);
    bts.insert(1);

    expect(bts.lookup(1)).toBe(true);
    expect(bts.lookup(170)).toBe(true);
  });

  test('should remove a node', () => {
    const bts = new BinarySearchTree();
    bts.insert(9);
    bts.insert(4);
    bts.insert(6);
    bts.insert(20);

    // The output should be:
    //
    //          9
    //        /   \
    //       6     20
    //      /
    //     4

    expect(bts.root.value).toBe(9);
    expect(bts.root.left.value).toBe(4);
    expect(bts.root.left.right.value).toBe(6);
    expect(bts.root.right.value).toBe(20);

    bts.remove(4);

    expect(bts.root.value).toBe(9);
    expect(bts.root.left.value).toBe(6);
    expect(bts.root.right.value).toBe(20);
    
  });

  test('should return a JSON representation of the tree', () => {
    const bst = new BinarySearchTree();
    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);

    // The output should be:
    //
    //          9
    //        /   \
    //       6     20
    //      / \
    //     5   null

    expect(bst.toJSON()).toEqual({
      "value": 9,
      "left": {
        "left": null,
        "right": {
          "left": null,
          "right": null,
          "value": 6,
        },
        "value": 4,
      },
      "right": {
        "left": null,
        "right": null,
        "value": 20,
      }
    });
  });

  test('should return a list of the breadthFirstSearch', () => {
    const bst = new BinarySearchTree();
    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);
      
    // The output should be:
    //
    //          9
    //        /   \
    //       4     20
    //      / \    / \
    //     1   6  15  170

    expect(bst.breadthFirstSearch()).toEqual([9, 4, 20, 1, 6, 15, 170]);
  });

  test('should return a list of the depthFirstSearchInOrder', () => {
    const bst = new BinarySearchTree();
    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);

    // The output should be:
    //
    //          9
    //        /   \
    //       4     20
    //      / \    / \
    //     1   6  15  170

    expect(bst.depthFirstSearchInOrder()).toEqual([1, 4, 6, 9, 15, 20, 170]);
  });

  test('should return a list of the depthFirstSearchPreOrder', () => {
    const bst = new BinarySearchTree();
    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);

    // The output should be:
    //
    //          9
    //        /   \
    //       4     20
    //      / \    / \
    //     1   6  15  170

    expect(bst.depthFirstSearchPreOrder()).toEqual([9, 4, 1, 6, 20, 15, 170]);
  });

  test('should return a list of the depthFirstSearchPostOrder', () => {
    const bst = new BinarySearchTree();
    bst.insert(9);
    bst.insert(4);
    bst.insert(6);
    bst.insert(20);
    bst.insert(170);
    bst.insert(15);
    bst.insert(1);

    // The output should be:
    //
    //          9
    //        /   \
    //       4     20
    //      / \    / \
    //     1   6  15  170

    expect(bst.depthFirstSearchPostOrder()).toEqual([1, 6, 4, 15, 170, 20, 9]);
  });

});