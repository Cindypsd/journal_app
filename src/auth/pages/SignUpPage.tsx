import { Link as RouterLink } from 'react-router-dom';
import { Google } from '@mui/icons-material';
import { Button, Grid, TextField, Typography, Link } from '@mui/material';
import { AuthLayout } from '../layout/AuthLayout';

export const SignUpPage = () => {
  return (
    <AuthLayout title="Create account">
      <form>
        <Grid container>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField label="Name" type="text" placeholder="name" variant="outlined" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Email"
              type="email"
              placeholder="email"
              variant="outlined"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sx={{ mb: 2 }}>
            <TextField
              label="Password"
              type="password"
              placeholder="password"
              variant="outlined"
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mb: 2 }}>
            <Button variant="contained" fullWidth>
              Create
            </Button>
          </Grid>

          <Grid container direction="row" justifyContent="end">
            <Typography sx={{ mr: 1 }}>Already have an account?</Typography>
            <Link component={RouterLink} color="inherit" to="/auth/signIn">
              Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  );
};
