import React, { useEffect, useState } from 'react';
import { Container, Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
import axios from 'axios';
import DatabaseTable from '../../components/DatabaseTable/DatabaseTable';
import DatabaseForm from '../../components/DatabaseForm/DatabaseForm';
import { Database } from '../../types/Database';

const DatabaseListPage: React.FC = () => {
  const [databases, setDatabases] = useState<Database[]>([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:4000/databases')
      .then(response => setDatabases(response.data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);



  return (
    <Container>
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        +
      </Button>
      <DatabaseTable databases={databases} />
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Add New Database</DialogTitle>
        <DialogContent>
          <DatabaseForm /> {/*@TODO handle on submit*/}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default DatabaseListPage;
