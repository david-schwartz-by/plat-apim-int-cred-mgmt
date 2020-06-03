import React from "react";

import {LuiHeaderBlock} from "@jda/lui-common-component-library"
import {Button, Box} from "@material-ui/core";
import AddAppModal from "./AddAppModal"

import {SubmitFunction} from "../App"

interface HeaderProps {
    submit: SubmitFunction
}

export default ({submit}: HeaderProps) =>
    <Box py={3} px={5}>
        <LuiHeaderBlock title="My Apps" headerActions={ 
        <Box>
            <AddAppModal submit={submit} />
        </Box>}
        />
    </Box>