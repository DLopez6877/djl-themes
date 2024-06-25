import React, { useState } from 'react';
import {
    Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper,
    TableSortLabel, TablePagination, Checkbox, Typography, Toolbar
} from '@mui/material';

const SuperHeroesTable = () => {
    const [order, setOrder] = useState('asc');
    const [orderBy, setOrderBy] = useState('name');
    const [selected, setSelected] = useState([]);
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);

    const heroes = [
        { name: 'Superman', power: 'Super Strength, Flight', origin: 'Krypton', team: 'Justice League' },
        { name: 'Batman', power: 'Martial Arts, High Intelligence', origin: 'Earth', team: 'Justice League' },
        { name: 'Wonder Woman', power: 'Super Strength, Combat Skill', origin: 'Themyscira', team: 'Justice League' },
        { name: 'Flash', power: 'Super Speed', origin: 'Earth', team: 'Justice League' },
        { name: 'Aquaman', power: 'Underwater Breathing, Telepathy', origin: 'Atlantis', team: 'Justice League' },
        { name: 'Cyborg', power: 'Technopathy, Super Strength', origin: 'Earth', team: 'Justice League' },
        { name: 'Iron Man', power: 'Powered Armor Suit', origin: 'Earth', team: 'Avengers' },
        { name: 'Thor', power: 'God of Thunder', origin: 'Asgard', team: 'Avengers' },
        { name: 'Hulk', power: 'Super Strength', origin: 'Earth', team: 'Avengers' },
        { name: 'Black Widow', power: 'Martial Arts, Espionage', origin: 'Earth', team: 'Avengers' },
        { name: 'Captain America', power: 'Super Soldier Serum', origin: 'Earth', team: 'Avengers' },
        { name: 'Spider-Man', power: 'Spider-Sense, Wall-Crawling', origin: 'Earth', team: 'Avengers' },
        { name: 'Doctor Strange', power: 'Sorcery', origin: 'Earth', team: 'Avengers' },
        { name: 'Black Panther', power: 'Enhanced Senses, Combat Skill', origin: 'Wakanda', team: 'Avengers' },
        { name: 'Captain Marvel', power: 'Energy Projection, Super Strength', origin: 'Earth', team: 'Avengers' },
        { name: 'Green Lantern', power: 'Power Ring', origin: 'Earth', team: 'Justice League' },
        { name: 'Shazam', power: 'Magic, Super Strength', origin: 'Earth', team: 'Justice League' },
        { name: 'Hawkeye', power: 'Archery', origin: 'Earth', team: 'Avengers' },
        { name: 'Ant-Man', power: 'Size Changing', origin: 'Earth', team: 'Avengers' },
        { name: 'Star-Lord', power: 'Master Tactician, Expert Marksman', origin: 'Earth', team: 'Guardians of the Galaxy' },
        { name: 'Gamora', power: 'Assassin, Enhanced Strength', origin: 'Unknown', team: 'Guardians of the Galaxy' },
    ];

    const handleRequestSort = (event, property) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event) => {
        if (event.target.checked) {
            const newSelecteds = heroes.map((hero) => hero.name);
            setSelected(newSelecteds);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event, name) => {
        const selectedIndex = selected.indexOf(name);
        let newSelected = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, name);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }

        setSelected(newSelected);
    };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const isSelected = (name) => selected.indexOf(name) !== -1;

    const getComparator = (order, orderBy) => {
        return order === 'desc'
            ? (a, b) => (b[orderBy] < a[orderBy] ? -1 : 1)
            : (a, b) => (a[orderBy] < b[orderBy] ? -1 : 1);
    };

    const sortedHeroes = heroes.sort(getComparator(order, orderBy));

    return (
        <Paper>
            <Toolbar>
                {selected.length > 0 ? (
                    <Typography color="inherit" variant="subtitle1">
                        {selected.length} selected
                    </Typography>
                ) : (
                    <Typography variant="h6" id="tableTitle">
                        Superheroes
                    </Typography>
                )}
            </Toolbar>
            <TableContainer>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell padding="checkbox">
                                <Checkbox
                                    indeterminate={selected.length > 0 && selected.length < heroes.length}
                                    checked={heroes.length > 0 && selected.length === heroes.length}
                                    onChange={handleSelectAllClick}
                                />
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'name'}
                                    direction={orderBy === 'name' ? order : 'asc'}
                                    onClick={(event) => handleRequestSort(event, 'name')}
                                >
                                    Hero
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'power'}
                                    direction={orderBy === 'power' ? order : 'asc'}
                                    onClick={(event) => handleRequestSort(event, 'power')}
                                >
                                    Power
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'origin'}
                                    direction={orderBy === 'origin' ? order : 'asc'}
                                    onClick={(event) => handleRequestSort(event, 'origin')}
                                >
                                    Origin
                                </TableSortLabel>
                            </TableCell>
                            <TableCell>
                                <TableSortLabel
                                    active={orderBy === 'team'}
                                    direction={orderBy === 'team' ? order : 'asc'}
                                    onClick={(event) => handleRequestSort(event, 'team')}
                                >
                                    Team
                                </TableSortLabel>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {sortedHeroes.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((hero, index) => {
                            const isItemSelected = isSelected(hero.name);
                            return (
                                <TableRow
                                    hover
                                    onClick={(event) => handleClick(event, hero.name)}
                                    role="checkbox"
                                    aria-checked={isItemSelected}
                                    tabIndex={-1}
                                    key={hero.name}
                                    selected={isItemSelected}
                                >
                                    <TableCell padding="checkbox">
                                        <Checkbox
                                            checked={isItemSelected}
                                        />
                                    </TableCell>
                                    <TableCell>{hero.name}</TableCell>
                                    <TableCell>{hero.power}</TableCell>
                                    <TableCell>{hero.origin}</TableCell>
                                    <TableCell>{hero.team}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <TablePagination
                rowsPerPageOptions={[5, 10, 15]}
                component="div"
                count={heroes.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
};

export default SuperHeroesTable;
