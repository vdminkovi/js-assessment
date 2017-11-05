recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {	  
	var Number = [];
	var fistVal = data[Object.keys(data)[1]];

	Number.push(fistVal[0]);
	
	obj = data.subDirs
	  
	  for(var key in obj){
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			var val = obj[key];
			var secVal = val[Object.keys(val)[1]];
			for (var j in secVal){
				Number.push(secVal[j]);
			}
		}
	  }
	for(var key in obj){
		if (Object.prototype.hasOwnProperty.call(obj, key)) {
			var val = obj[key];
			var thirdVal = val[Object.keys(val)[2]];
				var thirdVal1 = thirdVal[0].files;
				for (var k in thirdVal1){
					Number.push(thirdVal1[k]);
				}
				return Number;
		}
		break;
	}
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {	  
	  if (n === 0){
		return 0;
	  }
	  else if (n === 1) {
		return 1;
	  }
	  else {
		return fibonacci(n-1) + fibonacci(n-2);
	  }	
  },
};
