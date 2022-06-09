import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import { faImage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Grid } from '@mui/material';
import Noteteaser, {Note} from './Noteteaser';

interface Props {
  notes: Note[];
}

export default function Notegrid({ notes }: Props) {
  let allNotes = notes.map((note) => (
    <Grid item xs={2}>
      <Noteteaser  title={note.title} iconType={note.iconType} course={note.course} />
    </Grid>
  ));

  return (
    <Grid container spacing={1}>
      {allNotes}
    </Grid>
  );
}
