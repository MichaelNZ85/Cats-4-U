import { useState } from 'react';
import { ErrorResponse } from '@/types';
import GuestLayout from '@/Layouts/GuestLayout/GuestLayout';
import { TextField, Box, Typography } from '@mui/material';
import { Head, router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import Button from '@/Components/Button/Button';
import { LogoCard } from '@/Components/LogoCard/LogoCard';

type RegisterData = {
    email: string,
    given_name: string;
    surname: string;
    phone_number: string
    password: string,
    confirm_password?: string
}


export default function Register() {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<RegisterData>();

    const [submitting, setSubmitting] = useState(false);

    const submit = handleSubmit((data) => {
        setSubmitting(true);
        if (data.password !== data.confirm_password) {
            setError('confirm_password', { type: "server", message: "The passwords do not match" });
            setSubmitting(false);
            return;
        }
        const submitData = { ...data };
        delete submitData.confirm_password;
        router.post(route('register.store'), submitData, {
            onError: (e: ErrorResponse) => {
                console.log("errors", e);
                if (Object.keys(e).length > 0) {
                    Object.keys(e).forEach((err) => {
                        const errorKey = err as keyof typeof submitData;
                        setError(errorKey, { type: "server", message: e[err] });
                    });
                }
            },
            onFinish: () => {
                console.log(errors);
                setSubmitting(false)
            }
        })
    })

    return (
        <GuestLayout>
            <Head title="Log in" />
            <form onSubmit={submit}>
                <LogoCard>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, justifyContent: 'space-between' }}>
                        <Box>
                            <TextField
                                size="small"
                                {...register("email")}
                                label="Email"
                                fullWidth
                            />
                            {errors.email && <Typography sx={{ color: 'red', fontSize: '0.8rem', marginTop: 0 }}>{errors.email.message}</Typography>}
                        </Box>
                        <Box>
                            <TextField
                                size="small"
                                {...register("given_name")}
                                label="Given Name"
                                fullWidth
                            />
                            {errors.given_name && <Typography sx={{ color: 'red', fontSize: '0.8rem', marginTop: 0 }}>{errors.given_name.message}</Typography>}
                        </Box>
                        <Box>
                            <TextField
                                size="small"
                                {...register("surname")}
                                label="Surname"
                                fullWidth
                            />
                            {errors.surname && <Typography sx={{ color: 'red', fontSize: '0.8rem', marginTop: 0 }}>{errors.surname.message}</Typography>}
                        </Box>
                        <Box>
                            <TextField
                                size="small"
                                {...register("phone_number")}
                                label="Phone Number"
                                fullWidth
                            />
                            {errors.phone_number && <Typography sx={{ color: 'red', fontSize: '0.8rem', marginTop: 0 }}>{errors.phone_number.message}</Typography>}
                        </Box>
                        <Box>
                            <TextField
                                size="small"
                                type="password"
                                label="Password"
                                {...register("password")}
                                fullWidth
                            />
                            {errors.password && <Typography sx={{ color: 'red', fontSize: '0.8rem', marginTop: 0 }} className="text">{errors.password.message}</Typography>}
                        </Box>

                        <Box>
                            <TextField
                                size="small"
                                type="password"
                                label="Password Confirmation"
                                {...register("confirm_password")}
                                fullWidth
                            />
                            {errors.confirm_password && <Typography sx={{ color: 'red', fontSize: '0.8rem', marginTop: 0 }} className="text">{errors.confirm_password.message}</Typography>}
                        </Box>
                        <Button type="submit" colour={"#D18800"} textcolour="#ffffff" variant="contained" disabled={submitting} fullWidth>
                            Register
                        </Button>
                    </Box>
                </LogoCard>
            </form>
        </GuestLayout>
    );
}
