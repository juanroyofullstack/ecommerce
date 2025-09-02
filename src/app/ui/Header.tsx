import React from "react";
import Link from "next/link";
import { AppBar, Toolbar, Button } from "@mui/material";

import SearchBar from "../components/SearchBar";

const Header: React.FC = () => {
  return (
    <AppBar position="sticky" className="bg-white shadow-md top-0 z-50">
      <Toolbar className="flex justify-between items-center">
        <Button color="inherit" component={Link} href="/"
          className="text-gray-800 hover:text-blue-600">
            Mi Ecommerce
        </Button>
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
