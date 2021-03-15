import React from 'react'
import {useCallback, useEffect} from "react";
import { useDispatch,useSelector} from "react-redux"
import {getArticles} from "../../store/articles/actions";
import {STATUSES} from "../../utils/constants";

export default function Home() {
    const dispatch = useDispatch();
    const articles = useSelector(state => state.articles.articles)
    const articlesRequest = useSelector(state => state.articles.request)
    useEffect(() => {
        dispatch(getArticles());
    }, [dispatch]);
    const renderArticle = useCallback((article) => (
        <div>
            <h4>{article.title}</h4>
            {/*<span>{article.summary}</span>*/}
        </div>
    ),[])

    if(articlesRequest === STATUSES.REQUEST) {
        return <h3>Loading</h3>
    }
    if(articlesRequest === STATUSES.FAILURE) {
        return <h3>ERROR</h3>
    }

    return (
        <>
            <div className='title'>HOME</div>
            {articles.map(renderArticle)}
        </>
    )
}