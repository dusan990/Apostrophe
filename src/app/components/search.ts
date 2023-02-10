let results: any[] = [];

const findEntries = (value:object, searchTerm:string) => {
	results = [];

	Object.entries(value).filter(entries => {
		if (
			// entries[0].toLowerCase().includes(searchTerm.toLowerCase())
			entries[0].toLowerCase().replace(/\b'|'\b|\b’|’\b/g, '').includes(searchTerm.toLowerCase().replace(/\b'|'\b|\b’|’\b/g, ''))
			||
			// entries[1].toLowerCase().includes(searchTerm.toLowerCase())
			entries[1].toLowerCase().replace(/\b'|'\b|\b’|’\b/g, '').includes(searchTerm.toLowerCase().replace(/\b'|'\b|\b’|’\b/g, ''))
		) {
			let newEntries = entries.map(function(entry){ return entry.replace(/'/g, "’") });;
			// console.log(newEntries)
			results.push(newEntries);
		}
	})
	return results
}

export default findEntries;