function pairs(k, arr) {
    // By using 2 pointer technique https://www.geeksforgeeks.org/two-pointers-technique/
    //sort the array to follow the ascending order
    arr.sort(function(a, b) {
        return a - b;
    });
    
    var i=0,j=1,count=0, n=arr.length;
    
    while(j < n) {
        var diff = arr[j] - arr[i]; //find the diferernt. start from arr[1] - arr[0]
        
        if (diff == k) {
            count++;
            //try the next set of subtrahend and minuend
            j++;        
            i++;
        } else if (diff > k) {
            i++;    //the different is too big, use a bigger subtrahend
        } else if (diff < k) {
            j++;    //the differnt is too small, use a bigger minuend
        }
    }
    
    return count;
}
