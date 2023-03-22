//22-2-2023 js review//
//1.total  odd and even digit of whole number//
let getvalue=parseInt(prompt("enter the value:"));
var b=0;
var k=0;

  while(getvalue>0)
  {
	   e =getvalue%10;
	   getvalue=(getvalue-e)/10;
	   if(e%2==0)
	   {
		   b+=e;
	   }
	   else 
	   {
		   k+=e;
	   }
	   
  }
	  console.log("The total of odd number:"+b);
	  console.log( "The total of even number" +k);
//2.armstrong number//
var arm=parseInt(prompt("enter the number:"));
		  var ansarm=arm;
		 var lastans=0;
		        while(arm>0)
				{
				   var ans=arm%10;
				   arm=arm/10;
				    var lastans=ans*ans*ans;
					
			   }
				  if(lastans==ansarm)
				  {
					   console.log("It's amstrong");
				  }
				  else 
				  {
					   console.log("not amstrong");
				  }
//3.prime number//
var prime=parseInt(prompt("enter the number:"));
			      var count=0;
		         
			      if(prime==1)
			        {
				   
					 count=1;
			          }
			   else if (prime > 1) 
			   {

                      for (let i = 2; i <=prime; i++)
						  
			              {
							  if (prime % i == 0) 
							  {
							
								    count++;
								 
								 }
						   else 
						   {
							    
						   }
			            }

			   }    
			    if(count>1)
				{
					 console.log("It's NOT prime");
				}
				else
				{
					  console.log("It's prime");
				}