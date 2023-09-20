import React from "react";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

function RestaurantTable({ restaurants }) {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Support Email</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Number of Locations</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {restaurants.map((restaurant) => (
            <TableRow key={restaurant.id}>
              <TableCell>{restaurant.id}</TableCell>
              <TableCell>
                <Link
                  to={`/detail/${restaurant.id}`}
                  state={{ restaurant: restaurant }}>
                  {restaurant.name}
                </Link>
              </TableCell>
              <TableCell>{restaurant.supportEmail}</TableCell>
              <TableCell>{restaurant.createdOn}</TableCell>
              <TableCell>{restaurant.locations.length}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RestaurantTable;
