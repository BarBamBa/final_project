import React, { useEffect, useState } from 'react'
import SearchBar from '../../components/SearchBar'
import VolunteerList from '../../components/VolunteerList';
import '/src/scss/Volunteer.scss'

function Volunteer() {

  const [params, setParams] = useState({
    // numOfRows: 30,
    // pageNo: 5,
    schCateGu: 'all',
    keyword: '',
    schSido: '',
    schSign1: '',
    upperClCode: '',
    nanmClCode: '',
    progrmBgnde: '',
    progrmEndde: '',
    adultPosblAt: '',
    yngbgsPosblAt: '',
  });

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async() => {
          const res = await fetch('/api/list', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                schCateGu: 'all',
                keyword: '',
            })
          });
          const result = res.json();
          return result;
        }	
        
        fetchData().then(res => {
          setData(res);
        });
    }, []);

  return (
    <main>
      <div className='pageTitle'>
        봉사활동찾기
      </div>
      <SearchBar data={data} />
      <div>
        { data ? "검색 결과가 없습니다." : data.map((Item, idx) => 
          <VolunteerList data={Item} num={idx} key={idx} />
        )}
      </div>
    </main>
  )
}


export default Volunteer