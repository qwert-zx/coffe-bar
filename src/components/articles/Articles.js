import React, { useState, useEffect } from "react";
import Modal from "../modal/Modal";
import Bcg from "../../images/article-bcg.png"
import "../articles/article.css"

function Articles() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    const [modalActive, setModalActive] = useState(false);
    const [modalTitle, setModalTitle] = useState('')
    const [modalArtivle, setModalArticle] = useState('')

    useEffect(() => {
      setStorage();
    }, []);
  
    useEffect(() => {
      if (!items || items.length === 0)  {
        const articleLocal = getStorage();
  
        if (articleLocal && articleLocal.length > 0) {
          setItems([...articleLocal]);
        }
      } else {
        setStorage();
      }
  
      // eslint-disable-next-line react-hooks/exhaustive-deps		
    }, [items]);
  
    function setStorage() {
      let itemsTmp = items;
      itemsTmp = JSON.stringify(itemsTmp);
  
      if (!itemsTmp) return;
  
      localStorage.setItem('article', itemsTmp);
    }
  
    function getStorage() {
      let itemsTmp = localStorage.getItem('article');
      if (!itemsTmp) return;
      itemsTmp = JSON.parse(itemsTmp);
      if (!itemsTmp) return;
      return itemsTmp;
    }

    useEffect(() => {
      fetch("http://jsonplaceholder.typicode.com/posts?_page=1&_limit=4")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, [])

    console.log(items)

    function read(event){
      setModalTitle(event.target.closest('.article__wrapper').children[0].innerText)
      setModalArticle(event.target.closest('.article__wrapper').children[1].innerText)
    };

    if (error) {
      return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Загрузка...</div>;
    } else {
      return (
        <>
        <ul>
            {items.map(item => (
            <li key={item.id}>
                <div className={"img_" + item.id}></div>
                <div className="blog__article_autor">
                    <div className="autor__wrapper">
                        <div id={'autor' + item.userId}></div>
                        <div className="autor__name">Andrew Jonson</div>
                    </div>
                    <div className="article__wrapper">
                        <span className="blog__article_title">{item.title}</span>
                        <span className="blog__article_description">{item.body}</span>
                        <a onClick={(event) => setModalActive(true, read(event))}>Read More</a>
                    </div>

                    <Modal active={modalActive} setActive={setModalActive}>
                        <span className="modal__article_title">{modalTitle}</span>
                        <img className="modal__article_bcg" src={Bcg} alt="Article" />
                        <span className="modal__article_discription">{modalArtivle}</span>
                    </Modal>

                </div>
            </li>))}
        </ul>
        </>
      );
    }
  }


export default Articles;