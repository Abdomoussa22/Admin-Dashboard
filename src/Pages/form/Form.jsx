import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Alert, Button, IconButton, MenuItem, Snackbar, Stack } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import { useForm } from "react-hook-form";

const data = [
    {
        value: "Admin",
        label: "Admin",
    },
    {
        value: "Manger",
        label: "Manger",
    },
    {
        value: "User",
        label: "User",
    },
];
const Form = () => {
    const regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regPhone = /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const onSubmit = () => {
        console.log('doneeeee')
        handleClick()
    }
    const {
        register,
        handleSubmit,
        // watch,
        formState: { errors },
    } = useForm();

    const [open, setOpen] = React.useState(false)


    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };
    const action = (
        <React.Fragment>
            <Button color="secondary" size="small" onClick={handleClose}>
                UNDO
            </Button>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );
    return (
        <Box
            className="container"
            onSubmit={handleSubmit(onSubmit)}
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 1.5, flex: 1 }}
            noValidate
            autoComplete="off"
        >
            <Stack direction={"row"} sx={{ gap: 1.5 }}>
                <TextField sx={{ flex: 1 }} label="First Name" variant="filled"
                    error={Boolean(errors.firstName)}
                    helperText={errors.firstName ? "this filed is require" : null}
                    {...register("firstName", { required: true, minLength: 5 })} />

                <TextField sx={{ flex: 1 }} label="Last Name" variant="filled"
                    error={Boolean(errors.lastName)}
                    helperText={errors.firstName ? "this filed is require" : null}
                    {...register("lastName", { required: true, minLength: 5 })} />
            </Stack>
            <TextField label="Email" variant="filled"
                error={Boolean(errors.email)}
                helperText={errors.email ? "please provide a valid email" : null}
                {...register("email", { required: true, pattern: regEmail })}
            />
            <TextField label="Phone" variant="filled"
                error={Boolean(errors.phone)}
                helperText={errors.phone ? "please provide a valid phone" : null}
                {...register("phone", { required: true, pattern: regPhone })}
            />
            <TextField label="Address 1" variant="filled" />
            <TextField label="Address 2" variant="filled" />
            <TextField
                variant="filled"
                id="outlined-select-currency"
                select
                label="Select"
                defaultValue="Admin"
            >
                {data.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
            <Box sx={{ textAlign: "right" }}>
                <Button
                    type="submit"
                    variant="contained"
                    sx={{ textTransform: "capitalize" }}
                >
                    Create New User
                </Button>
                <Snackbar
                    anchorOrigin={{ vertical: "top", horizontal: "right" }}
                    open={open}
                    autoHideDuration={6000}
                    onClose={handleClose}
                    action={action}>
                    <Alert onClose={handleClose}
                        variant="filled"
                        sx={{ width: '100%' }}
                    >
                        Login success
                    </Alert>
                </Snackbar>
            </Box>
        </Box>
    );
};

export default Form;
