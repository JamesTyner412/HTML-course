playerData ={
	info:{
		src:`images/wizard.png`
	},
	states:{
    	idle:
		{
			fps:15,
			cycle:true,
			frames:[
					{width:140, height:128, startX:1, startY:131},
					{width:140, height:128, startX:143, startY:131},
					{width:140, height:128, startX:1, startY:261},
					{width:140, height:128, startX:143, startY:261},
				
			]
		},
		walk:
		{
			fps:15,
			cycle:true,
			frames:[
					{width:140, height:128, startX:285, startY:131},
					{width:140, height:128, startX:285, startY:261}
				]
		},
		jump:
		{
			fps:15,
			cycle:false,
			frames:[
					{width:140, height:128, startX:285, startY:1}
				]
		},
		crouch:
		{
			fps:15,
			cycle:false,
			frames:[
					{width:140, height:128, startX:143, startY:1}
					
				]
		},
		attack:
		{
			fps:15,
			cycle:false,
			frames:[
					{width:140, height:128, startX:1, startY:1},
					
					
				]
		},
	}
		
}