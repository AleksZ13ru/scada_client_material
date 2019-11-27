import React from 'react';
import gql from 'graphql-tag';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import CardHeader from "@material-ui/core/CardHeader";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import AddIcon from '@material-ui/icons/Add';
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import TextField from "@material-ui/core/TextField";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogActions from "@material-ui/core/DialogActions";
import QueryNotes from "./graphql/QueryNotes";
import {useMutation} from "@apollo/react-hooks";


const useStyles = makeStyles({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

const CREATE_NOTE = gql`
  mutation CreateNote( $datetimeStart: DateTime, $text: String){
    createNote(input:{
      machine:{id:1}
      datetimeStart: $datetimeStart
      text:$text
    }){
    ok
    }
  }
`;

const ADD_TODO = gql`
  mutation CreateNote( $datetimeStart: DateTime, $text: String){
    createNote(input:{
      machine:{id:1}
      datetimeStart: $datetimeStart
      text:$text
    }){
    ok
    }
  }
`;


function AddNote(props) {
    const [createNote, {data}] = useMutation(CREATE_NOTE);
    let curent_dt = new Date().toISOString().slice(0, 16);
    const [datetimeStart, setDatetimeStart] = React.useState(curent_dt);
    const [text, setText] = React.useState(curent_dt);

    const handleAddOk = () => {
        props.handleClose();
        createNote({variables: {datetimeStart: datetimeStart, text: text}});
        setText('');
        setDatetimeStart('');
        // alert(text + datetimeStart);

    };

    const handleClose = () => {
        props.handleClose();
    };

    return (
        <Dialog open={props.open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Новая запись</DialogTitle>
            <DialogContent>
                {/*<DialogContentText>*/}
                {/*    /!*Заполните поля*!/*/}
                {/*</DialogContentText>*/}
                <TextField
                    id="datetime-local"
                    label="Дата, Время"
                    type="datetime-local"
                    // defaultValue="2017-05-24T10:30"
                    // className={classes.textField}

                    InputLabelProps={{
                        shrink: true,

                    }}
                    inputProps={{
                        step: 300, // 5 min
                    }}
                    value={datetimeStart}
                    onChange={event => setDatetimeStart(event.target.value)}
                />
                <TextField
                    margin="dense"
                    id="machine"
                    label="Оборудование"
                    type="text"
                    fullWidth
                />
                <TextField
                    margin="dense"
                    id="message"
                    label="Краткое описание неисправности"
                    type="text"
                    fullWidth
                    value={text}
                    onChange={event => setText(event.target.value)}
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Отмена
                </Button>
                <Button onClick={handleAddOk} color="primary">
                    Добавить
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default function MyNote() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClickAdd = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        alert("Ping")
    };

    return (
        <div>
            <AddNote open={open} handleClose={handleClose}/>
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Card className={classes.card}>
                        <CardHeader
                            action={
                                <IconButton aria-label="settings" onClick={handleClickAdd}>
                                    <AddIcon/>
                                </IconButton>
                            }
                            title="Журнал передачи смен"
                            subheader="September 2019"
                        />
                        <CardContent>
                            <QueryNotes/>
                        </CardContent>
                        < CardActions>
                        </CardActions>
                    </Card>
                </Grid>

            </Grid>
        </div>

    );
}
