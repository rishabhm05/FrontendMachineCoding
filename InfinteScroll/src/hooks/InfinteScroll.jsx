import React, { useCallback, useEffect, useRef, useState } from 'react';

const InfiniteScroll = ({ fetchdata, renderitem, datalist }) => {
  const [loading, setLoading] = useState(true);
  const [page,setpage] = useState(1);
  const observer = useRef(null);
  const loader =useRef(null);

 

  const lastElementObserver = useCallback(
    
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setpage(page+1)
          
        }
      });
      if (node) observer.current.observe(node);
    },
    [loading]
  );

  const renderList = () =>
    datalist.map((dataItem, index) =>
      index === datalist.length - 1
        ? renderitem(dataItem, dataItem.id, lastElementObserver)
        : renderitem(dataItem, index, null)
    );

  const getMoreData = () => {
    setLoading(true);
    fetchdata(page).then(() => setLoading(false));
  };

  useEffect(() => {
    getMoreData();
  }, [page]);

  return (
    <div>
      {renderList()}
      <div ref={loader} className='loader'>
       {loading&&<div className='loading'>loading...</div>}
       
      </div>
    </div>
  );
};

export default InfiniteScroll;
