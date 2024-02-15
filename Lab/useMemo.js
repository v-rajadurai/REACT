01_Class_Component.jsx
import React from "react";
import ReactDOM from "react-dom/client";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Everyone" };
  }

  render() {
    return (
      <div>
        <h1>Class Component:</h1>
        <h2>Hello {this.state.name}, Welcome To React</h2>
      </div>
    );
  }
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<ClassComponent />);
02_Conditional_Rendering.jsx
import React from "react";
import ReactDOM from "react-dom/client";

class Conditionalrendering extends React.Component {
  state = { count: 0, name: "Zero" };

  getCountText() {
    if (this.state.count === 0) return "Zero";
    if (this.state.count === 10) return "Ten";
    return this.state.count;
  }

  getMinusColor() {
    return this.state.count === 0 ? "red" : "green";
  }

  getPlusColor() {
    return this.state.count === 10 ? "red" : "green";
  }

  render() {
    return (
      <div style={{ textAlign: "center", padding: 50 }}>
        <h1 style={{ padding: 100 }}> Conditional Rendering:</h1>
        <button
          style={{
            width: 100,
            height: 50,
            fontSize: 27,
            color: "#000",
            background: this.getMinusColor(),
          }}
          disabled={this.state.count === 0}
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>

        <span style={{ padding: 50, fontSize: 27 }}>{this.getCountText()}</span>

        <button
          style={{
            width: 100,
            height: 50,
            fontSize: 27,
            color: "#000",
            background: this.getPlusColor(),
          }}
          disabled={this.state.count === 10}
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<Conditionalrendering />);
03_Parent_Child_Communication.jsx
import React from "react";
import ReactDOM from "react-dom/client";

class Child extends React.Component {
  onSubmit = (event) => {
    this.props.parentCallback(event.target.myname.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="myname" placeholder="Enter Name" />
          <br></br>
          <br></br>

          <button>Submit</button>
          <br></br>
          <br></br>
        </form>
      </div>
    );
  }
}

class Parent extends React.Component {
  state = { name: "" };

  handleCallback = (childData) => {
    this.setState({ name: childData });
  };

  render() {
    const { name } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Child and Parent Components</h1>
        <Child parentCallback={this.handleCallback} />
        {name}
      </div>
    );
  }
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<Parent />);
04_MUI_Card.jsx
// npm install @mui/material @emotion/react @emotion/styled

import React from "react";
import ReactDOM from "react-dom/client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MediaCard = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="180"
      image="https://www.skcet.ac.in/images/library_3-crop-u4236802.jpg"
      alt="skcet library"
    />

    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        SKCET
      </Typography>
      <Typography variant="body2" color="text.secondary">
        SKCET is one of the finest colleges in South India.It is well known for
        it's infrastructure, academics and the placements offered. With Asia's
        second-largest library, SKCET is well -known for it's architecture and
        maintenance.
      </Typography>
    </CardContent>

    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<MediaCard />);
05_Navbar.jsx
// npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

import React from "react";
import ReactDOM from "react-dom/client";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

document.body.style.margin = 0;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SKCET
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              ariahaspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menuappbar"
              sx={{ display: { xs: "block", md: "none" } }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              keepMounted
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            component="a"
            href="#"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SKCET
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              id="menuappbar"
              sx={{ mt: "45px" }}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              keepMounted
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<ResponsiveAppBar />);
06_HTTP_Requests.jsx
import React from "react";
import ReactDOM from "react-dom/client";

function FetchAPI() {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);

  console.log(user);

  return (
    <div>
      <h1>HTTP Requests</h1>

      <ol>
        {user.map((u, i) => (
          <li key={i}>
            {u.name}, {u.id}, {u.email}
          </li>
        ))}
      </ol>
    </div>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<FetchAPI />);
07_Dropdown.jsx
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div>
    {/* Dropdown */}
    <select>
      <option value="fruit">Fruit</option>
      <option value="vegetable">Vegetable</option>
      <option value="meat">Meat</option>
      <option value="Groceries">Groceries</option>
      <option value="Snacks">Snacks</option>
      <option value="Footwears">Footwears</option>
    </select>
  </div>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
08_Routing.jsx
// npm install react-router-dom

import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Mainpage = () => (
  <div>
    <h1>This is Main Page</h1>
    <Link to="/returnpage">Next Page</Link>
  </div>
);

const Returnpage = () => (
  <div>
    <h1>This is Next Page</h1>
    <Link to="/">Back to mainpage</Link>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Mainpage}></Route>
      <Route path="/returnpage" Component={Returnpage}></Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
09_RegisterForm.jsx
import React from "react";
import ReactDOM from "react-dom/client";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fields: {}, errors: {} };

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
      },
    });
  }

  validateForm() {
    const fields = this.state.fields;
    const errors = {};
    let formIsValid = true;

    const validations = {
      username: {
        rule: /^[a-zA-Z]+$/,
        message: {
          empty: "*Please enter your username.",
          invalid: "*Please enter alphabet characters only.",
        },
      },
      mobileno: {
        rule: /^[0-9]{10}$/,
        message: {
          empty: "*Please enter your mobile no.",
          invalid: "*Please enter valid mobile no.",
        },
      },
      password: {
        rule: /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})/,
        message: {
          empty: "*Please enter your password.",
          invalid: "*Please enter secure and strong password.",
        },
      },
    };

    Object.keys(validations).forEach((key) => {
      if (!fields[key]) {
        formIsValid = false;
        errors[key] = validations[key].message.empty;
      } else if (!validations[key].rule.test(fields[key])) {
        formIsValid = false;
        errors[key] = validations[key].message.invalid;
      }
    });

    this.setState({ errors });
    return formIsValid;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validateForm()) {
      this.setState({
        fields: {
          username: "",
          mobileno: "",
          password: "",
        },
      });

      alert("Form submitted");
    }
  }

  render() {
    return (
      <div>
        <div>
          <h3>Registration page</h3>

          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="username"
              value={this.state.fields.username}
              onChange={this.handleChange}
            />
            <div className="error-msg">{this.state.errors.username}</div>

            <label>Mobile No:</label>
            <input
              type="text"
              name="mobileno"
              value={this.state.fields.mobileno}
              onChange={this.handleChange}
            />
            <div className="error-msg">{this.state.errors.mobileno}</div>

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.fields.password}
              onChange={this.handleChange}
            />
            <div className="error-msg">{this.state.errors.password}</div>

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<RegisterForm />);
10_Fetch_Display_MUI.jsx
// npm install @mui/material @emotion/react @emotion/styled

import React from "react";
import ReactDOM from "react-dom/client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  // State to store the fetched user data
  const [users, setUsers] = React.useState([]);

  // useEffect hook to fetch data when the component mounts
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
11_Invalid_API_EndPoint.jsx
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [error, setError] = React.useState(null);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/songs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid Endpoint");
        }
      })
      .catch((error) => {
        setError("Invalid endpoint or error occurred.");
        console.error(error);
      });
  }

  return (
    <div>
      <button
        onClick={fetchData}
        style={{
          padding: "0.75rem 1.5rem",
          color: "white",
          borderRadius: "5px",
          border: "2px solid #202020",
          backgroundColor: "#101010",
        }}
      >
        Fetch Data
      </button>
      {error && <h1>Error: {error}</h1>}
    </div>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
12_FontContext.jsx
// npm install @mui/material @emotion/react @emotion/styled

import React from "react";
import ReactDOM from "react-dom/client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// MUI theme
const theme = createTheme();

// Font context
const FontContext = React.createContext();

// Font provider
const FontProvider = ({ children }) => {
  const [font, setFont] = React.useState("sans-serif");

  const toggleFont = () => {
    setFont(font === "sans-serif" ? "serif" : "sans-serif");
  };

  return (
    <FontContext.Provider value={{ font, toggleFont }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FontContext.Provider>
  );
};

// Custom hook to consume font context
const useFont = () => React.useContext(FontContext);

const Navbar = () => {
  const { font, toggleFont } = useFont();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ fontFamily: font }}>
          App
        </Typography>
        <Button color="inherit" onClick={toggleFont} sx={{ fontFamily: font }}>
          Toggle Font
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const Home = () => {
  const { font } = useFont();

  return (
    <div
      style={{
        fontFamily: font,
        textAlign: "center",
        height: "calc(100vh - 56px - 54px - 32px)",
      }}
    >
      <h2>Home Component</h2>
      <p>This is the home content with dynamic font.</p>
    </div>
  );
};

const Footer = () => {
  const { font } = useFont();

  return (
    <footer
      style={{ background: "#101010", color: "white", padding: "1rem 1.5rem" }}
    >
      <Typography variant="body1" style={{ fontFamily: font }}>
        &copy; 2023 AspireCoders. All rights reserved.
      </Typography>
    </footer>
  );
};

document.body.style.margin = 0;

function App() {
  return (
    <FontProvider>
      <Navbar />
      <Home />
      <Footer />
    </FontProvider>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
13_useRef_Forms.jsx
// npm install @mui/material @emotion/react @emotion/styled

import React, { useRef } from "react";
import ReactDOM from "react-dom/client";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// MUI theme
const theme = createTheme();

const InputForm = () => {
  // useRef to manage input references
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Log values to the console
    console.log({
      input1: inputRef1.current.value,
      input2: inputRef2.current.value,
    });
  };

  // JSX for the form
  return (
    <form onSubmit={handleSubmit}>
      {/* Input 1 */}
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Input 1"
        inputRef={inputRef1}
      />

      {/* Input 2 */}
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Input 2"
        inputRef={inputRef2}
      />

      {/* Submit button */}
      <Button type="submit" fullWidth variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container
      sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}
      maxWidth="xs"
    >
      <Paper sx={{ px: 4, py: 5, my: "auto" }} elevation={4} component={Paper}>
        <Typography align="center" component="h1" variant="h4">
          Input Form Example
        </Typography>
        <InputForm />
      </Paper>
    </Container>
  </ThemeProvider>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
14_LifeCycleComponent.jsx
import React from "react";
import ReactDOM from "react-dom/client";

const LifecycleComponent = (props) => {
  // Component Mount Phase
  React.useEffect(() => {
    console.log("Component is mounted");
    // Cleanup function (Unmount Phase)
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  // Component Update Phase (where props are updated)
  React.useEffect(() => {
    console.log("Component is updated");
  }, [props]);

  return <div>Component Lifecycle Example</div>;
};

const App = () => {
  const [show, setShow] = React.useState(true);

  return (
    <div>
      <h1>React Lifecycle Example</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"}
      </button>

      {show && <LifecycleComponent />}
    </div>
  );
};

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
15_ControlledForm.jsx
import React from "react";
import ReactDOM from "react-dom/client";

const ControlledForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<ControlledForm />);
16_Redux_Counter.jsx
// npm i redux react-redux

import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Redux Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
};

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
16_Redux_Toolkit_Counter.jsx
// npm i @reduxjs/toolkit react-redux

import React from "react";
import ReactDOM from "react-dom/client";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

// Create a counter slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Counter component
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit Counter</h1>
        <Counter />
      </div>
    </Provider>
  );
};

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
17_RegistrationForm.jsx
import React from "react";
import ReactDOM from "react-dom/client";

function RegistrationForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = form;
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<RegistrationForm />);
18_ErrorBoundary.jsx
import React from "react";
import ReactDOM from "react-dom/client";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <p>{this.state.error.toString()}</p>
          <div>{this.state.errorInfo.componentStack}</div>
        </div>
      );
    }

    return this.props.children;
  }
}

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { throwError: false };
    this.throwError = this.throwError.bind(this);
  }

  throwError() {
    this.setState({ throwError: true });
  }

  render() {
    if (this.state.throwError) {
      throw new Error("This is a deliberate error for demonstration purposes");
    }

    return (
      <div>
        <h1>Example Component</h1>
        <button onClick={this.throwError}>Click me to throw an error</button>
      </div>
    );
  }
}

const App = () => (
  <ErrorBoundary>
    <ExampleComponent />
  </ErrorBoundary>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
19_useState_Counter.jsx
import React from "react";
import ReactDOM from "react-dom/client";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset     = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
20_Dynamic_Theme_useContext.jsx
// npm install @mui/material @emotion/react @emotion/styled

import React from "react";
import ReactDOM from "react-dom/client";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = React.createContext();

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme  = createTheme({ palette: { mode: "dark" } });

const ThemeApp = ({ children }) => {
  const [theme, setTheme] = React.useState(lightTheme);

  function toggleTheme() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Switch to {theme.palette.mode} Theme
      </Button>
    </div>
  );
};

const App = () => (
  <ThemeApp>
    <ThemeToggle />
  </ThemeApp>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
21_Dynamic_Book_Search.jsx
// npm install @mui/material @emotion/react @emotion/styled axios

import React, { createContext, useState, useEffect, useContext } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import ReactDOM from "react-dom/client";
import axios from "axios";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const value = {
    searchQuery,
    setSearchQuery,
  };
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

const useBookContext = () => {
  return useContext(BookContext);
};

const BookList = () => {
  const { searchQuery, setSearchQuery } = useBookContext();
  const [books, setBooks] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching data:" + error);
      }
    };

    fetchData();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "red", display: "flex", justifyContent: "center" }}
        >
          Book Search
        </Typography>
        <TextField
          label="Search Books"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <List>
          {filteredBooks.map((book) => (
            <ListItem key={book.id}>
              <ListItemText primary={book.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

const App = () => (
  <BookProvider>
    <BookList />
  </BookProvider>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
22_useMemo.jsx
import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  function increment() {
    setCount((c) => c + 1);
  }

  function addTodo() {
    setTodos((t) => [...t, "New Todo"]);
  }

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />

      <div>
        Count: {count}
        <br />
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

function expensiveCalculation(num) {
  console.log("Calculating...");

  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }

  return num;
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);01_Class_Component.jsx
import React from "react";
import ReactDOM from "react-dom/client";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Everyone" };
  }

  render() {
    return (
      <div>
        <h1>Class Component:</h1>
        <h2>Hello {this.state.name}, Welcome To React</h2>
      </div>
    );
  }
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<ClassComponent />);
02_Conditional_Rendering.jsx
import React from "react";
import ReactDOM from "react-dom/client";

class Conditionalrendering extends React.Component {
  state = { count: 0, name: "Zero" };

  getCountText() {
    if (this.state.count === 0) return "Zero";
    if (this.state.count === 10) return "Ten";
    return this.state.count;
  }

  getMinusColor() {
    return this.state.count === 0 ? "red" : "green";
  }

  getPlusColor() {
    return this.state.count === 10 ? "red" : "green";
  }

  render() {
    return (
      <div style={{ textAlign: "center", padding: 50 }}>
        <h1 style={{ padding: 100 }}> Conditional Rendering:</h1>
        <button
          style={{
            width: 100,
            height: 50,
            fontSize: 27,
            color: "#000",
            background: this.getMinusColor(),
          }}
          disabled={this.state.count === 0}
          onClick={() => {
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>

        <span style={{ padding: 50, fontSize: 27 }}>{this.getCountText()}</span>

        <button
          style={{
            width: 100,
            height: 50,
            fontSize: 27,
            color: "#000",
            background: this.getPlusColor(),
          }}
          disabled={this.state.count === 10}
          onClick={() => this.setState({ count: this.state.count + 1 })}
        >
          +
        </button>
      </div>
    );
  }
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<Conditionalrendering />);
03_Parent_Child_Communication.jsx
import React from "react";
import ReactDOM from "react-dom/client";

class Child extends React.Component {
  onSubmit = (event) => {
    this.props.parentCallback(event.target.myname.value);
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" name="myname" placeholder="Enter Name" />
          <br></br>
          <br></br>

          <button>Submit</button>
          <br></br>
          <br></br>
        </form>
      </div>
    );
  }
}

class Parent extends React.Component {
  state = { name: "" };

  handleCallback = (childData) => {
    this.setState({ name: childData });
  };

  render() {
    const { name } = this.state;

    return (
      <div style={{ textAlign: "center" }}>
        <h1>Child and Parent Components</h1>
        <Child parentCallback={this.handleCallback} />
        {name}
      </div>
    );
  }
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<Parent />);
04_MUI_Card.jsx
// npm install @mui/material @emotion/react @emotion/styled

import React from "react";
import ReactDOM from "react-dom/client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const MediaCard = () => (
  <Card sx={{ maxWidth: 345 }}>
    <CardMedia
      component="img"
      height="180"
      image="https://www.skcet.ac.in/images/library_3-crop-u4236802.jpg"
      alt="skcet library"
    />

    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        SKCET
      </Typography>
      <Typography variant="body2" color="text.secondary">
        SKCET is one of the finest colleges in South India.It is well known for
        it's infrastructure, academics and the placements offered. With Asia's
        second-largest library, SKCET is well -known for it's architecture and
        maintenance.
      </Typography>
    </CardContent>

    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<MediaCard />);
05_Navbar.jsx
// npm install @mui/material @emotion/react @emotion/styled @mui/icons-material

import React from "react";
import ReactDOM from "react-dom/client";

import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

import MenuIcon from "@mui/icons-material/Menu";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Products", "Pricing", "Blog"];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

document.body.style.margin = 0;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (e) => setAnchorElNav(e.currentTarget);
  const handleOpenUserMenu = (e) => setAnchorElUser(e.currentTarget);
  const handleCloseNavMenu = () => setAnchorElNav(null);
  const handleCloseUserMenu = () => setAnchorElUser(null);

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SKCET
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              ariahaspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menuappbar"
              sx={{ display: { xs: "block", md: "none" } }}
              anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
              transformOrigin={{ vertical: "top", horizontal: "left" }}
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              keepMounted
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            component="a"
            href="#"
            noWrap
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            SKCET
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt="Remy Sharp"
                  src="https://mui.com/static/images/avatar/2.jpg"
                />
              </IconButton>
            </Tooltip>
            <Menu
              id="menuappbar"
              sx={{ mt: "45px" }}
              anchorOrigin={{ vertical: "top", horizontal: "right" }}
              transformOrigin={{ vertical: "top", horizontal: "right" }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              keepMounted
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<ResponsiveAppBar />);
06_HTTP_Requests.jsx
import React from "react";
import ReactDOM from "react-dom/client";

function FetchAPI() {
  const [user, setUser] = React.useState([]);

  React.useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => setUser(res));
  }, []);

  console.log(user);

  return (
    <div>
      <h1>HTTP Requests</h1>

      <ol>
        {user.map((u, i) => (
          <li key={i}>
            {u.name}, {u.id}, {u.email}
          </li>
        ))}
      </ol>
    </div>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<FetchAPI />);
07_Dropdown.jsx
import React from "react";
import ReactDOM from "react-dom/client";

const App = () => (
  <div>
    {/* Dropdown */}
    <select>
      <option value="fruit">Fruit</option>
      <option value="vegetable">Vegetable</option>
      <option value="meat">Meat</option>
      <option value="Groceries">Groceries</option>
      <option value="Snacks">Snacks</option>
      <option value="Footwears">Footwears</option>
    </select>
  </div>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
08_Routing.jsx
// npm install react-router-dom

import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Mainpage = () => (
  <div>
    <h1>This is Main Page</h1>
    <Link to="/returnpage">Next Page</Link>
  </div>
);

const Returnpage = () => (
  <div>
    <h1>This is Next Page</h1>
    <Link to="/">Back to mainpage</Link>
  </div>
);

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" Component={Mainpage}></Route>
      <Route path="/returnpage" Component={Returnpage}></Route>
    </Routes>
  </BrowserRouter>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
09_RegisterForm.jsx
import React from "react";
import ReactDOM from "react-dom/client";

class RegisterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { fields: {}, errors: {} };

    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      fields: {
        ...this.state.fields,
        [e.target.name]: e.target.value,
      },
    });
  }

  validateForm() {
    const fields = this.state.fields;
    const errors = {};
    let formIsValid = true;

    const validations = {
      username: {
        rule: /^[a-zA-Z]+$/,
        message: {
          empty: "*Please enter your username.",
          invalid: "*Please enter alphabet characters only.",
        },
      },
      mobileno: {
        rule: /^[0-9]{10}$/,
        message: {
          empty: "*Please enter your mobile no.",
          invalid: "*Please enter valid mobile no.",
        },
      },
      password: {
        rule: /^(?=.[a-z])(?=.[A-Z])(?=.[0-9])(?=.[!@#$%^&*])(?=.{8,})/,
        message: {
          empty: "*Please enter your password.",
          invalid: "*Please enter secure and strong password.",
        },
      },
    };

    Object.keys(validations).forEach((key) => {
      if (!fields[key]) {
        formIsValid = false;
        errors[key] = validations[key].message.empty;
      } else if (!validations[key].rule.test(fields[key])) {
        formIsValid = false;
        errors[key] = validations[key].message.invalid;
      }
    });

    this.setState({ errors });
    return formIsValid;
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.validateForm()) {
      this.setState({
        fields: {
          username: "",
          mobileno: "",
          password: "",
        },
      });

      alert("Form submitted");
    }
  }

  render() {
    return (
      <div>
        <div>
          <h3>Registration page</h3>

          <form onSubmit={this.handleSubmit}>
            <label>Name</label>
            <input
              type="text"
              name="username"
              value={this.state.fields.username}
              onChange={this.handleChange}
            />
            <div className="error-msg">{this.state.errors.username}</div>

            <label>Mobile No:</label>
            <input
              type="text"
              name="mobileno"
              value={this.state.fields.mobileno}
              onChange={this.handleChange}
            />
            <div className="error-msg">{this.state.errors.mobileno}</div>

            <label>Password</label>
            <input
              type="password"
              name="password"
              value={this.state.fields.password}
              onChange={this.handleChange}
            />
            <div className="error-msg">{this.state.errors.password}</div>

            <button type="submit">Register</button>
          </form>
        </div>
      </div>
    );
  }
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<RegisterForm />);
10_Fetch_Display_MUI.jsx
// npm install @mui/material @emotion/react @emotion/styled

import React from "react";
import ReactDOM from "react-dom/client";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

function App() {
  // State to store the fetched user data
  const [users, setUsers] = React.useState([]);

  // useEffect hook to fetch data when the component mounts
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Phone</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user.id}>
              <TableCell>{user.id}</TableCell>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.phone}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
11_Invalid_API_EndPoint.jsx
import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  const [error, setError] = React.useState(null);

  function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/songs")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Invalid Endpoint");
        }
      })
      .catch((error) => {
        setError("Invalid endpoint or error occurred.");
        console.error(error);
      });
  }

  return (
    <div>
      <button
        onClick={fetchData}
        style={{
          padding: "0.75rem 1.5rem",
          color: "white",
          borderRadius: "5px",
          border: "2px solid #202020",
          backgroundColor: "#101010",
        }}
      >
        Fetch Data
      </button>
      {error && <h1>Error: {error}</h1>}
    </div>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
12_FontContext.jsx
// npm install @mui/material @emotion/react @emotion/styled

import React from "react";
import ReactDOM from "react-dom/client";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// MUI theme
const theme = createTheme();

// Font context
const FontContext = React.createContext();

// Font provider
const FontProvider = ({ children }) => {
  const [font, setFont] = React.useState("sans-serif");

  const toggleFont = () => {
    setFont(font === "sans-serif" ? "serif" : "sans-serif");
  };

  return (
    <FontContext.Provider value={{ font, toggleFont }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </FontContext.Provider>
  );
};

// Custom hook to consume font context
const useFont = () => React.useContext(FontContext);

const Navbar = () => {
  const { font, toggleFont } = useFont();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ fontFamily: font }}>
          App
        </Typography>
        <Button color="inherit" onClick={toggleFont} sx={{ fontFamily: font }}>
          Toggle Font
        </Button>
      </Toolbar>
    </AppBar>
  );
};

const Home = () => {
  const { font } = useFont();

  return (
    <div
      style={{
        fontFamily: font,
        textAlign: "center",
        height: "calc(100vh - 56px - 54px - 32px)",
      }}
    >
      <h2>Home Component</h2>
      <p>This is the home content with dynamic font.</p>
    </div>
  );
};

const Footer = () => {
  const { font } = useFont();

  return (
    <footer
      style={{ background: "#101010", color: "white", padding: "1rem 1.5rem" }}
    >
      <Typography variant="body1" style={{ fontFamily: font }}>
        &copy; 2023 AspireCoders. All rights reserved.
      </Typography>
    </footer>
  );
};

document.body.style.margin = 0;

function App() {
  return (
    <FontProvider>
      <Navbar />
      <Home />
      <Footer />
    </FontProvider>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
13_useRef_Forms.jsx
// npm install @mui/material @emotion/react @emotion/styled

import React, { useRef } from "react";
import ReactDOM from "react-dom/client";

import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import { createTheme, ThemeProvider } from "@mui/material/styles";

// MUI theme
const theme = createTheme();

const InputForm = () => {
  // useRef to manage input references
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Log values to the console
    console.log({
      input1: inputRef1.current.value,
      input2: inputRef2.current.value,
    });
  };

  // JSX for the form
  return (
    <form onSubmit={handleSubmit}>
      {/* Input 1 */}
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Input 1"
        inputRef={inputRef1}
      />

      {/* Input 2 */}
      <TextField
        variant="outlined"
        margin="normal"
        fullWidth
        label="Input 2"
        inputRef={inputRef2}
      />

      {/* Submit button */}
      <Button type="submit" fullWidth variant="contained" color="primary">
        Submit
      </Button>
    </form>
  );
};

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Container
      sx={{ display: "grid", placeItems: "center", minHeight: "100vh" }}
      maxWidth="xs"
    >
      <Paper sx={{ px: 4, py: 5, my: "auto" }} elevation={4} component={Paper}>
        <Typography align="center" component="h1" variant="h4">
          Input Form Example
        </Typography>
        <InputForm />
      </Paper>
    </Container>
  </ThemeProvider>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
14_LifeCycleComponent.jsx
import React from "react";
import ReactDOM from "react-dom/client";

const LifecycleComponent = (props) => {
  // Component Mount Phase
  React.useEffect(() => {
    console.log("Component is mounted");
    // Cleanup function (Unmount Phase)
    return () => {
      console.log("Component will unmount");
    };
  }, []);

  // Component Update Phase (where props are updated)
  React.useEffect(() => {
    console.log("Component is updated");
  }, [props]);

  return <div>Component Lifecycle Example</div>;
};

const App = () => {
  const [show, setShow] = React.useState(true);

  return (
    <div>
      <h1>React Lifecycle Example</h1>
      <button onClick={() => setShow(!show)}>
        {show ? "Unmount" : "Mount"}
      </button>

      {show && <LifecycleComponent />}
    </div>
  );
};

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
15_ControlledForm.jsx
import React from "react";
import ReactDOM from "react-dom/client";

const ControlledForm = () => {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data:", formData);
  };

  return (
    <div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
        />
        <br />

        <label>Last Name</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
        />
        <br />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <br />

        <label>Message</label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<ControlledForm />);
16_Redux_Counter.jsx
// npm i redux react-redux

import React from "react";
import ReactDOM from "react-dom/client";

import { createStore } from "redux";
import { Provider, connect } from "react-redux";

const counterReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const store = createStore(counterReducer);

const Counter = ({ count, increment, decrement }) => {
  return (
    <div>
      <h1>Redux Counter App</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  count: state.count,
});

const mapDispatchToProps = (dispatch) => ({
  increment: () => dispatch({ type: "INCREMENT" }),
  decrement: () => dispatch({ type: "DECREMENT" }),
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
};

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
16_Redux_Toolkit_Counter.jsx
// npm i @reduxjs/toolkit react-redux

import React from "react";
import ReactDOM from "react-dom/client";

import { configureStore, createSlice } from "@reduxjs/toolkit";
import { Provider, useDispatch, useSelector } from "react-redux";

// Create a counter slice
const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 0,
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
});

// Export actions
export const { increment, decrement } = counterSlice.actions;

// Create the Redux store
const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

// Counter component
const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.value);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  );
};

// Main App component
const App = () => {
  return (
    <Provider store={store}>
      <div>
        <h1>Redux Toolkit Counter</h1>
        <Counter />
      </div>
    </Provider>
  );
};

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
17_RegistrationForm.jsx
import React from "react";
import ReactDOM from "react-dom/client";

function RegistrationForm() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password } = form;
    alert(`Name: ${name}\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <div>
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<RegistrationForm />);
18_ErrorBoundary.jsx
import React from "react";
import ReactDOM from "react-dom/client";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: null, errorInfo: null };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
  }

  render() {
    if (this.state.errorInfo) {
      return (
        <div>
          <h2>Something went wrong!</h2>
          <p>{this.state.error.toString()}</p>
          <div>{this.state.errorInfo.componentStack}</div>
        </div>
      );
    }

    return this.props.children;
  }
}

class ExampleComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { throwError: false };
    this.throwError = this.throwError.bind(this);
  }

  throwError() {
    this.setState({ throwError: true });
  }

  render() {
    if (this.state.throwError) {
      throw new Error("This is a deliberate error for demonstration purposes");
    }

    return (
      <div>
        <h1>Example Component</h1>
        <button onClick={this.throwError}>Click me to throw an error</button>
      </div>
    );
  }
}

const App = () => (
  <ErrorBoundary>
    <ExampleComponent />
  </ErrorBoundary>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
19_useState_Counter.jsx
import React from "react";
import ReactDOM from "react-dom/client";

const Counter = () => {
  const [count, setCount] = React.useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset     = () => setCount(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

function App() {
  return (
    <div>
      <h1>Counter App</h1>
      <Counter />
    </div>
  );
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
20_Dynamic_Theme_useContext.jsx
// npm install @mui/material @emotion/react @emotion/styled

import React from "react";
import ReactDOM from "react-dom/client";

import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";

import { ThemeProvider, createTheme } from "@mui/material/styles";

const ThemeContext = React.createContext();

const lightTheme = createTheme({ palette: { mode: "light" } });
const darkTheme  = createTheme({ palette: { mode: "dark" } });

const ThemeApp = ({ children }) => {
  const [theme, setTheme] = React.useState(lightTheme);

  function toggleTheme() {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

const ThemeToggle = () => {
  const { theme, toggleTheme } = React.useContext(ThemeContext);

  return (
    <div
      style={{
        textAlign: "center",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Button variant="contained" color="primary" onClick={toggleTheme}>
        Switch to {theme.palette.mode} Theme
      </Button>
    </div>
  );
};

const App = () => (
  <ThemeApp>
    <ThemeToggle />
  </ThemeApp>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
21_Dynamic_Book_Search.jsx
// npm install @mui/material @emotion/react @emotion/styled axios

import React, { createContext, useState, useEffect, useContext } from "react";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";

import ReactDOM from "react-dom/client";
import axios from "axios";

const BookContext = createContext();

const BookProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const value = {
    searchQuery,
    setSearchQuery,
  };
  return <BookContext.Provider value={value}>{children}</BookContext.Provider>;
};

const useBookContext = () => {
  return useContext(BookContext);
};

const BookList = () => {
  const { searchQuery, setSearchQuery } = useBookContext();
  const [books, setBooks] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
        setBooks(response.data);
      } catch (error) {
        console.error("Error fetching data:" + error);
      }
    };

    fetchData();
  }, []);

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ color: "red", display: "flex", justifyContent: "center" }}
        >
          Book Search
        </Typography>
        <TextField
          label="Search Books"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <List>
          {filteredBooks.map((book) => (
            <ListItem key={book.id}>
              <ListItemText primary={book.title} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Container>
  );
};

const App = () => (
  <BookProvider>
    <BookList />
  </BookProvider>
);

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);
22_useMemo.jsx
import { useState, useMemo } from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  function increment() {
    setCount((c) => c + 1);
  }

  function addTodo() {
    setTodos((t) => [...t, "New Todo"]);
  }

  return (
    <div>
      <div>
        <h2>My Todos</h2>
        {todos.map((todo, index) => {
          return <p key={index}>{todo}</p>;
        })}
        <button onClick={addTodo}>Add Todo</button>
      </div>
      <hr />

      <div>
        Count: {count}
        <br />
        <button onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
    </div>
  );
};

function expensiveCalculation(num) {
  console.log("Calculating...");

  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }

  return num;
}

ReactDOM
  .createRoot(document.getElementById("root"))
  .render(<App />);