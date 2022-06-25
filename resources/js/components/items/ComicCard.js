import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Title from '../../layouts/Title';

function preventDefault(event) {
    event.preventDefault();
}

export default function ComicCard(props) {
    return (
        <React.Fragment>
            <Card sx={{
                display: 'flex',
                flexDirection: 'column',
                height: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
            }}>
                <CardContent>
                    <img
                        src={itemData[0].img}
                        srcSet={itemData[0].img}
                        alt={itemData[0].judul}
                        loading="lazy"
                    />
                    <Title>{itemData[0].judul} {props.list}</Title>
                    <Typography color="text.secondary" sx={{ flex: 1 }}>
                        on 15 March, 2019
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small" onClick={preventDefault}>Read</Button>
                </CardActions>
            </Card>
        </React.Fragment>
    );
}

const itemData = [
    {
        img: '/img/example-cover-komik.png',
        judul: 'Contoh Judul',
    },
];