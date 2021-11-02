import React, {useEffect} from 'react';
import { styled } from '@mui/material/styles';
import { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import {Paper, Table, TableBody, TableCell} from '@material-ui/core';
import { useSelector, useDispatch} from 'react-redux';
import { deleteUsers, loadUsers } from './redux/actions';
import { useHistory } from 'react-router';


const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));
  
  // function createData(name, calories, fat, carbs, protein) {
  //   return { name, calories, fat, carbs, protein };
  // }
  
  // const rows = [
  //   createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  //   createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  //   createData('Eclair', 262, 16.0, 24, 6.0),
  //   createData('Cupcake', 305, 3.7, 67, 4.3),
  //   createData('Gingerbread', 356, 16.0, 49, 3.9),
  // ];

const Home = () => {
    let dispatch = useDispatch();
    const { users } = useSelector(state => state.data);
    let history = useHistory()
    useEffect(() => {
        dispatch(loadUsers());
    }, [dispatch])

    const handleDelete = (id) => {
      if(window.confirm("Are you sure you want to proceed?")){
        dispatch(deleteUsers(id))
      }
    }
    console.log(users);
    return (
        <div>
          <ButtonGroup variant="contained" style={{backgroundColor: "#942DA7",color: "#fff", margin: 10}} aria-label="outlined primary button group">
            <Button variant="container" color="secondary" onClick={() => history.push("/addUser")}>
              Add User
            </Button>
          </ButtonGroup>
            <TableContainer component={Paper}>
      <Table sx={{marginTop: 100, minWidth: 900 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name </StyledTableCell>
            <StyledTableCell align="center">Email</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Address</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users && users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="center">{user.email}</StyledTableCell>
              <StyledTableCell align="center">{user.phone}</StyledTableCell>
              <StyledTableCell align="center">{user.street}</StyledTableCell>
              {/* <StyledTableCell align="center"><a href={user.website} rel="noreferrer" target="_blank">{user.website}</a></StyledTableCell> */}
              <ButtonGroup variant="contained" aria-label="outlined primary button group">
                <Button onClick={() => handleDelete(user.id)} color="secondary">Delete</Button>
                {/* <Button color="primary">Edit</Button> */}
              </ButtonGroup>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   </div>
    )
}

export default Home
