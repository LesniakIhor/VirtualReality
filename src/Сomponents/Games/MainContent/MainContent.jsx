import React, { useCallback, useState, useEffect } from 'react';

import { GenerateID } from '../../../Assets/Services/Utils/generateId';
import { fetchUsers } from '../../../Assets/Index/Middleware/fetchUsers';
import { fetchGames } from '../../../Assets/Games/Middleware/fetchGames';
import { checkAuth } from '../../../Assets/Services/Utils/checkAuth';

import { ItemGames } from '../ItemGames/ItemGames';
import { VRGamesPanel } from '../VRGamesPanel/vrpanel';

import ReactPaginate from "react-paginate";

import "../../../Assets/Games/Styles/Pagination/pagination.css";

const minItemsPerPage = 5, maxItemsPerPage = 15;

export const MainContent = ({ userState, setUserState }) => {
    const getUser = checkAuth();

    const [itemsPerPage, setItemsPerPage] = useState(maxItemsPerPage);

    const [itemOffset, setItemOffset] = useState(0);

    const [currentItems, setCurrentItems] = useState(fetchGames().sort((a, b) => { return b.createTimestamp - a.createTimestamp }));

    const [pageCount, setPageCount] = useState(Math.ceil(currentItems.length / itemsPerPage));

    const [modalState, setModalState] = useState(false);

    const [mobileState, setMobileState] = useState(window.innerWidth <= 576);

    const authUser = useCallback((e) => {
        e.preventDefault();

        const getAllUsers = fetchUsers();

        const findUser = getAllUsers.filter(x => x.user.login === e.target[0].value && x.user.password === e.target[1].value)[0];

        if (!findUser) return;

        localStorage.setItem("user", JSON.stringify({ username: findUser.user.name, login: e.target[0].value, image: { URL: findUser.user.avatar.URL } }));

        setModalState(false);
        setUserState(true);
    }, [setModalState, setUserState]);

    const addGameCard = useCallback((e) => {
        e.preventDefault();

        const getSortValue = document.querySelector(".vr-games-panel__select");

        const itemsGames = [...currentItems];

        itemsGames.push({
            id: GenerateID(),
            game: {
                name: e.target[0].value,
                description: e.target[1].value,
                image: {
                    URL: e.target[3].value
                }
            },
            user: {
                avatar: {
                    URL: getUser.avatar.URL
                },
                name: getUser.user.name,
                review: e.target[2].value
            },
            createTimestamp: Date.now()
        });

        switch (getSortValue.value) {
            case "time-new":
                itemsGames.sort((a, b) => { return b.createTimestamp - a.createTimestamp });
                break;
            case "time-last":
                itemsGames.sort((a, b) => { return a.createTimestamp - b.createTimestamp });
                break;
            default:
                itemsGames.sort((a, b) => { return b.createTimestamp - a.createTimestamp });
                break;
        }

        setCurrentItems(itemsGames);

        localStorage.setItem("games", JSON.stringify(itemsGames));
        setPageCount(Math.ceil(itemsGames.length / itemsPerPage));

        setModalState(false);
    }, [currentItems, itemsPerPage, getUser]);

    const parseItemGames = useCallback(() => {
        if (!currentItems || currentItems.length === 0) return;

        return currentItems.slice(itemOffset, itemOffset + itemsPerPage);
    }, [currentItems, itemOffset, itemsPerPage]);

    const sortItems = useCallback((e) => {
        switch (e.target.value) {
            case "time-new":
                setCurrentItems([...currentItems.sort((a, b) => { return b.createTimestamp - a.createTimestamp })]);
                break;
            case "time-last":
                setCurrentItems([...currentItems.sort((a, b) => { return a.createTimestamp - b.createTimestamp })]);
                break;
            default:
                return [];
        }
    }, [currentItems]);

    const pageClick = useCallback((e) => {
        const newOffset = e.selected * itemsPerPage % currentItems.length;
        setItemOffset(newOffset);
    }, [itemsPerPage, currentItems])

    const resizeHandler = useCallback(() => {
        if (window.innerWidth <= 576 && !mobileState) { setItemsPerPage(minItemsPerPage); setPageCount(Math.ceil(currentItems.length / minItemsPerPage)); setMobileState(true); return; }
        if (window.innerWidth > 576 && mobileState) { setItemsPerPage(maxItemsPerPage); setPageCount(Math.ceil(currentItems.length / maxItemsPerPage)); setMobileState(false); return; }
    }, [mobileState, currentItems])

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler)
        }
    }, [resizeHandler])

    return (
        <main className="main-content">
            <VRGamesPanel
                gamesAvaiable={Boolean(currentItems.length)}
                sortItems={sortItems}
                addGameCard={addGameCard}
                userState={userState}
                authUser={authUser}
                modalState={modalState}
                setModalState={setModalState}
            />
            <ItemGames
                itemGames={parseItemGames()}
            />
            <ReactPaginate
                nextLabel=">"
                onPageChange={pageClick}
                pageRangeDisplayed={1}
                marginPagesDisplayed={2}
                pageCount={pageCount}
                previousLabel="<"
                pageClassName="page-list-content"
                pageLinkClassName="page-link"
                previousClassName="page-list-content"
                previousLinkClassName="page-link__arrow"
                nextClassName="page-list-content"
                nextLinkClassName="page-link__arrow"
                breakLabel="..."
                breakClassName="page-list-content"
                breakLinkClassName="page-breakpoint"
                containerClassName="items-list-pagination"
                activeClassName="page-selected"
                disabledClassName="page-list-inactive"
                renderOnZeroPageCount={null}
            />
        </main>
    )
}
