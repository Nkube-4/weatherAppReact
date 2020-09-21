import React from "react";


const Search = (props) => {

   // console.log(props);

   return (
         <div className="field" id="search">
            <input type="text" placeholder="Search a city" value={props.term} onChange={props.onTermChange}/>
         </div>
   );
};

export default Search;