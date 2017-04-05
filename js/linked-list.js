/**
 * Created by ABennett on 4/3/17.
 */
function LinkedList() {
    var head = null;
    this.length = 0;
    this.insert = insert;
    this.remove = remove;
    this.find = find;

    /*var person = {
        name: "Bryce",
        id: 11899986119
    }*/

    function insert(data) {//data = our linked list
        var newNode = new Node(data);//here we constructed a new node;insert the data into the linked list in alphabetical order
        if(head != null) { //here we start an algorithm to find out if there is anything in the head

            var node = head;
            prev = null;

            while (node && node.data.name.toLowerCase() < myNode.data.name.toLowerCase()) {// is lower
            prev.next = node;
            node = node.next;
            }

            if(node == null){
                prev.next = myNode;
                this.length++;
                return;
            }
            if(node.data.name.toLowerCase() == myNode.data.name.toLowerCase()){return;}
            if (!prev) {//if prev is not true
                myNode.next = node;//set the new node to the top of the list
                head = myNode;//we need to make sure the var myNode = head
                this.length++;//increment the list
            }
            else {
                prev.next = myNode;//if prev.next is null
                myNode.next = node;
                this.length++;
            }
        }
        else {
            head = myNode;
            this.length++;
            return;
        }
    }
    function remove(id) {
        var node = head;//take out the item that is to be replaced

    }
    function find(name) {
    var node = head;

    while(node != null && node.data.name != name) {//if the list is not empty and the name is not the one we're looking for
        node = node.next;//go to the next in the lis

    }

    return node? node.data : null;//if it's not null, return the data; 'node?' acts like a conditional

    }

    function Node(data) {
        this.data = data;
        this.next = null;//use null to tell us if we are at the end of the list

    }
}
//to test this print out the linked list in alphabetical order(Double)
// our linked list: angela, brian, david, paul, sam, zak
//we are trying to insert: adrian, bryce, mario