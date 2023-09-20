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
    <TableContainer component={Paper} className="rounded-lg shadow-lg">
      <Table className="min-w-full">
        <TableHead className="bg-gray-200">
          <TableRow>
            <TableCell className="px-4 py-2">
              <b>ID</b>
            </TableCell>
            <TableCell className="px-4 py-2">
              <b>Name</b>
            </TableCell>
            <TableCell className="px-4 py-2">
              <b>Support Email</b>
            </TableCell>
            <TableCell className="px-4 py-2">
              <b>Date</b>
            </TableCell>
            <TableCell className="px-4 py-2">
              <b>Number of Locations</b>
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody className="bg-gradient-to-br from-white to-blue-100">
          {restaurants.map((restaurant) => (
            <TableRow
              component={Link}
              state={{ restaurant: restaurant }}
              to={`/detail/${restaurant.id}`}
              key={restaurant.id}>
              <TableCell className="px-4 py-2">{restaurant.id}</TableCell>
              <TableCell className="px-4 py-2">{restaurant.name}</TableCell>
              <TableCell className="px-4 py-2">
                {restaurant.supportEmail}
              </TableCell>
              <TableCell className="px-4 py-2">
                {restaurant.createdOn}
              </TableCell>
              <TableCell className="px-4 py-2">
                {restaurant.locations.length}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default RestaurantTable;
