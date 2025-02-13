package COM.PACK1;
import java.util.Scanner;

public class ClassX 
{
   public static void main(String[] args) 
   {
	Scanner sc=new Scanner(System.in);
	int a=sc.nextInt();
	if(a%2==0)
		System.out.println(a+"is a even number.");
	else
		System.out.println(a+"is a odd number");
	sc.close();
   }
}
