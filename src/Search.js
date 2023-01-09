import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuIcon from "@mui/icons-material/Menu";

import { useGlobalContext } from "./Context";

function Search() {
  const { query, searchPost } = useGlobalContext();
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              NEWS
            </Typography>
            <form  onSubmit={(e)=>e.preventDefault()} className="form-inline my-2 my-lg-0">
              <input
                className="form-control mr-sm-2"
                value={query}
                onChange={(e) => {
                  searchPost(e.target.value);
                }}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}

export default Search;
