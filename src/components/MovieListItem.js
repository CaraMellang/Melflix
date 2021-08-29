import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const MovieListItem = props => {
  const { id, title, year, rating, large_cover_image } = props.data;

  return (
    <>
      <Wraper
        to={{
          pathname: `/movie/${id}`,
          state: {
            data: props.data,
          },
        }}
      >
        <div className='item-contents'>
          <img src={large_cover_image} alt={title} />
          <Content>
            <Header>
              <span style={{ fontSize: '13px' }}>
                {title.slice(15) !== ''
                  ? `${title.slice(0, 15)}...`
                  : title.slice(0, 15)}
              </span>
              <span>{year}</span>
              <span style={{ fontSize: '13px' }}>
                <FontAwesomeIcon icon={faStar} style={{ color: '#f7cf1e' }} />
                {rating}/10.0
              </span>
            </Header>
          </Content>
        </div>
      </Wraper>
    </>
  );
};

const Wraper = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 1px solid none;
  border-radius: 5px;
  span {
    margin: 0;
  }
  img {
    max-width: 100%;
    border: 1px solid none;
    border-radius: 5px;
  }
  .item-contents {
    text-align: center;
  }
`;
const Content = styled.div`
  display: flex;
  flex-direction: column;
  p {
    justify-content: center;
    text-align: center;
  }
`;
const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
`;

export default MovieListItem;
