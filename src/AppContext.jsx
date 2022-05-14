import { createContext } from 'react';

export const AppContext = createContext();
 
export const AppProvider = ({ children }) => {
	const siteTitle = "The Online Book Club"

	return (
		<AppContext.Provider value={{
			siteTitle
		}}>
			{children}
		</AppContext.Provider>
	);

};