// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		var puzzleData = [
			 	{
					clue: "Shaking, for Sachwald",
					answer: "vibration",
					position: 0,
					orientation: "down",
					startx: 1,
					starty: 1
				},
                  {
					clue: "AKRF's ___ approach",
					answer: "integrated",
					position: 2,
					orientation: "across",
					startx: 1,
					starty: 2
		  },
                  				{
					clue: "F in FTA",
					answer: "federal",
					position: 1,
					orientation: "down",	
					startx: 4,
					starty: 1
				},

			 	{
					clue: "Allee King ____ & Fleming",
					answer: "rosen",
					position: 4,
					orientation: "across",
					startx: 1,
					starty: 4
				},
				{
					clue: "A in CMAQ",
					answer: "air",
					position: 8,
					orientation: "down",
					startx: 11,
					starty: 9
				},
				{
					clue: "R in CEQR or ULURP",
					answer: "review",
					position: 9,
					orientation: "down",
					startx: 9,
					starty: 9
				},
				{
					clue: "___ field Cleanup Programs, in HazMat",
					answer: "brown",
					position: 5,
					orientation: "across",
					startx: 7,
					starty: 4
				},
				{
					clue: "Naturally occurring fiber, usually abated in demolition ",
					answer: "asbestos",
					position: 3,
					orientation: "down",
					startx: 7,
					starty: 2
				},
				{
					clue: "Pb, for chemists",
					answer: "lead",
					position: 7,
					orientation: "down",
					startx: 13,
					starty: 8
				},
				{
					clue: "_____ General",
					answer: "sturgeon",
					position: 6,
					orientation: "across",
					startx: 7,
					starty: 6
				},
				
				{
					clue: "sub____ explorations, to Geotechs",
					answer: "surface",
					position: 10,
					orientation: "across",
					startx: 7,
					starty: 9
				}
			] 
	
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
