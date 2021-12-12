import React, {useState} from 'react';
import './App.css';
import Tabs from './components/Tabs'
import Display from './components/Display'

function App() {
// Tabs component should take in an array (list) of items. 
// Each tab will have label and content
// clicking on a tab header should change the state of the tab content 

  const tabsList = [
    {label :"Tab 1", content :"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
    {label :"Tab 2", content :"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga."},
    {label :"Tab 3", content :"Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."},
  ];

  const [tabs, setTabs] = useState(tabsList);
  const [tabIndex, setTabIndex] = useState(0);

  return (

    <div className="App">
      <Tabs
      tabs = {tabs} 
      tabIndex = {tabIndex}
      setTabIndex = {setTabIndex}
      />

      <Display
      tabs = {tabs}
      tabIndex = {tabIndex}
      />
    </div>
    
  );
}

export default App;
