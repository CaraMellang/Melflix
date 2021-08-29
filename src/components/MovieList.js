import React from 'react';
import styled from 'styled-components';
import useMovie from './hooks/useMovie';
import Pagination from './Pagination';
import MovielistItem from './MovieListItem';
import media from '../lib/media';

function MovieList() {
  const {
    movieList,
    loading,
    currentPage,
    postsPerPage,
    setCurrentPage,
    setPostsPerPage,
  } = useMovie();

  if (loading) {
    return <span style={{ color: 'white' }}>로딩중...</span>;
  }

  return (
    <Wrapper>
      <div>
        <div className='top-rated'>Top Rated</div>
        <div className='movies'>
          {movieList.map(data => (
            <div className='movie-item'>
              <MovielistItem key={data.id} data={data} />
            </div>
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          postsPerPage={postsPerPage}
          setPostsPerPage={setPostsPerPage}
        />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .movies {
    display: flex;
    flex-wrap: wrap;
    padding: 30px;
    padding-top: 0;
    color: white;
  }
  
  .movies a {
    display: flex;
    justify-content: center;
    text-decoration-line: none;
    text-decoration: none;
  }

  .top-rated {
    color: white;
    font-weight: bold;
    border-bottom: 1px solid white;
    padding-top: 4.5rem;
    padding-bottom: 0.25rem;
  }
  .top-rated {
    margin-left: 3rem;
    width: 95%;
  }

  .movie-item {
    margin: 1.25rem 2rem;
    width: calc((100% - 10.3rem) / 7);
  }
  ${media.xlarge} {
    .movie-item {
      margin: 1.25rem 2rem;
      width: calc((100% - 20rem) / 5);
    }
  }
  ${media.large} {
    .movie-item {
      margin: 1.25rem 2rem;
      width: calc((100% - 16rem) / 4);
    }
  }

  ${media.medium} {
    .movies {
      /* padding-left: 2.5%;
      padding-right: 2.5%; */
      padding-left: 0;
      padding-right: 0;
      gap: 2rem;
    }

    .movie-item {
      margin: 1.25rem 2rem;
      width: calc((100% - 16rem) / 3);
    }
  }
  ${media.small} {
    .movies {
      gap: 1.5rem;
    }

    .movie-item {
      margin: 1.25rem 2rem;
      width: calc((100% - 9.5rem) / 2);
    }

    ${media.xsmall} {
      .sidebar-mobile-tagmenu {
        display: flex;
        justify-content: space-between;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 2rem;
        align-items: center;
      }
      .movies {
        gap: 0.45rem;
      }

      .movie-item {
        margin: 1.25rem 2rem;
        width: calc((100% - 1rem) / 3);
      }
    }
    ${media.xxsmall} {
      .sidebar-mobile-tagmenu {
        display: flex;
        justify-content: space-between;
        padding-left: 1rem;
        padding-right: 1rem;
        height: 2rem;
        align-items: center;
      }
      .movies {
        padding-left: 2%;
        padding-right: 2%;
        gap: 5px;
      }
      .movie-item {
        margin: 1.25rem 2rem;
        width: 100%;
      }
    }
  }
`;

export default MovieList;
