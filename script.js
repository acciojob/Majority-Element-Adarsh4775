//your code here
function majorityElement(nums){
	let majorityElement = nums[0];
	let count = 1;
	for(let i=1; i<nums.length; i++)
		{
			if(nums[i] === majorityElement)
			{
				count++;
			}
			else
			{
				count--;
			
			if(count === 0)
			{
				majorityElement = nums[i];
				count = 1;
			}
		}
}
return majorityElement;
}