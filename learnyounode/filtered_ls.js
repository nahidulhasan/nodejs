var fs = require('fs');
var path = require('path');

fs.readdir(process.argv[2], function(err,list){

	if(err){
		throw err;
	}else{
		list.forEach(function(filename) {
			
			if(path.extname(filename) == '.' + process.argv[3]){

				console.log(filename);
			}
		})	
	}
})