function indexOfIgnoreCase(s1, s2) {
  // write your code here
	const str = s1.toLowercase();
	const str1 = s2.toLowercase();
	return str.indexof(str1);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
