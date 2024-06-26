import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Database } from '../../types/Database';

interface DatabaseTableProps {
  databases: Database[];
}

const DatabaseTable: React.FC<DatabaseTableProps> = ({ databases }) => {
  const navigate  = useNavigate();

  const handleRowClick = (id: string) => {
    // user will be navigated to the specific db detail page
    navigate(`/database/${id}`);
  };

  return (
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>Database Name</TableCell>
          <TableCell>Username</TableCell>
          <TableCell>Type</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {databases.map((db) => (
          <TableRow key={db.id} onClick={() => handleRowClick(db.id)} style={{ cursor: 'pointer' }}>
            <TableCell>{db.name}</TableCell>
            <TableCell>{db.username}</TableCell>
            <TableCell>{db.type}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DatabaseTable;
