import { useDispatch, useSelector } from "react-redux"
import { Loader } from "../ui"
import { useEffect } from "react"
import { getArticleSuccess, getArticlesStart } from "../slice/article"
import ArticleService from "../service/article"
import ArticleCard from "./article-card"

function Main() {
  const { articles, isLoading } = useSelector(state => state.article)
  const dispatch = useDispatch()

  const getArticles = async () => {
    dispatch(getArticlesStart())
    try {
      const repons = await ArticleService.getArticles()
      dispatch(getArticleSuccess(repons.articles))
      console.log(repons);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArticles()
  }, [])

  return (
    <>
      {isLoading && <Loader />}
      <div className="album py-5">
        <div>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {articles.map(item => (
              <ArticleCard item={item} getArticles={getArticles} />
            ))}

          </div>
        </div>
      </div>
    </>
  )
}

export default Main
