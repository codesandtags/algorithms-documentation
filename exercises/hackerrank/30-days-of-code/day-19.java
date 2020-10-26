//Write your code here
class Calculator implements AdvancedArithmetic {
    
    public int divisorSum(int n) {
        int sum = 0;
        int num = n;
        
        while(n > 0){
            if(num % n == 0){
                sum += n;
            }        
            n--;
        }
        
        return sum;
    }
}