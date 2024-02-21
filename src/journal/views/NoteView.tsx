import { SaveOutlined } from '@mui/icons-material';
import { Button, Grid, Typography, TextField } from '@mui/material';
import { ImageGallery } from '../components/ImageGallery';

export const NoteView = () => {
  return (
    <Grid
      container
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      sx={{ mb: 1 }}
    >
      <Grid item>
        <Typography variant="h5" fontWeight="light">
          Monday 12th July 2021
        </Typography>
      </Grid>
      <Grid item>
        <Button color="primary" sx={{ p: 2 }}>
          <SaveOutlined sx={{ fontSize: 30, mr: 1 }} />
          Save
        </Button>
      </Grid>

      <Grid container>
        <TextField
          type="text"
          variant="filled"
          fullWidth
          placeholder="Title"
          label="Title"
          sx={{ border: 'none', mb: 1 }}
        />

        <TextField
          type="text"
          variant="filled"
          fullWidth
          multiline
          minRows={5}
          placeholder="Write something..."
          sx={{ border: 'none', mb: 1 }}
        />
      </Grid>

      <ImageGallery />
    </Grid>
  );
};
