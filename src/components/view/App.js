import axios from "axios";
import { useState, useEffect } from "react";
import { CharacterCard, EpisodeCard, LocationCard } from "./Card";
import {
  Box,
  Typography,
  Button,
  CircularProgress,
  TextField,
} from "@mui/material";
import Pagination from "@mui/material/Pagination";

function App() {
  const [resp, setResp] = useState([]);
  const [searchStr, setSearchStr] = useState("");
  const [category, setCategory] = useState("character");
  const [isLoading, setIsLoading] = useState(false);
  const [title, setTitle] = useState("Characters");
  const [pages, setPages] = useState(42);
  const [url, setUrl] = useState(
    `https://rickandmortyapi.com/api/${category}/?page=1`
  );

  const FetchData = () => {
    setIsLoading(true);
    axios
      .get(url)
      .then((resp) => {
        setResp(resp.data.results);
        setPages(resp.data.info.pages);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSearch = ({ target }) => {
    if (target.value === "") {
      setUrl(`https://rickandmortyapi.com/api/${category}/?page=1`);
    } else {
      setSearchStr(target.value);
      if (category === "character") {
        setUrl(`https://rickandmortyapi.com/api/character/?name=${searchStr}`);
      } else if (category === "episode") {
        setUrl(`https://rickandmortyapi.com/api/episode/?name=${searchStr}`);
      } else if (category === "location") {
        setUrl(`https://rickandmortyapi.com/api/location/?name=${searchStr}`);
      }
    }
  };

  const handlePage = (event, value) => {
    if (searchStr === "") {
      setUrl(`https://rickandmortyapi.com/api/${category}/?page=${value}`);
    } else {
      setUrl(
        `https://rickandmortyapi.com/api/character/?name=${searchStr}&page=${value}`
      );
    }
  };

  const handleCategory = (category) => {
    setCategory(category);
    if (category === "character") {
      setTitle("Characters");
    } else if (category === "episode") {
      setTitle("Episodes");
    } else if (category === "location") {
      setTitle("Locations");
    }
    setUrl(`https://rickandmortyapi.com/api/${category}/?page=1`);
    FetchData();
  };

  const Category = () => {
    if (category === "character") {
      return resp.map((item, index) => (
        <CharacterCard key={index} character={item} />
      ));
    }

    if (category === "episode") {
      return resp.map((item, index) => (
        <EpisodeCard key={index} episode={item} />
      ));
    }

    return resp.map((item, index) => (
      <LocationCard key={index} location={item} />
    ));
  };

  useEffect(() => {
    FetchData();
    // eslint-disable-next-line
  }, [url]);

  return (
    <Box
      sx={{
        m: 5,
        display: "flex",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <Typography textAlign="center" variant="h2" component="div">
        Rick And Morty {title}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
        <Typography textAlign="center" variant="h4" component="div">
          Filter By Category
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleCategory("character")}
        >
          Characters
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => handleCategory("episode")}
        >
          Episodes
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => handleCategory("location")}
        >
          Locations
        </Button>
      </Box>
      {category === "character" ? (
        <Box sx={{ display: "flex", justifyContent: "center", gap: 4 }}>
          <Typography textAlign="center" variant="h4" component="div">
            Search By Name
          </Typography>
          <form>
            <TextField
              id="outlined-basic"
              label="Type the name"
              variant="outlined"
              name="searchStr"
              onChange={handleSearch}
            />
          </form>
        </Box>
      ) : (
        ""
      )}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {isLoading ? (
          <Box sx={{ display: "flex", gap: 3 }}>
            <CircularProgress sx={{ m: "auto" }} />
            <Typography sx={{ m: "auto" }} variant="h5" component="div">
              Loading...
            </Typography>
          </Box>
        ) : (
          <Category />
        )}
      </Box>
      <Pagination
        sx={{ m: "auto" }}
        count={pages}
        variant="outlined"
        color="primary"
        onChange={handlePage}
      />
    </Box>
  );
}

export default App;
