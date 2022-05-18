import React, { memo } from "react";
import { PropTypes } from "prop-types"
import {Grid, Skeleton} from '../../../components'
import Card from './Card'
 
function Board({data}) {
    const {cases,todayDeaths, recovered, deaths,todayCases} = data

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />

    return (
        <Grid container spacing={4}>
        <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de casos" color="#5d78ff"/>
            </Grid>
        <Grid item xs={12} md={3}>
                <Card value={getValue(todayDeaths)} label="Óbitos diários" color="#5d78ff"/>
            </Grid>
        <Grid item xs={12} md={3}>
                <Card value={getValue(recovered)} label="Recuperados" color="#5d78ff"/>
            </Grid>
        <Grid item xs={12} md={3}>
                <Card value={getValue(deaths)} label="Mortes" color="#5d78ff"/>
            </Grid>
        <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label="Numero de casos hoje" color="#5d78ff"/>
            </Grid>
        </Grid>
    )
}

export default memo(Board)