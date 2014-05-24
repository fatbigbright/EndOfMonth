test("2014-05-05 ~ 2014-05-31", function(){
	var input = new Date(2014, 5 - 1, 5);
	var expect = new Date(2014, 5 - 1, 31).getTime();
	ok( expect == EndOfMonth(input).getTime(), "Not Passed!"); 
});

test("2000-02-05 ~ 2014-02-29", function(){
	var input = new Date(2000, 2 - 1, 5);
	var expect = new Date(2000, 2 - 1, 29).getTime();
	ok( expect == EndOfMonth(input).getTime(), "Not Passed!"); 
});

test("1996-02-05 ~ 1996-02-29", function(){
	var input = new Date(1996, 2 - 1, 5);
	var expect = new Date(1996, 2 - 1, 29).getTime();
	ok( expect == EndOfMonth(input).getTime(), "Not Passed!"); 
});

test("1997-02-05 ~ 1997-02-28", function(){
	var input = new Date(1997, 2 - 1, 5);
	var expect = new Date(1997, 2 - 1, 28).getTime();
	ok( expect == EndOfMonth(input).getTime(), "Not Passed!"); 
});

test("2014-04-01 ~ 2014-04-30", function(){
	var input = new Date(2014, 4 - 1, 1);
	var expect = new Date(2014, 4 - 1, 30).getTime();
	ok( expect == EndOfMonth(input).getTime(), "Not Passed!"); 
});

test("Exception Test", function(){
	var input = 'foo';
	throws(function(){
		EndOfMonth(input);
	}, "Input data type error.");
});
