import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconProp } from '@fortawesome/fontawesome-svg-core';
import { faImage, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Button, Grid } from '@mui/material';

interface Props {
  categories: any[];
}

export default function CategorySelctor({ categories }: Props) {
  let cats = categories.map((categoryName) => (
    <Grid item xs={2}>
      <Button variant="outlined" size="small">
        {categoryName}
      </Button>
    </Grid>
  ));

  return (
    <Grid container spacing={1}>
      {cats}
    </Grid>
  );
}
