import { useEffect, FormEventHandler, useState } from 'react';
import GuestLayout from '@/Layouts/GuestLayout/GuestLayout';
import { TextField, Box, Card, Checkbox, Typography, FormControlLabel, FormGroup } from '@mui/material';
import { Head, Link, router } from '@inertiajs/react';
import { useForm } from 'react-hook-form';
import Button from '@/Components/Button/Button';
import LogoCard from '@/Components/LogoCard/LogoCard';

type LoginData = {
    email: string,
    password: string,
    remember: boolean
}

interface LoginProps {
    canResetPassword: boolean;
}

const Login: React.FC<LoginProps> = ({ canResetPassword }: LoginProps) => {
    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm<LoginData>();

    const [submitting, setSubmitting] = useState(false);

    const submit = handleSubmit((data) => {
        setSubmitting(true);
        router.post(route('login.store'), data, {
            onError: (e) => {
                if (e.email) {
                    setError('email', { type: "server", message: e.email })
                }
            },
            onFinish: () => {
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
                            {errors.email && <Typography sx={{ color: 'red', fontSize: '0.8rem', }} className="text mt1">{errors.email.message}</Typography>}
                        </Box>
                        <Box>
                            <TextField
                                size="small"
                                type="password"
                                label="Password"
                                {...register("password")}
                                fullWidth
                            />
                        </Box>
                        <Box>
                            <FormGroup>
                                <FormControlLabel control={<Checkbox {...register("remember")} />} label="Remember me?" />
                            </FormGroup>
                        </Box>
                        <Box>
                            {canResetPassword && (
                                <Link
                                    href={route('password.request')}
                                    className="link-text"
                                >
                                    {/* <Typography variant="body1" className="link-text"> */}
                                    Forgot your password?
                                    {/* </Typography> */}
                                </Link>
                            )}
                        </Box>
                        <Button type="submit" colour={"#D18800"} textcolour="#ffffff" variant="contained" disabled={submitting} fullWidth>
                            Log In
                        </Button>
                    </Box>
                </LogoCard>
            </form>
        </GuestLayout>
    );
}
