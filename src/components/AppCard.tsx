import React from "react";
import { LuiCardComponent } from "@jda/lui-common-component-library";
import {
  Box,
  Paper,
  Typography,
  Avatar,
  makeStyles,
  createStyles,
  Theme,
  CardActionArea,
} from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";

import { AppData } from "../App";

type CardProps = {
  card: AppData;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
  })
);

export default ({ card }: CardProps) => {
  const theme = useTheme();
  const classes = useStyles();

  return (
    <Paper variant="outlined" elevation={15}>
      <CardActionArea>
        <LuiCardComponent>
          <Box
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h4" gutterBottom>
                <Box
                  fontWeight="fontWeightRegular"
                  color={theme.palette.text.secondary}
                >
                  {card.date}
                </Box>
              </Typography>
              <Typography variant="h2" gutterBottom>
                {card.title}
              </Typography>
              <Typography variant="h4" gutterBottom>
                <Box
                  fontWeight="fontWeightRegular"
                  color={theme.palette.text.secondary}
                >
                  {"Client ID: " + card.id}
                </Box>
              </Typography>
            </Box>
            <Avatar
              src={card.iconUrl}
              alt="User selected icon"
              className={classes.large}
            />
          </Box>
        </LuiCardComponent>
      </CardActionArea>
    </Paper>
  );
};
