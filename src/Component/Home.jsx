import { useEffect } from 'react';
import VideoCards from './VideoCards';
import Tabs from './Tabs';
import React, { useState } from 'react';
import axios from 'axios';
import Loading from './Loading';
import Header from './Header';
import Sidebar from './Sidebar';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Home() {
  const [video, setVideo] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentTab, setCurrentTab] = useState(-1);
  const [searchKeyword, setSearchKeyword] = useState('');

  useEffect(() => {
    getTrending();
    getGenres();
  }, []);

  const searchClickListener = (keyword) => {
    setSearchKeyword(keyword);
    const api_key = 'b0fa49a28350a881c883e5ebaf7cfccd';
    const url = `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${keyword}&page=1&include_adult=false`;
    setVideo([]);
    axios
      .get(url)
      .then((res) => {
        setSearchResult(res.data.results);
      })
      .catch((e) => console.log(e));
    setCurrentTab(-1);
  };

  useEffect(() => {
    if (searchResult.length || video.length) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [searchResult, video]);

  const getTrending = () => {
    const api_key = 'b0fa49a28350a881c883e5ebaf7cfccd';
    const url = `https://api.themoviedb.org/3/trending/movie/week?api_key=${api_key}`;
    axios
      .get(url)
      .then((res) => {
        setVideo(res.data.results);
      })
      .catch((e) => console.log(e));
  };

  const getGenres = () => {
    const api_key = 'b0fa49a28350a881c883e5ebaf7cfccd';
    const genresUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${api_key}&language=en-US`;
    fetch(genresUrl)
      .then((res) => res.json())
      .then((data) => {
        setGenres(data.genres);
      })
      .catch((e) => console.log(e));
  };

  const ClearClickListener = () => {
    setSearchResult([]);
    if (currentTab >= 0) {
      searchWithGenres(currentTab);
    } else {
      getTrending();
    }
  };

  const tabsClickListener = (tab) => {
    console.log(currentTab, tab);
    if (currentTab === tab) {
      setCurrentTab(-1);
      getTrending();
    } else {
      setCurrentTab(tab);
      searchWithGenres(tab);
    }
  };

  const searchWithGenres = (tab) => {
    setVideo([]);
    const api_key = 'b0fa49a28350a881c883e5ebaf7cfccd';
    const url = `https://api.themoviedb.org/3/discover/movie?api_key=${api_key}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${genres[tab].id}&with_watch_monetization_types=flatrate`;
    axios
      .get(url)
      .then((res) => {
        setVideo(res.data.results);
      })
      .catch((e) => console.log(e));
  };

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-gray-100">
        <body class="h-full">
        ```
      */}
      <div className="min-h-full">
        {/* When the mobile menu is open, add `overflow-hidden` to the `body` element to prevent double scrollbars */}
        <Header searchClickListener={searchClickListener} />

        <div className=" pl-8">
          <div className="flex gap-8 w-full">
            <Sidebar />
            <div className="bg-[#121212] w-full relative">
              <Tabs
                tabsClickListener={tabsClickListener}
                tabs={genres}
                currentTab={currentTab}
              />
              <div className=" mt-20 w-full">
                {loading ? (
                  <Loading />
                ) : (
                  <div>
                    {searchResult.length ? (
                      <div>
                        <div className="flex gap-8 p-8">
                          <h2 className="text-white text-4xl font-bold">
                            "{searchKeyword}" Search results
                          </h2>
                          <button
                            onClick={ClearClickListener}
                            className="text-gray-800 text-sm font-bold flex justify-center gap-2 items-center active:bg-gray-400 rounded-xl px-2  bg-white"
                          >
                            CLEAR{' '}
                            <span className="text-rose-600 text-xl"> X</span>
                          </button>
                        </div>
                      </div>
                    ) : (
                      ''
                    )}
                    <VideoCards
                      videos={searchResult.length ? searchResult : video}
                    />
                  </div>
                )}
                {/* {searchResult.length ? (
                  <div>
                    <div className="flex gap-8 p-8">
                      <h2 className="text-white text-4xl font-bold">
                        Search results
                      </h2>
                      <button
                        onClick={ClearClickListener}
                        className="text-gray-800 text-sm font-bold flex justify-center gap-2 items-center active:bg-gray-400 rounded-xl px-2  bg-white"
                      >
                        CLEAR <span className="text-rose-600 text-xl"> X</span>
                      </button>
                    </div>
                    <div>
                      <VideoCards posts={searchResult} />
                    </div>
                  </div>
                ) : (
                  <VideoCards posts={video} />
                )} */}

                {/* <VideoCards />
                <Shorts />
                <VideoCards />
                <VideoCards /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
