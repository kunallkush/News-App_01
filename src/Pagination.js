import React from "react";
import Button from "@mui/material/Button";
import { useGlobalContext } from "./Context";

function Paginations() {
  const { page, nbPages,getPrevPage,getNextPage } = useGlobalContext();
  return (
    <>
      <div className="d-flex justify-content-center align-items-center mt-4">
        <Button variant="contained" onClick={()=>{getPrevPage()}} className="me-2">Prev</Button>
          <p className="mt-3">
            {page +1} of {nbPages}
          </p>
        <Button variant="contained" onClick={()=>{getNextPage()}}  className="ms-2">Next</Button>
      </div>
    </>
  );
}

export default Paginations;
