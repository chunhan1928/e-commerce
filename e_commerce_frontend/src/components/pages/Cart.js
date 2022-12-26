import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import PriceCheckIcon from "@mui/icons-material/PriceCheck";
import AuthContext from "../../AuthProvider";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, onClickCart, onClickBuy } = useContext(AuthContext);
  const navigate = useNavigate();
  console.log(cart);

  return (
    <Paper style={{ margin: "10px", padding: "50px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: 0,
        }}
      >
        <Paper sx={{ width: "700px" }}>
          <Typography
            variant="h3"
            component="div"
            sx={{
              width: "100%",
              textAlign: "center",
              color: "white",
              bgcolor: "primary.main",
              padding: "10px 0px",
            }}
          >
            Cart
          </Typography>
          <Stack spacing={1} justifyContent="center">
            {cart.map((item, index) => (
              <Card
                key={index}
                sx={{ maxWidth: "100%" }}
                style={{ display: "flex" }}
              >
                <CardActionArea
                  onClick={() => {
                    navigate("/product/" + item.product, {
                      state: {
                        productId: item.product,
                        productName: item.productName,
                      },
                    });
                  }}
                  style={{ flex: 8, display: "flex" }}
                >
                  <CardMedia
                    component="img"
                    alt={item.name + " image"}
                    height="140"
                    image={"http://127.0.0.1:8000/" + item.image}
                    style={{ flex: 3 }}
                  />
                  <CardContent style={{ flex: 7 }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {item.productName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {"$ " + item.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions style={{ flex: 2 }}>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => {
                      onClickCart(item.product);
                    }}
                  >
                    remove
                  </Button>
                  <Button
                    size="small"
                    variant="outlined"
                    startIcon={<PriceCheckIcon />}
                    onClick={() => {
                      onClickBuy(item.product, item.seller);
                    }}
                  >
                    Buy
                  </Button>
                </CardActions>
              </Card>
            ))}
          </Stack>
        </Paper>
      </Box>
    </Paper>
  );
};
export default Cart;
