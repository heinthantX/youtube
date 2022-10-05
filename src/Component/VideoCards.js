/* This example requires Tailwind CSS v2.0+ */
// const posts = [
//   {
//     title: 'Boost your conversion rate',
//     href: '#',
//     category: { name: 'Article', href: '#' },
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
//     date: 'Mar 16, 2020',
//     datetime: '2020-03-16',
//     imageUrl:
//       'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     readingTime: '1 day ago',
//     author: {
//       name: 'Roel Aufderehar',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     title: 'How to use search engine optimization to drive sales',
//     href: '#',
//     category: { name: 'Video', href: '#' },
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
//     date: 'Mar 10, 2020',
//     datetime: '2020-03-10',
//     imageUrl:
//       'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     readingTime: '3 weeks ago',
//     author: {
//       name: 'Brenna Goyette',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     title: 'Improve your customer experience',
//     href: '#',
//     category: { name: 'Case Study', href: '#' },
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
//     date: 'Feb 12, 2020',
//     datetime: '2020-02-12',
//     imageUrl:
//       'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     readingTime: '1 year ago',
//     author: {
//       name: 'Daniela Metz',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
//   {
//     title: 'Improve your customer experience',
//     href: '#',
//     category: { name: 'Case Study', href: '#' },
//     description:
//       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
//     date: 'Feb 12, 2020',
//     datetime: '2020-02-12',
//     imageUrl:
//       'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
//     readingTime: '2 months ago',
//     author: {
//       name: 'Daniela Metz',
//       href: '#',
//       imageUrl:
//         'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
//     },
//   },
// ];

import '../App.css';

export default function VideoCards({ videos }) {
  return (
    <div className="relative grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] mt-4 mx-6 ">
      {videos.map((video) => (
        <div
          key={video.title}
          className="flex flex-col flex-1 overflow-hidden rounded-lg shadow-lg"
        >
          <div className="flex-shrink-0">
            <img
              className="h-48 w-72 object-cover"
              src={`https://image.tmdb.org/t/p/original${video.poster_path}`}
              alt=""
            />
          </div>
          <div className="flex flex-col  bg-[#121212] py-4">
            <div className="flex">
              <div className="flex-shrink-0">
                <a href={'eroieos'}>
                  <span className="sr-only">{video.media_type}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={`https://image.tmdb.org/t/p/original${video.poster_path}`}
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-white mb-1">
                  <a href={'eroiero'}>{video.title}</a>
                </p>
                <p className="text-xs text-gray-400">
                  <a>{video.media_type || 'Hello'}</a>
                </p>
                <div className="flex space-x-1 text-xs text-gray-400">
                  <time dateTime={video.release_date}>
                    {video.media_type || 'Hello'}
                  </time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{video.release_date}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
