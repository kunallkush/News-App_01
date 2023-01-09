import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Link from "@mui/material/Link";
import DeleteIcon from '@mui/icons-material/Delete';

import { useGlobalContext } from "./Context";
function Stories() {
  const { isLoading, hits,removePost } = useGlobalContext();

  if (isLoading) {
    return (
      <Box
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" , marginTop:10 }}
      >
        <CircularProgress />
      </Box>
    );
  }
 

  return (
    <>
      {hits.map((items, i) => {
        return (
          <Box
            className="d-flex justify-content-center "
            sx={{ minWidth: 275, margin: 2 }}
            key={i}
          >
            <Card
              variant="outlined"
              sx={{
                width: 500,
                boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
              }}
            >
              <CardContent>
                <Typography
                  sx={{ fontSize: 14 }}
                  color="text.secondary"
                  gutterBottom
                >
                  {items.title}
                </Typography>
                <Typography variant="h5 " component="div"></Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                  By {items.author} | {items.num_comments} comments
                </Typography>
                <Typography variant="body2">
                  Points : {items.points}
                  <br />
                </Typography>
              </CardContent>
              <CardActions>
                <Link href={items.url} underline="none" target="_blank">
                <Button size="small" className="me-3">Learn More</Button>
                </Link>
                <Button size="small" color="error" startIcon={<DeleteIcon />} onClick={()=>{removePost(items.objectID)}}>Remove</Button>

              </CardActions>
            </Card>
          </Box>
        );
      })}
    </>
  );
}

export default Stories;
