//Problem 1:

// Define the ListNode class for creating nodes
class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

// Function to merge two sorted linked lists
function mergeTwoLists(l1, l2) {
  // Create a dummy node to serve as the head of the merged list
  let dummy = new ListNode();
  let current = dummy;

  // Traverse both lists and compare nodes
  while (l1 !== null && l2 !== null) {
    if (l1.val <= l2.val) {
      current.next = l1;
      l1 = l1.next;
    } else {
      current.next = l2;
      l2 = l2.next;
    }
    current = current.next;
  }

  // Attach remaining nodes of l1 or l2 (one of them will be null at this point)
  current.next = l1 !== null ? l1 : l2;

  // Return the merged list (dummy.next is the actual head)
  return dummy.next;
}

// Example usage:
let list1 = new ListNode(1);
list1.next = new ListNode(3);
list1.next.next = new ListNode(5);

let list2 = new ListNode(2);
list2.next = new ListNode(4);
list2.next.next = new ListNode(6);

// Merge lists
let mergedList = mergeTwoLists(list1, list2);

// Function to print the merged list (for testing)
function printList(head) {
  let result = [];
  let current = head;
  while (current !== null) {
    result.push(current.val);
    current = current.next;
  }
  console.log(result.join(" -> "));
}

// Print the merged list
printList(mergedList); // Output: 1 -> 2 -> 3 -> 4 -> 5 -> 6

//Problem 2:

// Function to delete the N-th node from the end of a linked list
function removeNthFromEnd(head, n) {
  // Create a dummy node to handle edge cases
  let dummy = new ListNode();
  dummy.next = head;

  // Initialize two pointers
  let first = dummy;
  let second = dummy;

  // Move the second pointer ahead by n+1 steps
  for (let i = 1; i <= n + 1; i++) {
    second = second.next;
  }

  // Move both pointers until the second pointer reaches the end
  while (second !== null) {
    first = first.next;
    second = second.next;
  }

  // Remove the N-th node from the end
  first.next = first.next.next;

  // Return the updated head (dummy.next is the actual head)
  return dummy.next;
}

// Example usage:
let list = new ListNode(1);
list.next = new ListNode(2);
list.next.next = new ListNode(3);
list.next.next.next = new ListNode(4);
list.next.next.next.next = new ListNode(5);

let n = 2;

// Delete N-th node from end
let updatedList = removeNthFromEnd(list, n);

// Print the updated list (for testing)
printList(updatedList); // Output: 1 -> 2 -> 3 -> 5
