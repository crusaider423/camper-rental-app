import { createSelector } from '@reduxjs/toolkit';

// export const selectCatalog = (store) => store.catalog;


export const selectCatalog = createSelector(
  (store) => store.catalog,
  (catalogState) => {
  
    return { ...catalogState };
  }
);

 
  
