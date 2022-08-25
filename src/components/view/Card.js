import * as React from "react";
import Paper from "@mui/material/Paper";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Table, 
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@mui/material";

export const CharacterCard = ({ character }) => {
  return (
    <Card sx={{ maxWidth: 370 }}>
      <CardMedia
        component="img"
        height="250"
        image={character.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography
          sx={{ m: 3 }}
          textAlign="center"
          variant="h4"
          component="div"
        >
          {character.name}
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 120 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">Status</TableCell>
                <TableCell align="center">Species</TableCell>
                <TableCell align="center">Origin</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell align="center" component="th" scope="row">
                  {character.status}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {character.species}
                </TableCell>
                <TableCell align="center" component="th" scope="row">
                  {character.origin?.name}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export const EpisodeCard = ({ episode }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography textAlign="center" variant="h5" component="div">
          {episode.name}
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 120 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Air Date</TableCell>
                <TableCell>Episode</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {episode.air_date}
                </TableCell>
                <TableCell component="th" scope="row">
                  {episode.episode}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};

export const LocationCard = ({ location }) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography textAlign="center" variant="h5" component="div">
          {location.name}
        </Typography>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 120 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Type</TableCell>
                <TableCell>Dimension</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {location.type}
                </TableCell>
                <TableCell component="th" scope="row">
                  {location.dimension}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      </CardContent>
    </Card>
  );
};
