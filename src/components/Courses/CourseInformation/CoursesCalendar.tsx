import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { SxProps } from '@mui/system';

type Day =
  | 'Lunes'
  | 'Martes'
  | 'Miércoles'
  | 'Jueves'
  | 'Viernes'
  | 'Sábado'

type GroupSchedule = {
  name: string;
  schedule: {
    [K in Day]?: string;
  };
};

type Props = {
  groups: GroupSchedule[];
  className?: string;
  paper?: boolean;
};

const days: Day[] = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];

const tableStyles: SxProps = {
  minWidth: 150,
  maxWidth: '100vw',
  overflowX: 'auto',
  border: '1px solid white',
  '& .MuiTableCell-root': {
    border: '1px solid white',
    color: 'white',
  },
};

export default function GroupScheduleTable({
  groups,
  className = '',
  paper = false,
}: Props) {
  const Container = paper ? TableContainer : React.Fragment;

  return (
    <Container 
        {...(paper ? {} : { className })}
    >
      <Table sx={tableStyles} aria-label="group schedule table">
        <TableHead>
          <TableRow>
            {/* <TableCell>Grupo</TableCell> */}
            {days.map((day) => (
              <TableCell key={day} align="center">
                {day}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {groups.map((group) => (
            <TableRow key={group.name}>
                {/* <TableCell component="th" scope="row">
                    {group.name}
                </TableCell> */}
              {days.map((day) => (
                
                <TableCell key={day} align="center">
                {group.name ?? group.name} <br/>
                  {group.schedule[day] || '-'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Container>
  );
}
