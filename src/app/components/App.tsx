import React, { useState } from "react";
import fetchFromUrl from "./fetch";
import "../styles/ui.css";

function App() {
	const [searchResults, setSearchResults] = useState([])
	const [url, setUrl] = useState('');
	const urlInput = React.useRef<HTMLInputElement>(undefined);
	const searchInput = React.useRef<HTMLInputElement>(undefined);

	function onUpdateStrings() {
		parent.postMessage(
			{ pluginMessage: { 
				type: "update-strings-in-figma",
			} },"*"
		);
	}
	
	const onAddTextToFigma = (data:Array<string>) => {
		parent.postMessage(
			{ pluginMessage: { 
				type: "add-text-to-figma", 
				data: data 
			} },"*"
		);
	}

	function existingKeys() {
		parent.postMessage(
			{ pluginMessage: { 
				type: "existing-keys-on-page",
			} },"*"
		);
	}
	
	const setDataToLocalStorage = () => {
		fetchFromUrl(urlInput.current.value)
		setUrl(urlInput.current.value)
		parent.postMessage(
			{ pluginMessage: { 
				type: "save-url-to-local-storage", 
				data: urlInput.current.value 
			} }, "*"
		);
	};

	const searchSubmit = (event) => {
		if(event.key == 'Enter'){
			parent.postMessage(
				{ pluginMessage: { 
					type: "get-data-from-local-storage", 
					data: searchInput.current.value 
				} }, "*"
			);
		}
	}

	function handleSearchInput(event) {
		const inputValue = event.target.value;
  
		if (inputValue === '') {
		  setSearchResults([]);
		}
	}

	React.useEffect(() => {
		window.onmessage = (event) => {
			const { type, message } = event.data.pluginMessage;
		
			if (type === "get-url-from-local-storage") {
				setUrl(message)
			}

			if (type === "send-data-from-local-storage") {
				setSearchResults(message);
			}
		};
	}, []);

	return (
		<>
			<div className="url">
				<input ref={urlInput} defaultValue={url} className="url_textbox" />
				<button onClick={setDataToLocalStorage} className="btn btn-secondary">
					Upload
				</button>
			</div>

			<div className="search">
				<div className="icon-wrapper">
					<svg viewBox="0 0 24 24" width="40" height="40" 
					stroke="currentColor" 
					strokeWidth="2" fill="none" 
					strokeLinecap="round" 
					strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
				</div>

				<input
					type="search"
					placeholder="Search ex. settings"
					ref={searchInput}
					onKeyDown={searchSubmit}
					onChange={handleSearchInput}
				/>
			</div>
			<button onClick={existingKeys}>Get pairs</button>
			
			<div className="searchContainer">
				{searchResults && 
					searchResults.map((items:string, key:number) => (
						<button onClick={() => onAddTextToFigma([items[0], items[1]]) } key={key} className="strings">
							<p className="key">{items[0]}</p>
							<p className="text">{items[1]}</p>
						</button>
					))
				}
			</div>

			<button onClick={onUpdateStrings} className="btn btn-float btn-primary">
				Update strings
			</button>
		</>
	);
}

export default App;
