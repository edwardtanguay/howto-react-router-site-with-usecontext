import { createContext } from 'react';

const AppContext = createContext();
 
export const AppProvider = ({ children }) => {
	const siteTitle = "The Book Club"

	return (
		<AppContext.Provider value={{
			siteTitle
		}}>
			{children}
		</AppContext.Provider>
	);

};

export default AppContext;