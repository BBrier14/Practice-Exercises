const getDay = function(dayNum) {
	switch (dayNum) {
		case 1:
			return 'Monday';
		case 2:
			return 'Tuesday';
		case 3:
			return 'Wednesday';
		case 4:
			return 'Thursday';
		case 5:
			return 'Friday';
		case 6:
			return 'Saturday';
		case 7:
			return 'Sunday';
		default:
			return undefined;
	}
};

const getDayIf = function(dayNum) {
	if (dayNum === 1) {
		return 'Monday';
	} else if (dayNum === 2) {
		return 'Tuesday';
	} else if (dayNum === 3) {
		return 'Wednesday';
	} else if (dayNum === 4) {
		return 'Thursday';
	} else if (dayNum === 5) {
		return 'Friday';
	} else if (dayNum === 6) {
		return 'Saturday';
	} else if (dayNum === 7) {
		return 'Sunday';
	}
};

console.log(getDay(1));
console.log(getDay(5));
console.log(getDay(0));

console.log('-------------------------');

console.log(getDayIf(1));
console.log(getDayIf(5));
console.log(getDayIf(0));
