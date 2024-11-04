import axios from "axios";
import React, { useEffect, useState } from "react";
import "./home.scss";
import Search from "../layouts/search";
import Welcome from "../components/welcome";
import Ul from "../components/ul";

export default function Home() {
  return (
    <>
    <Welcome/>
    <Search/>
    <Ul/>
    </>
  );
}
