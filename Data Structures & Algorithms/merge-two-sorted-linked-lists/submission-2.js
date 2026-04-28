/**
 * Definition for singly-linked list.
 * class ListNode {
 *     constructor(val = 0, next = null) { 
 *         this.val = val; //value stored in node.
 *         this.next = next; //reference for next node.
 *     }
 * }
 */

class Solution {
    /**
     * @param {ListNode} list1 //numbers of list 1
     * @param {ListNode} list2 //numbers of list 2 
     * @return {ListNode} //return merged list 
     */
    mergeTwoLists(list1, list2) {
        const dummy = {val: 0, next: null}; //Create dummy node as a placeholder to start.
        let node = dummy; //node is pointer to build merged list.

        while(list1 && list2){
            if(list1.val < list2.val){ //looping the lists since they have nodes.
            node.next = list1; //if list1 is smaller (prev line), then attach list1 to merged list.
            list1 = list1.next; //move list1 forward.

            }else{
                node.next = list2; //if list2 is smaller
                list2 = list2.next; //merge & move forward.
            }

            node = node.next; //move node pointer forward so it's pointing to the last node in the merged list.

        }
            if (list1){ 
                node.next = list1; //if any nodes remain, attach to merged list.
            }else {
                node.next = list2; //attach anything that remains here; only one will be non null. 
            }
            return dummy.next; //return merged list starting at placeholder (dummy)

    }
}