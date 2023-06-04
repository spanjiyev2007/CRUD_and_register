import { useParams } from "react-router-dom";
import ArticleService from "../service/article";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getArticleDetailFailure, getArticleDetailStart, getArticleDetailSuccess } from "../slice/article";

const Loader = () => {
    return (
        <div className="container mt-1">
            <p>Malumotlar yuklanmoqda biroz kutib turing...</p>
            <div className="spinner-border d-block mx-auto" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
}

const ArticleDetail = () => {
    const { slug } = useParams();
    const dispatch = useDispatch();
    const { articleDetail, isLoading } = useSelector(state => state.article);

    useEffect(() => {
        const getArticleDetail = async () => {
            dispatch(getArticleDetailStart());
            try {
                const response = await ArticleService.getArticleDetail(slug);
                dispatch(getArticleDetailSuccess(response.article));
            } catch (error) {
                dispatch(getArticleDetailFailure());
            }
        };
        getArticleDetail();
    }, [slug]);

    return isLoading ? (
        <Loader />
    ) : (
        articleDetail !== null && (
            <div>
                <div className='py-3 mb-4  rounded-3'>
                    <div className='container-fluid pb-5'>
                        <h1 className='display-5 fw-bold'>{articleDetail.title}</h1>
                        <p className='col-md-8 fs-4'>{articleDetail.description}</p>
                        <div class='col-md-6'>
                            <div class='row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative'>
                                <div class='col p-4 d-flex flex-column position-static'>
                                    <strong class='d-inline-block mb-2 text-primary text-uppercase'>{articleDetail.author.username}</strong>
                                    <p class='card-text mb-auto'>{articleDetail.author.bio}</p>
                                </div>
                                <div class='col-auto d-none d-lg-block'>
                                    <svg
                                        class='bd-placeholder-img'
                                        width='200'
                                        height={'100%'}
                                        xmlns='http://www.w3.org/2000/svg'
                                        role='img'
                                        aria-label='Placeholder: Thumbnail'
                                        preserveAspectRatio='xMidYMid slice'
                                        focusable='false'
                                    >
                                        <title>Placeholder</title>
                                        <rect width='100%' height='100%' fill='#55595c'></rect>
                                        <text x={'45%'} y={'53%'} fill={'#fff'} className='fs-2 text-uppercase p-0 m-0'>
                                            {articleDetail.author.username[0]}
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div>{articleDetail.body}</div>
                        <br />
                        <a className="text-decoration-none" href="/">
                            <button className="btn btn-danger btn-lg" type="button">Back</button>
                        </a>
                    </div>
                </div>
            </div>
        )
    )
};

export default ArticleDetail;