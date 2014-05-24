function compareToNeighbours(myArray, element) {  
    var isInRange = ((element > 0) && (element < myArray.length - 1)); // here is the funct for exercise 7
    var output;                                                        // we put in outer file to avoid code copy-paste -ing
    if (isInRange) {                                                   
        if ((myArray[element] > myArray[element - 1]) && (myArray[element] > myArray[element + 1])) {
            output = true;
        }
        else {
            output = false;
        }
    }
    else {
        output = false; // we modify this part so it just returns false, for compatiability
    }
    return output;
}