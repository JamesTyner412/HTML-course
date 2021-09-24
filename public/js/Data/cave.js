var x = false;
var caveData = {
	info: {
		layout: [
			[8, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 7],
			[0, x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
			[0, x, 5, 5, 5, 4, 5, 6, 6, 5, 5, 4, 5, 4, 4, 5, 4, 5, 4, 5, 4, 5, 5, 5, 4, 5, 6, 5, 4, 4, 4, 6, 5, 4, 0],
			[0, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, 0],
			[0, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, 0],
			[0, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, 0],
			[0, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, x, 0],
			[0, x, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]

		],
		src: `images/spreadsheet.png`,
	},
	states:
		[
			{
				fps: 1,
				cycle: false,
				frames: [
					{ width: 32, height: 36, startX: 0, startY: 0 },
					
				]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 32, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 64, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 96, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 128, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 160, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 192, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 224, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 256, startY: 0 }]
			}
			
		]
}
var caveBackData = {
	info: {
		layout: [
			[8, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, x],
			[0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4],
			[0,	0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
			[0,	2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
			[0,	3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
			[0,	3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
			[0,	3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4],
			[0, 0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4]
		],
		src: `images/spreadsheet.png`,
	},
	states:
		[
			{
				fps: 1,
				cycle: false,
				frames: [
					{ width: 32, height: 36, startX: 0, startY: 0 },
					
				]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 32, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 64, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 96, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 128, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 160, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 192, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 224, startY: 0 }]
			},
			{
				fps: 1,
				cycle: false,
				frames: [{ width: 32, height: 36, startX: 256, startY: 0 }]
			}
		]
}

