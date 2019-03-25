var stateArray = [
	{
		state: "california",
		population: "26",
		id: "2cd3"
	},
	{
		state: "alabama",
		population: "53",
		id: "1ab2"
	},
	{
		state: "kansas",
		population: "54",
		id: "4gh5"
	},
	{
		state: "georgia",
		population: "45",
		id: "3ef4"
	},
	{
		state: "tennessee",
		population: "133",
		id: "6kl7"
	},
	{
		state: "mississippi",
		population: "19",
		id: "5ij6"
	},
	{
		state: "wyoming",
		population: "15",
		id: "8op9"
	},
	{
		state: "virginia",
		population: "43",
		id: "7mn8"
	}
]

displayTable = (objArray) => {
	var resultsTable = document.getElementById('results-table');
	for (var i = 0; i < objArray.length; i++) {
		var tr = document.createElement('tr');
		var tdState = document.createElement('td');
		var textState = document.createTextNode(objArray[i].state);
		var tdPopulation = document.createElement('td');
		var textPopulation = document.createTextNode(objArray[i].population);
		var tdUniqId = document.createElement('td');
		var textUniqId = document.createTextNode(objArray[i].id);

		tdState.appendChild(textState);
		tdPopulation.appendChild(textPopulation);
		tdUniqId.appendChild(textUniqId);
		tr.appendChild(tdState);
		tr.appendChild(tdPopulation);
		tr.appendChild(tdUniqId)

		resultsTable.appendChild(tr);
	}
}

resetTable = () => {
	results = [];
	emptyTable();
	document.getElementById('search-value').value = "";
	displayTable(stateArray);
}

emptyTable = () => {
	var resultsTable = document.getElementById('results-table');
	while (resultsTable.rows.length > 1) {
		resultsTable.deleteRow(1);
	}
}
//SORT TABLE - the (n) specifies by WHICH COLUMN to sort. See button onClick in HTML//
function sortTable(n) {

	var rows, i, dataA, dataB, switchNeeded;
	var switches = 0;
	var resultsTable = document.getElementById("results-table");
	var needsSorting = true;//set default to true, which will start sorting loop. 
	var sortDirection = "ascending";

	while (needsSorting) {
		rows = resultsTable.rows;//get all table rows 

		needsSorting = false; // Immediately assume no sorting needed and table to remain the same. 

		//The following code will run a check to determine if actual sorting is required.///
		for (i = 1; i < (rows.length - 1); i++) {
			dataA = rows[i].getElementsByTagName("TD")[n];//[n] specifies the COLUMN being sorted by
			dataB = rows[i + 1].getElementsByTagName("TD")[n];

			// Start by saying no switching of data is needed (in case data is already in order)
			switchNeeded = false;

			/////////COMPARE DATA///////////////
			// If sorting in ascending order & value is negative, a switch is needed.
			if (sortDirection == "ascending") {
				//sort if data is a string//
				if (isNaN(dataA.innerHTML)) {
					if (dataA.innerHTML.toLowerCase() > dataB.innerHTML.toLowerCase()) {
						switchNeeded = true;
						break;//moves out of this loop and into switchNeeded logic
					}
				}
				//sort if data is a number//
				else if (!isNaN(dataA.innerHTML)) {
					if (Number(dataA.innerHTML) > Number(dataB.innerHTML)) {
						switchNeeded = true;
						break;
					}
				}
			}
			// If sorting in descending order & value is positive, a switch is needed.
			else if (sortDirection == "descending") {
				//sort if data is a string//
				if (isNaN(dataA.innerHTML)) {
					if (dataA.innerHTML.toLowerCase() < dataB.innerHTML.toLowerCase()) {
						switchNeeded = true;
						break;
					}
				}
				//sort if data is a number//
				else if (!isNaN(dataA.innerHTML)) {
					if (Number(dataA.innerHTML) < Number(dataB.innerHTML)) {
						switchNeeded = true;
						break;
					}
				}
			}
		}
		if (switchNeeded) {
			rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);//switch data in table
			switches++;// greater than 0, sorting in process
			needsSorting = true;//start the entire loop again to check if additional sorting needed
		} else {
			// If table is already sorted in ascending order and button is clicked (resets switches), change sort to descending order & rerun the loop
			if (switches == 0 && sortDirection == "ascending") {
				sortDirection = "descending";
				needsSorting = true;
			}
		}
	}
}
//Sorting function based on W3Schools example//

/////////////SEARCHING//////////////////
sortThenSearch = (array) => {
	array.sort(function (a, b) {
		var nameA = a.state;
		var nameB = b.state;
		if (nameA < nameB) {
			return -1;
		}
		if (nameA > nameB) {
			return 1;
		}
		return 0;
	});
	console.log("Sorted by Name", array);
	var searchKey = document.getElementById('search-value').value;
	var results = [];
	for (var i = 0; i < array.length; i++) {
		for (key in array[i]) {
			if (array[i][key].indexOf(searchKey) != -1) {
				results.push(array[i]);
			}
		}
	}
	emptyTable();
	displayTable(results);
}


displayTable(stateArray);