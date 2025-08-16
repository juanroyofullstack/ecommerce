import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";

import SearchBar from "../components/SearchBar";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" className="bg-white shadow-md top-0 z-50">
      <Toolbar className="flex justify-between items-center">
        <Typography variant="h6" className="text-gray-800 font-bold">
          Mi Ecommerce
        </Typography>
        <SearchBar />
        <div>
          <Button color="inherit" component={Link} href="/"
            className="text-gray-800 hover:text-blue-600">
            Inicio
          </Button>
          <Button color="inherit" component={Link} href="/contacto"
            className="text-gray-800 hover:text-blue-600">
            Contacto
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
