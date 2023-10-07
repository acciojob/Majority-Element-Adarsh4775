//your code here
function majorityElement(nums){
	let majorityElementt = nums[0];
	let count = 1;
	for(let i=1; i<nums.length; i++)
		{
			if(nums[i] === majorityElementt)
			{
				count++;
			}
			else
			{
				count--;
			}
			if(count === 0)
			{
				majorityElementt = nums[i];
				count = 1;
			}
		
}
return majorityElementt;
}