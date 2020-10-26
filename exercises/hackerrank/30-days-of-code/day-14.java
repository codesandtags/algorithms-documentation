import java.io.*;
import java.util.*;
import java.text.*;
import java.math.*;
import java.util.regex.*;

class Difference {
  	private int[] elements;
  	public int maximumDifference;

    // Add your code here
    Difference(int[] elements) {
        this.elements = elements;
    }

    public void computeDifference(){
        // Sort the array in order to get the smallest and largest number
        Arrays.sort(this.elements);
        int difference = Math.abs(this.elements[0] - this.elements[this.elements.length -1]);
        this.maximumDifference = difference;
    }

} // End of Difference class