import React from "react";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";


// Q2. Login Form

const UserLogin = () =>{
    return(
        <div>
            <h1>Login Form</h1>
            <br></br>

            <TextField
                label="UserID"
                variant="outlined"
                type="number"
            />

            <br></br>

            <TextField
                label="UserName"
                variant="outlined"
                type="text"
            />

            <br></br>

            <Button
                variant="contained"
                color="primary"
            >
                Submit
            </Button>
        </div>
    )
}


// Q3. Product Card

const ProductCard = ()=> {
    return(
        <div>
            <Card>

                <CardHeader
                    title="Laptop"
                    subheader="Product"
                />

                <CardContent>

                    <Typography variant="h5">
                        Laptop
                    </Typography>

                    <Typography>
                        Powerful laptop for programming
                    </Typography>

                </CardContent>

                <CardActions>

                    <Button
                        variant="outlined"
                        color="info"
                    >
                        View Product
                    </Button>

                    <Button
                        variant="contained"
                        color="warning"
                    >
                        Buy Now
                    </Button>

                </CardActions>

            </Card>
        </div>
    )
}


// Q4. MUI Props/System

const UserLoginBox = () => {
    return(
        <div>

            <Box
                sx={{
                    width:500,
                    margin:"auto",
                    padding:5,
                    display:"flex",
                    flexDirection:"column",
                    gap:2
                }}
            >

                <h1>Login Box</h1>

                <TextField
                    label="UserID"
                    variant="outlined"
                    type="number"
                />

                <TextField
                    label="UserName"
                    variant="outlined"
                    type="text"
                />

                <Button
                    variant="contained"
                    color="success"
                >
                    Login
                </Button>

            </Box>

        </div>
    )
}


// Q5. MUI Button

const SubmitButton = () => {
    return(
        <div>

            <Button
                variant="contained"
                color="primary"
            >
                Submit
            </Button>

        </div>
    )
}


// Main App

const App = () => {
    return(
        <div>

            <UserLogin />

            <br></br>
            <br></br>

            <ProductCard />

            <br></br>
            <br></br>

            <UserLoginBox />

            <br></br>
            <br></br>

            <SubmitButton />

        </div>
    )
}

export default App;
