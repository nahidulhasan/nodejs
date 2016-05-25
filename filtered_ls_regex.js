var fs = require('fs');
var ext = process.argv[3];
var pat = RegExp('\.'+ext+'$')

fs.readdir(process.argv[2], function(err,list){

	if(err){
		throw err;
	}else{
		
		for(var i = 0; i < list.length; i++){

			if(pat.test(list[i])){

				console.log(list[i]);
			}
		}
	}
})