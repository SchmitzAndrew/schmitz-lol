export const getScreenConfig = (width: number) => {
  if (width >= 1536) return { textWidth: 200, baseSpeed: 32, textSizeClass: 'text-6xl', sliderHeight: 100 };
  if (width >= 1280) return { textWidth: 175, baseSpeed: 31, textSizeClass: 'text-5xl', sliderHeight: 90 };
  if (width >= 1024) return { textWidth: 150, baseSpeed: 30, textSizeClass: 'text-5xl', sliderHeight: 80 };
  if (width >= 896) return { textWidth: 125, baseSpeed: 29, textSizeClass: 'text-4xl', sliderHeight: 70 };
  if (width >= 768) return { textWidth: 100, baseSpeed: 28, textSizeClass: 'text-4xl', sliderHeight: 60 };
  if (width >= 640) return { textWidth: 75, baseSpeed: 26, textSizeClass: 'text-3xl', sliderHeight: 50 };
  if (width >= 480) return { textWidth: 50, baseSpeed: 25, textSizeClass: 'text-2xl', sliderHeight: 40 };
  return { textWidth: 25, baseSpeed: 24, textSizeClass: 'text-xl', sliderHeight: 30 };
};

export const colors = [
  '#6b64a5', '#1073ae', '#1787b1', '#e98299', '#037fa2', '#287ebf', '#dcc5b6', '#ea8362',
  '#068ec4', '#1b7796', '#1db3e2', '#11b1d7', '#127eb7', '#ebe6dd', '#dbc7ca', '#c2c2b7',
  '#dfccc8', '#157eb5', '#267ea2', '#198dc3', '#1187ad', '#1577b0', '#268ca8', '#4b627b',
  '#a3cceb', '#2a2e3b', '#03839c', '#1a7cb3', '#076497', '#105790', '#2778a8', '#67abcb',
  '#0b98b3', '#2da6ca', '#73b7cf', '#2990d5', '#126eb0', '#2476ba', '#b3b3b4', '#dcbeb6',
  '#1b88a9', '#302e36', '#0b6a9c', '#0f88a8', '#0f67a8', '#279dcb', '#0f94ad', '#0d79b4',
  '#7199b4', '#20a3db', '#a4b2c0', '#f3dbd3', '#1084ae', '#0f82bc', '#2e7fc3', '#7f9aae',
  '#1991bc', '#eedccc', '#eee7dc', '#e0c8ba', '#1697cb', '#f8e1cf', '#f1d4d2', '#18aae4',
  '#1d8ec3', '#2a9dd2', '#d0cac6', '#efdbce', '#148ecb', '#b9b9b8', '#106a9b', '#1a92b2',
  '#0a6793', '#f4dcce', '#0d5d93', '#3ea6bc', '#debfb1', '#1e82aa', '#e87881', '#f28682',
  '#9682a1', '#4d93c1', '#d3c3cb', '#2e465d', '#03619e', '#ebd5c6', '#0d78a1', '#54b8ec',
  '#0f7ca3', '#f9bfaa', '#0b6698', '#cdcbc7', '#7197ae', '#0c72a3', '#d6c3c7', '#13719f',
  '#d6c3be', '#1078a8', '#af72b3', '#fcc6a4', '#1180b5', '#e2dcda', '#e3cbcd', '#c6bdc2',
  '#0c789d', '#1991aa', '#1d88c9', '#2d90d6', '#2780ab', '#2d6bb9', '#288fcd', '#20b5e5',
  '#1483b1', '#11b1d8', '#efd7cb', '#33313f', '#2a2b3a', '#afaeb5', '#bdbebb', '#0871a3',
  '#0c6494', '#e8d3d5', '#48aae3', '#137ca2', '#0d6998', '#2a8cb2', '#4baddb', '#d8e8ee',
  '#ead9d1', '#2184a9', '#3e98db', '#dfccc1', '#237eaf', '#2090c6', '#1f8ec2', '#55adde',
  '#14aadc', '#17b3db', '#d3bac7', '#e7c4c0', '#e4ccce', '#46b8d9', '#1976b6', '#157cc3',
  '#2078a8', '#2799d3', '#cdcddc', '#eacecd', '#148dc6', '#383138', '#709ec1', '#106099',
  '#89b7df', '#2983c4', '#715a86', '#dfcdc2', '#1070ad', '#d9b3d8', '#09538c', '#245b92',
  '#0a6d94', '#1178b2', '#eae3d7', '#08558d', '#fdd0a4', '#1b8bc2', '#efddcd', '#076597',
  '#0d72aa', '#1369a3', '#97aed1', '#62b6e7', '#0f1820', '#0f78bb', '#76a7cf', '#298aaf',
  '#1c86bd', '#78a4b7', '#2281c3', '#38a1c6', '#f595ab', '#1185b9', '#3f9ece', '#e8d0ce',
  '#2a2736', '#b09ab0', '#ebcdbe', '#3a8bcf', '#1d87b6', '#32b0d4', '#688faa', '#cebbc1',
  '#147ba4', '#085680', '#beb8be', '#128bac', '#024b84', '#166da1', '#efe6e3', '#30a8d3',
  '#125b92', '#1ca1d5', '#0e81af', '#086896', '#54b9e5', '#075e94', '#3bacd8', '#357cc5',
  '#1eb1d5', '#1585b0', '#10588f', '#2394ca', '#c9cde6', '#1584ac', '#e9cdd4', '#2c93af',
  '#3e90ac', '#167eb5', '#298ab0', '#30a5be', '#cbb4b1', '#1e8abc', '#119ab3', '#21394b',
  '#0f7ba2', '#077ca1', '#2db7dc', '#2da8dd', '#4793b3', '#096aa5', '#118ab4', '#075d8e',
  '#2fabe0', '#0e7ea7', '#1786b1', '#349cb7', '#1276a2', '#49cbf2', '#f7ddec', '#0b7da0',
  '#146ea0', '#b882c4', '#519eb8', '#be82c3', '#c0d3d8', '#0fb1d6', '#016fae', '#e4bcc8',
  '#1a81aa', '#96a7bb', '#b5d2e2', '#5b94b1', '#1e86ab', '#0b63a3', '#c87dc3', '#0b7daa',
  '#0f739e', '#299fcb', '#0c70a8', '#0daed8', '#075c8f', '#9ab3c3', '#168fb7', '#d0778d',
  '#e1beaf', '#49aac1', '#086797', '#0f84ad', '#1a74a1', '#232c38', '#1d90bc', '#ceb5c7',
  '#e5769a', '#6cb2dd', '#1281a9', '#0471b2', '#167db8', '#0e7fa6', '#3e3f4e', '#d592c8',
  '#8ec0e1', '#0e5891', '#e6c7cd', '#f2d4bc', '#126b9e', '#0f568d', '#cbb3a7', '#0d5d94',
  '#5c8bbb', '#0c6297', '#d7d1cd', '#f9cca1', '#267fa5', '#22598b', '#0e6297', '#f3e1d1',
  '#e77ea0', '#bdb6ba', '#4dbdf2', '#f58a9d', '#dec6c0', '#2d2c39', '#d6727a', '#6ba9c3',
  '#fcb18e', '#157ca8', '#f6ded0', '#40b0dc', '#167abb', '#1c8ac3', '#d9c5c4', '#d9d1c5',
  '#cfc9bc', '#f4d0d4', '#138cb1', '#1088ad', '#b0bfcb', '#7199b1', '#157daa', '#b7b5ba',
  '#14b5dc', '#d4c1cd', '#1d62aa', '#349cda', '#3c8bb1', '#0a7e9d', '#39c5f0', '#047196',
  '#4688a6', '#2da4c1', '#116894', '#efd6d4', '#c2d8e9', '#d9bfac', '#0a6094', '#13719f',
  '#5996b1', '#20b5e7', '#0c719c', '#71b4c5', '#d8c0b3', '#0979ab', '#f0cbd1', '#076492',
  '#1a8eb4', '#ed854f', '#127eaf', '#e0d9cc', '#d8babe', '#f5a079', '#f0d5d0', '#d3696d',
  '#dfccc5', '#ded9d3', '#dcc8c5', '#d9c8c9', '#2687a8', '#e4c8cf', '#e1c6cd', '#0a709d',
  '#659ab9', '#1375b1', '#1878bc', '#c0c5bd', '#2094b4', '#f9d4b4', '#f1dfcf', '#edeae2',
  '#0f72ae', '#06568e', '#0d5d96', '#2fa4d2', '#277cbe', '#efe7e2', '#a2aec5', '#f0d2d9',
  '#fd9c5d', '#1b6ea9', '#158eab', '#e5cbce', '#cacad8', '#4eb1c6', '#0d81a4', '#e5cfc8',
  '#0e7ab4', '#7ab7e0', '#f39d61', '#eed1bd', '#eb8299', '#0671a1', '#4784a0', '#0a5d93',
  '#e5ccbb', '#e27c85', '#247495', '#0f8fb8', '#328cb2', '#ecbfca', '#20b6de', '#0b70a1',
  '#b8b2b6', '#0986a7', '#92a1b4', '#765f8d', '#dbcfc8', '#0a588d', '#085188', '#f7ca9e',
  '#2c8ecb', '#4db4e9', '#137cb6', '#f6dfd9', '#f6e3db', '#335380', '#0e74af', '#289ab5',
  '#dec5b7', '#1776b4', '#19aee2', '#1c85bc', '#0d548e', '#1484ae', '#084559', '#4886a0',
  '#be7c3a', '#3183ca', '#1386b5', '#1480a6', '#c8658f', '#2892b1', '#f2ede1', '#2c80ae',
  '#fcf2e8', '#0e6998', '#2095b7', '#1c76a4', '#f6906c', '#0d6ea0', '#1170ac', '#146dab',
  '#14668f', '#ece8e2', '#ead5d7', '#2087bf', '#e6c9cd', '#ecdbd3', '#1683b1', '#905770',
  '#0a5f93', '#eff2f3', '#f7b396', '#1373a6', '#156da8', '#065991', '#148eb7', '#e4e6e4',
  '#2f485c', '#1174b1', '#13729e', '#b06564', '#4c7ea6', '#136f9e', '#09709d', '#0f689b',
  '#e6cecf', '#1e84bd', '#2093b0', '#218db1', '#0a4b83', '#dbc8c1', '#0c538d', '#1a95c2',
  '#0c558c', '#71bae2', '#398db9', '#116d9d', '#d390d5', '#1e94b7', '#2085ad', '#20c1e6',
  '#1aa9e6', '#2d3043', '#0a72b6', '#1177a2', '#096d99', '#07a6d6', '#0e84ae', '#e3c9c4',
  '#0f73a2', '#1a8cbb', '#49bbe1', '#205ba8', '#3aa7da', '#ecd3d6', '#628aa7', '#0b5e8f',
  '#136d9d', '#ec707f', '#17385f', '#23b3db'
];

export const getRandomColor = () => colors[Math.floor(Math.random() * colors.length)];

export const getRandomColorSubset = (count: number) => {
  const shuffled = [...colors].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};