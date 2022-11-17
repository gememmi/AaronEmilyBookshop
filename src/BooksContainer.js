import React from 'react';
import SearchBar from './SearchBar';

import Grid from '@mui/material/Grid';




function BooksContainer({allBookCards, handleSearch}) {


 return (
        <>
            <div>
                <SearchBar handleSearch={handleSearch}/>
            </div>
            <div style={{marginLeft: "171px"}}>        
                <Grid className="cards-list" 
                    container spacing={2}
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start" >
                            { allBookCards }    
                </Grid>
            </div>
        </>
)

}

export default BooksContainer

