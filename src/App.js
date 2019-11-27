import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import MyDrawers from './components/MyDrawers'
import MyContext from "./components/MyContext";
import MyBar from "./components/MyBar";
import MyDepartment from "./components/MyDepartment";

import {makeStyles} from "@material-ui/core";
import MyNote from "./components/MyNote";
import MyGears from "./components/MyGears";

import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {gql} from "apollo-boost";

const client = new ApolloClient({
    // uri: 'https://48p1r2roz4.sse.codesandbox.io',
    uri: 'http://127.0.0.1:8000/graphql/',
});

// client
//     .query({
//         query: gql`
//           {
//             actors {
//                 id
//                 name
//             }
//           }
//         `
//     })
//     .then(result => console.log(result));

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function App() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
        // alert('handleDrawerOpen');
    };

    const handleDrawerClose = () => {
        setOpen(false);
        // alert('handleDrawerClose');
    };
    return (
        <ApolloProvider client={client}>
            <Router>
                <div className={classes.root}>
                    <MyBar open={open} handleDrawerOpen={handleDrawerOpen}/>
                    <MyDrawers open={open} handleDrawerClose={handleDrawerClose}/>
                    <main className={classes.content}>
                        <div className={classes.toolbar}/>
                        <Switch>
                            <Route path="/gears">
                                <MyGears/>
                            </Route>
                            <Route path="/starred">
                                <h1>'path="/starred"'</h1>
                            </Route>
                            <Route path="/mail">
                                <h1>'path="/mail"'</h1>
                            </Route>
                            <Route path="/drafts">
                                <MyDepartment/>
                            </Route>
                            <Route path="/note">
                                <MyNote/>
                            </Route>
                            <Route path="/">
                                <h1>'path="/"'</h1>
                            </Route>
                        </Switch>


                    </main>
                </div>
            </Router>
        </ApolloProvider>
    );
}

export default App;
