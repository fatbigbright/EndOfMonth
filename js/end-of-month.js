function EndOfMonth(currentDate){
	//if (!(currentDate instanceof Date))
	if(currentDate.constructor != Date)
		throw('Input data type error.');

	var month = currentDate.getMonth() + 1;

	var result = new Date(currentDate.getFullYear(), 
												currentDate.getMonth(),
												currentDate.getDate());

	switch(month){
		case 1:
		case 3:
		case 5:
		case 7:
		case 8:
		case 10:
		case 12:
			result.setDate(31);
			break;
		case 4:
		case 6:
		case 9:
		case 11:
			result.setDate(30);
			break;

		case 2:
			var currentYear = currentDate.getFullYear();
			var resultDate = ( currentYear % 4 == 0 && currentYear % 100 != 0 ) || 
											 currentYear % 400 == 0 ? 29 : 28;
			result.setDate(resultDate);
			break;
	}

	return result;
}
